# vue-netcore2spa
.NET core + VueJS

# Prerequisites

1. Download the latest .NET Core SDK
2. Either download Visual Studio full or VS Code or some other IDE (VS are recommended).  If running VS code, build / debug tasks are configured out of the gate.
3. Setup dev machine environment by running either
	- `set ASPNETCORE_ENVIRONMENT=Development` in Windows
	- or `export ASPNETCORE_ENVIRONMENT=Development` in Unix

## Getting Started

Execute `dotnet run` to get your ASP.NET server running -- this will be serving up your Vue files via hot reload to enable fast development.

Go to http://localhost:5000 to see the project

## Debugging

### Javascript
If you have VSCode w/ the Chrome debugging extension, there is a pre-configured launch task called `Chrome Debug` in `.vscode/launch.json` that will enable source mapped debugging within VS code.

In order to debug `.vue` files, you must use a `debugger;` statement in source code due to current limitations :(



