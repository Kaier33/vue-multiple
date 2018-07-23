import {isApp} from './env.js'
export default {
  created () {isApp ? window.vms[this.$options.name] = this : '' },
}