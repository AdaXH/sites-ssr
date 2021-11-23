import { BizError } from '@/common';
import { ErrorCodeEnum } from '@/common/Enum';
import { Get, Provide, Inject, Controller } from '@midwayjs/decorator';
import { Context } from 'egg';

@Provide()
@Controller('/api')
export class Test {
  @Inject()
  ctx: Context;

  @Get('/test/:id')
  async testApi(): Promise<any> {
    const { id } = this.ctx.params;
    if (!id) throw new BizError('1111', ErrorCodeEnum.REQUIRED_ARGUMENUT);
    return {
      data: 1,
    };
  }
}
