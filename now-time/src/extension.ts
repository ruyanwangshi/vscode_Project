// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import runToast from './toast'

let toast: any;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('该打印来自于now_time插件拓展~')
    
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
    toast = runToast(() => {
        vscode.window.showInformationMessage('该提醒来自于vscode插件!');
    });
    
  })

  context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
export function deactivate() {
    toast.drop();
}
