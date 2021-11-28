/**
 * @fileoverview Node.js re-exports or shims depending on environment.
 * @license Apache-2.0
 */

/* global globalThis */

if (typeof globalThis === "undefined") {
  globalThis = typeof global !== "undefined" ? global : window; // eslint-disable-line no-global-assign
}

export const isNode = Object.prototype.toString.call(typeof globalThis.process !== 'undefined' ? globalThis.process : 0) === '[object process]';

var fs;
var module;
var path;
var process;

if (isNode) {
  fs = await import("fs");
  module = await import("module");
  path = await import("path");
  process = globalThis.process;
} else {
  fs = await import("./browser/fs.js");
  module = await import("./browser/module.js");
  path = await import("./browser/path.js");
  process = await import("./browser/process.js");
}

export {
  fs,
  module,
  path,
  process
};