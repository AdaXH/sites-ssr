import { Readable } from 'stream';
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { render } from 'ssr-core-react';
import { ApiDetailService } from '@/service/detail';
import { UserService } from '@/service/User';

interface IEggContext extends Context {
  body: Readable;
}

@Provide()
@Controller('/')
export class Index {
  @Inject()
  ctx: IEggContext;

  @Inject('ApiDetailService')
  apiService: ApiDetailService;

  @Inject('UserService')
  userService: UserService;

  @Get('/')
  async handler(): Promise<void> {
    try {
      this.ctx.ApiDetailService = this.apiService;
      this.ctx.userService = this.userService;
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
