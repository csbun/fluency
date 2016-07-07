'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint prefer-rest-params: 0 */

/**
 * 串联两个函数，顺序执行，前一个函数的输出作为后一个函数的输入；
 * @private
 * @param {Function} f 第一个函数
 * @param {Function} g 第二个函数
 * @return {Function}  串联后的新函数
 */
function pipe(f, g) {
  if (f && g) {
    return function pipeFG() {
      return g.call(null, f.apply(null, arguments));
    };
  }
  return f;
}

/**
 * 组合多个函数，顺序执行，前一个函数的输出作为后一个函数的输入；
 * 类似 functional programming 的 compose
 * @param {...Function} functions 多个函数
 * @return {Function} 组合后的新函数
 */
function compose() {
  if (arguments.length > 1) {
    return Array.prototype.reduce.call(arguments, pipe);
  }
  return arguments[0];
}

/**
 * 组合多个函数，任意一个函数返回即可。
 * @param {...Function} functions 多个函数
 * @return {Function} 组合后的新函数
 */
function any() {
  const fns = arguments;
  return function sequenceAny() {
    let res;
    // 顺序执行
    for (let i = 0; i < fns.length; i++) {
      res = fns[i].apply(null, arguments);
      // 只有有一个有返回即可
      if (res) {
        return res;
      }
    }
    // 最终没有东西也要输出
    return res;
  };
}

/**
 * 柯里化函数
 * @param  {Function} fn 需要被柯里化的函数
 * @return {Function}    柯里化后的函数
 */
function curry(fn) {
  return function curriedFn() {
    return arguments.length > 1 ? fn.apply(null, arguments) : Function.prototype.bind.call(fn, null, arguments[0]);
  };
}

exports.compose = compose;
exports.any = any;
exports.curry = curry;