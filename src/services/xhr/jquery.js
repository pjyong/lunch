import $ from 'jquery'
import { rootPath, errHandler,ajaxDataType } from './config'

const xhr = ({ url, body = null, method = 'get' }) => {

  const defer = $.Deferred()

  let params = {
    type: method,
    url: rootPath + url,
    data: body,
    // xhrFields: { // 跨域允许带上 cookie
    //   withCredentials: [域名]
    // },
    };

    params = Object.assign(params, ajaxDataType)

  $.ajax(params)
  .done(defer.resolve)
  .fail(errHandler)

  return defer.promise()
}

export default xhr
