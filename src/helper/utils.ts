const toString = Object.prototype.toString
/**
 * 是否为时间
 * @param val
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
/**
 * 是否为对象
 * @param val
 */
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
/**
 * 是否为普通对象
 * @param val
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
