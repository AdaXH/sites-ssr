import { ReactMidwayFetch } from 'ssr-types-react';
import UserServiceImpl from '~/src/service/User/UserServiceImpl';

const fetch: ReactMidwayFetch<{
  apiService: {
    index: () => Promise<any>;
  };
  userService: UserServiceImpl;
}> = async ({ ctx, routerProps }) => {
  // 阅读文档获得更多信息 http://doc.ssr-fc.com/docs/features$fetch#%E5%88%A4%E6%96%AD%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83
  // const data = __isBrowser__
  //   ? await (await window.fetch('/api/index')).json()
  //   : await ctx!.apiService?.index();
  // const user = await ctx?.userService.getUserInfo('sdsajfafakfd');
  return {
    // 建议根据模块给数据加上 namespace防止数据覆盖
    user: {},
  };
};

export default fetch;
