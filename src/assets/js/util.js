export const emptyObject = Object.freeze({})
// export function creMap(){
//   return Object.create(null);
// }

export function type(_any) {
  let toString = Object.prototype.toString;
  return toString.call(_any).slice(8, -1)
}

export function isNumber(_any) { //NaN 也是==Number
  return !isNaN(_any) && type(_any) == 'Number'
}
export function isBoolean(_any) {
  return type(_any) == 'Boolea'
}
export function isDate(_any) {
  return type(_any) == 'Date'
}
export function isSymbol(_any) {
  return type(_any) == 'Symbol'
}
// 引用类型
export function isFunction(_any) {
  return type(_any) == 'Function'
}
export function isObject(_any) {
  return type(_any) == 'Object'
}
export function isArray(_any) {
  return type(_any) == 'Array' && Array.isArray(_any) //
}
export function isString(_any) {
  return type(_any) == 'String'
}
// isNaN 系统自带
export function isUndefined(_any) {
  return type(_any) == 'Undefined'
}
export function isNull(_any) {
  return type(_any) == 'Null'
}
export function isRegexp(_any) {
  return type(_any) == 'RegExp'
}

export function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

export function removeArrValue(_arr, _item) {
  if (_arr.length) {
    let index = _arr.indexOf(_item)
    if (index > -1) {
      return _arr.splice(index, 1)
    }
  }
}

export function toArray(_obj) {
  let arr = [];
  for (let i in _obj) {
    arr.push(_obj[i])
  }
  return arr
}

export function looseEqual(_a, _b) {
  if (_a === _b) return true;
  const isObjectA = isObject(_a)
  const isObjectB = isObject(_b)
  const isArrayA = isArray(_a)
  const isArrayB = isArray(_b)
  const isPrimitiveA = isPrimitive(_a)
  const isPrimitiveB = isPrimitive(_b)
  try {
    if (isObjectA && isObjectB) {
      const keysA = Object.keys(_a)
      const keysB = Object.keys(_b)
      return keysA.length === keysB.length && keysA.every(key => {
        return looseEqual(_a[key], _b[key])
      })
    } else if (isArrayA && isArrayB) {
      return _a.length === _b.length && _a.every((e, i) => {
        return looseEqual(e, _b[i])
      })
    } else if (!isPrimitiveA && !isPrimitiveB) {
      return String(_a) === String(_b)
    } else {
      return false
    }
  } catch (e) {
    console.log(e);
    return false
  }
}

export function looseIndexOf(_arr, _val) {
  for (let i = 0; i < _arr.length; i++) {
    if (looseEqual(_arr[i], _val)) return i
  }
  return -1
}

export function urlencode(data, hasWhat = true) {
  var _result = []
  for (var key in data) {
    var value = data[key]
    if (value.constructor === Array) {
      value.forEach(function (_value) {
        _result.push(key + '=' + _value)
      })
    } else {
      _result.push(key + '=' + value)
    }
  }
  return hasWhat ? '?' + _result.join('&') : _result.join('&')
}

/** 
 * param 将要转为URL参数字符串的对象 
 * key URL参数字符串的前缀 
 * encode true/false 是否进行URL编码,默认为true 
 */
export function urlEncodeX(param, key, encode=true) {
  if (param == null) return '';
  let paramStr = '';
  let t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
  } else {
    for (let i in param) {
      let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncodeX(param[i], k, encode);
    }
    if(paramStr[0]==="&"){paramStr = paramStr.slice(1)}
  }
  return paramStr;
};

// 主要是用来删除后端接口的多余参数
export function filterEmptyKey(obj){
  if(Object.values(obj).indexOf(undefined) === -1){ return obj }
  let keys = Object.keys(obj)
  let key
  for(let i = 0; i < keys.length; i++){
    key = keys[i]
    if(isArray(obj) && obj[key] === undefined){
      obj.splice(key,1)
    }
    if(isObject(obj) && obj[key] === undefined){
      delete obj[key]
    }
  }
  return obj
}