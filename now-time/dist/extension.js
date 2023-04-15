/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const MAX_COUNT = 3;
let timer;
let callbackFn;
let count = 0;
function toast(callback) {
    callbackFn = callback;
    run();
    return {
        drop,
    };
}
function format(minutes) {
    const minute = 60 * 1000;
    const milliseconds = minutes * minute;
    return milliseconds;
}
function drop() {
    clearTimeout(timer);
}
function run() {
    const millisecond = format(0.01);
    timer = setTimeout(() => {
        if (count < MAX_COUNT) {
            count++;
            callbackFn();
            run();
        }
        else {
            drop();
        }
    }, millisecond);
}
exports["default"] = toast;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
const toast_1 = __webpack_require__(2);
let toast;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('该打印来自于now_time插件拓展~');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    // 该命令已在package.json文件中定义
    // 现在用registerCommand提供该命令的实现
    // commandId参数必须与package.json中的命令字段匹配
    // 这个对应执行的是package.json中的配置的命令
    // now-time.now_time > 就是 contributes 中的 command ,对应的命令面板应该输入的是now_time
    let disposable = vscode.commands.registerCommand('now-time.now_time', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // 这个命令展示展示vscode窗体的轻提示
        toast = (0, toast_1.default)(() => {
            vscode.window.showInformationMessage('该提醒来自于vscode插件!');
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() {
    toast.drop();
}
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map