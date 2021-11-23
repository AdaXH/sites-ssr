import { Readable } from 'stream';
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { render } from 'ssr-core-react';
import { IApiService } from '../interface';

interface IEggContext extends Context {
  body: Readable;
  apiService: IApiService;
}

@Provide()
@Controller('/')
export class Index {
  @Inject()
  ctx: IEggContext;

  @Inject('ApiService')
  apiService: IApiService;

  @Get('/')
  @Get('/detail/:id')
  async handler(): Promise<void> {
    try {
      this.ctx.apiService = this.apiService;
      const stream = await render<Readable>(this.ctx, {
        stream: true,
      });
      this.ctx.body = stream;
    } catch (error) {
      console.log(error);
      this.ctx.body = error;
    }
  }
}
