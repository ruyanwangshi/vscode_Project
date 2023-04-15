# 构建第一个 vscode 插件

> 安装全局安装包

> 命令行执行如下命令

```shell
npm install -g yo generator-code

# 然后执行

yo code

# 然后进入项目目录
# 使用F5进入项目然后执行vscode的命令行面板(每个人的快捷键都不同,默认为Ctrl + shift + P)

```

#### 命令面板执行的命令配置

> 在 pack.json 中可以通过以下的配置修改对应的执行命令
> 例如：helloWorld

```json
{
  "name": "now-time", // vscode 用作拓展的唯一名称。
  "main": "./dist/extension.js", // 拓展入口文件
  "activationEvents": [
    // 可以使用数组来声明多种语言 ，对应文档链接：https://code.visualstudio.com/api/references/activation-events
    "onLanguage:json",
    "onLanguage:markdown",
    "onLanguage:typescript"
  ], // 发出激活事件，每当打开解析为某种语言的文件时，都会激活感兴趣的拓展。
  "contributes": {
    "commands": [
      {
        "command": "now-time.helloWorld",
        "title": "Hello World"
      }
    ]
  }
}
```

## 拓展功能概述
>
> vscode 为拓展提供了很多方式来拓展功能。

1. 拓展可以使用的某些功能
2. 指向有关使用这些功能更详细主题的链接

### 通用功能
>
> 通用功能是可在任何拓展中使用的核心功能。
> 其中一些功能包括：

- 注册命令、配置、键绑定或上下文菜单项。
- 存储工作区或全局数据。
- 显示通知消息。
- 使用快速选择手机用户输入。
- 打开系统文件选取器，让用户选择文件或文件夹。
- 使用进度API指示长时间运行的操作。



