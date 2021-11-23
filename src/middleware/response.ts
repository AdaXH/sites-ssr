import { BizError, CommonResponse, ErrorCodeEnum } from '@/common';
import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class ResponseMiddleware implements IWebMiddleware {
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      try {
        await next();
        const res = ctx.body;
        const ContentType = ctx.response.header['content-type'];
        const statusCode = ctx.response.status;
        if (statusCode === 404) {
          throw new BizError('资源不存在', ErrorCodeEnum.NOT_FOUND);
        }
        if (/text\/html/.test(ContentType as string)) return;
        ctx.body = CommonResponse.success(res);
      } catch (error) {
        console.log('error', error);
        ctx.body = CommonResponse.error(error);
      }
    };
  }
}
