import { BizError } from '@/common';
import { ErrorCodeEnum } from '@/common/Enum';
import { UserService } from '@/service/User';
import { Get, Provide, Inject, Controller } from '@midwayjs/decorator';
import { Context } from 'egg';

@Provide()
@Controller('/api')
export class Test {
  @Inject()
  ctx: Context;

  @Inject('UserService')
  userService: UserService;

  @Get('/test/:id')
  async testApi(): Promise<any> {
    const { id } = this.ctx.params;
    const user = await this.userService.getUserInfo(id);
    if (user) return user;
    if (!id) throw new BizError('1111', ErrorCodeEnum.REQUIRED_ARGUMENUT);
    return {
      data: 1,
    };
  }
}
