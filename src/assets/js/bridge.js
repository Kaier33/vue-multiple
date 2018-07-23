// import bridge from '@/assets/js/bridge.js'; // 引入桥
/* eslint-disable */

import { isObject, urlencode ,urlEncodeX} from './util'
import { isApp } from './env'


// 类型检查
function check (vms, _vmName, _data) {
  if (_vmName && !vms.hasOwnProperty(_vmName)) { throw new Error('没有发现' + _vmName) }
  if (_data && !isObject(_data)) { throw new Error(_vmName + ': 传入的$data应为一个对象') }
}

export default function (g) {
  if (!isApp) { return }
  if (g.hasOwnProperty('bridge')) {
    throw new Error('bridge字段被占用')
  } else {
    if (!g.vms) { throw new Error('没有发现vms字段') }
    let vms = g.vms
    if (!isObject(vms)) { throw new Error('vms类型错误') }

    g.bridge = {
      // 查看data
      getData (_vmName, isStringify) {
        _vmName = String(_vmName)
        check(vms, _vmName)
        let vm = vms[_vmName]
        return isStringify ? JSON.stringify(vm.$data, null, 4)
          : Object.assign({}, vm.$data)
      },
      // 推送数据到组件
      pushData (_vmName, _data) {
        _vmName = String(_vmName)
        check(vms, _vmName, _data)
        let vm = vms[_vmName]
        Object.assign(vm, _data)
      },
      
      /**
        * App调用组件内的方法  
        * @param  {string} _vmName       组件name
        * @param  {string} _methodName    组件方法名
        * @param  {string} _data          APP传过来的数据
      */
      callMethod(_vmName,_methodName,_data){
        let vm = vms[_vmName]
        vm[_methodName](_data)
      }

    }
  }
}


function execute (url) {
  let iframe = document.createElement('IFRAME')
  iframe.setAttribute('src', url)
  document.documentElement.appendChild(iframe)
  iframe.parentNode.removeChild(iframe)
  iframe = null
}

/* ======================================== 原生调用 ======================================== */

// 原生图片浏览
export function nativeBrowse (_imgUrl) {
  if (!isApp) { return }
  let temp = 'dgtle4://nativeBrowse/?imgUrl=' + _imgUrl
  execute(temp); console.log(temp); console.log('图片浏览: ', _imgUrl)
}
// 跳转外链
export function nativeOpenBrowser (_url) {
  if (!isApp) { return }
  let temp = 'dgtle4://nativeOpenBrowser/?url=' + _url
  execute(temp); console.log(temp); console.log('跳转外链: ', _url)
}



/* ======================================== 交互调用 ======================================== */
export function nativeGo (_viewName, _params) { // _params == obj ; _viewName == 视口的文件名
  if (!isApp) { return }
  console.log(_params)
  let temp = null;
  if(_params){
    temp = 'dgtle4://nativeGo?' + _viewName + '&' + urlencode(_params, false)
  }else{
    temp = 'dgtle4://nativeGo?' + _viewName
  }
  execute(temp); console.log(temp); console.log('跳转: ', _viewName, _params)
}
export function nativeWatchUser (_params) {
  if (!isApp) { return }
  let temp = 'dgtle4://nativeWatchUser/' + urlencode(_params)
  execute(temp); console.log(temp); console.log('关注用户: ', _params)
}

export function nativeViewUser (_params) {
  if (!isApp) { return }
  let temp = 'dgtle4://nativeViewUser/' + urlencode(_params)
  execute(temp); console.log(temp); console.log('查看用户: ', _params)
}

export function nativeViewTags (_params) {
  if (!isApp) { return }
  let temp = 'dgtle4://nativeViewTags/' + urlencode(_params)
  execute(temp); console.log(temp); console.log('查看标签: ', _params)
}
