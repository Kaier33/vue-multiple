import { isBrowser, isApp } from './env'
// 暴露vm到windows
export function publishVmWindows () { 
  if (isBrowser) {
    window.vms = {}
  }
}

// 禁止IOS10双击缩放
export function disabledDoubleTouch () {
  var lastTouchEnd = 0
  document.addEventListener('touchend', function (event) {
    if (event.touches.length === 1) {
      let now = new Date().getTime()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    }
  }, false)
}


