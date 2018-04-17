# vue-netcore2spa [![Build Status](https://carlmeyertons.visualstudio.com/_apis/public/build/definitions/7ca46c5a-ea42-4893-85ed-f3c2e71f5f30/1/badge)](https://carlmeyertons.visualstudio.com/vue-netcore2spa/_build/index?definitionId=1)

1.  .NET core
2.  VueJS configured using `vue-cli` (uses ESLint, Webpack, Babel, and TypeScript under the covers)
3.  npm

## Prerequisites

1.  Download the latest .NET Core SDK
2.  Either download Visual Studio full or VS Code or some other IDE (VS are recommended). If running VS code, build / debug tasks are configured out of the gate.
3.  Setup dev machine environment by running either
    * `set ASPNETCORE_ENVIRONMENT=Development` in Windows
    * or `export ASPNETCORE_ENVIRONMENT=Development` in Unix

## Getting Started

1.  Install `vue-cli` globally from npm running: `npm install @vue/cli -g`
2.  `cd` into `vue-netcore2psa` and fetch packages running: `npm install`

Execute `dotnet run` to get your ASP.NET server running -- this will be serving up your Vue files via hot reload to enable fast development.

Go to http://localhost:5000 to see the project

## Debugging

### Javascript

If you have VSCode w/ the Chrome debugging extension, there is a pre-configured launch task called `Chrome Debug` in `.vscode/launch.json` that will enable source mapped debugging within VS code.

In order to debug `.vue` files, you must use a `debugger;` statement in source code due to current limitations :(
