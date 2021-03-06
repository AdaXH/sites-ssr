// @ts-nocheck
import Cookies from 'js-cookie';
import Loading from '@/components/loading';
import Notification from '@/components/Notification';
import { NO_LOADING_API, NOERROR_API } from './constant';
import LoginModal from '@/components/loginModal';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

function parseError(error) {
  return error instanceof Object ? JSON.stringify(error) : error.toString() || '出错啦：' + error;
}

const isBuild = true;
export default function Api(
  url,
  method?: string = 'GET',
  data?: AnyCommonObj,
  isSvg = false,
): { success: boolean; data: any; totalCount?: number; [x: string]: any } {
  const _url_ = (isBuild ? url.replace(/api/, '') : url).replace(/\/more/, '');
  const { origin } = window.location;
  const needLoading = NO_LOADING_API.includes(
    /api/.test(_url_) ? _url_.replace(/api/g, '') : _url_,
  );
  // 不需要提示错误的接口
  const noError = NOERROR_API.includes(/api/.test(_url_) ? _url_.replace(/api/g, '') : _url_);
  if (!isSvg) {
    const options = {
      method,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        authorization: Cookies.get('siteToken') || 'null',
        withCredentials: true,
      },
    };
    method === 'POST' && (options.body = JSON.stringify(data));
    let senceKey = origin[origin.length - 1] === '/' ? '' : '/';
    if (isBuild) {
      senceKey = '';
    }
    return new Promise((resolve, reject) => {
      !needLoading && Loading.show({});
      fetch(`${origin}${senceKey}${_url_}`, options)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) return response.json();
          return response.status;
        })
        .then((result) => {
          if ((typeof result === 'boolean' && result) || result.success) {
            resolve(result);
          } else {
            reject(result);
            if (noError) {
              return;
            }

            Notification.fail({
              msg: parseError((result && result.errorMsg) || result),
            });
            if (result?.openLogin) {
              LoginModal.show({}, true);
            }
          }
        })
        .catch((err) => reject(err))
        .finally(() => {
          Loading.hide();
        });
    });
  } else {
    const options = {
      method,
      headers: {
        'content-type': 'image/svg+xml',
        accept: 'image/svg+xml',
        withCredentials: true,
      },
    };
    const { origin } = window.location;
    return new Promise((resolve, reject) => {
      fetch(`${origin}${_url_}`, options)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) return response.text();
          return response.status;
        })
        .then((response) => {
          resolve(response);
        });
    });
  }
}
