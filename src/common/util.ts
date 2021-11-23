import { verify } from 'jsonwebtoken';
import { BizError, ErrorCodeEnum } from '@/common';

export function getJWTPayload(token: string): unknown {
  // 验证并解析JWT
  if (!token) throw new BizError('你还没有登陆噢~', ErrorCodeEnum.NEED_LOGIN);
  return verify(token, 'secret');
}
export function parseToken(authorization: string): any {
  try {
    return getJWTPayload(authorization);
  } catch (error) {
    throw new BizError(
      error?.message || '鉴权失败，请重新登录',
      error?.errorCode || ErrorCodeEnum.PERMISSION_DENIED,
      error,
    );
  }
}

/**
 * 获取env
 * @return {string}
 */
export function getEnv(): string {
  const args = process.argv;
  return args[args.length - 1].replace(/--env=/, '');
}
