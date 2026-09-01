# Blazor Hybrid JavaScript Modules Validation

Sample for dotnet/aspnetcore issue #68814. It targets .NET 11 Preview 7 and validates a .NET MAUI Blazor Hybrid app with:

- A JavaScript module collocated with an app component.
- A plain script under the app's `wwwroot`.
- A referenced Razor class library (RCL) that contributes a `*.lib.module.js` initializer, a component, and scoped CSS.
- An opt-out build with `JSModulesEnabled` set to `false`.

## Prerequisites

- .NET SDK `11.0.100-preview.7.26381.103` or a compatible later Preview 7 patch.
- The .NET MAUI workload: `dotnet workload install maui`.
- A configured Windows machine or Android device/emulator.

## Run and validate

```powershell
dotnet build -f net11.0-windows10.0.19041.0
dotnet run -f net11.0-windows10.0.19041.0
```

The home page shows a visible result for the collocated app module, plain script, RCL initializer, and RCL scoped CSS.

Publish Windows twice without cleaning, then clean and publish again:

```powershell
dotnet publish -c Release -f net11.0-windows10.0.19041.0
dotnet publish -c Release -f net11.0-windows10.0.19041.0
dotnet clean -c Release -f net11.0-windows10.0.19041.0
dotnet publish -c Release -f net11.0-windows10.0.19041.0
```

Build with collocated module discovery disabled:

```powershell
dotnet build -f net11.0-windows10.0.19041.0 -p:DisableJsModules=true
```

For Android, replace the target framework with `net11.0-android` and provide the appropriate device or publish runtime options for the configured environment.