Required Setup

Use .NET 11 Preview 7 or later.
Install the MAUI workload.
Use a device or emulator capable of installing published apps.
Prefer testing at least two platforms.
Sample Must Contain

A MAUI Blazor Hybrid app.
An app-owned .razor.js module collocated with a component.
A plain JavaScript file under the app’s wwwroot.
A referenced Razor Class Library containing:
A component used by the app.
Scoped CSS (.razor.css).
A {RCL_NAME}.lib.module.js initializer.
Visible UI confirmation that every script/module and scoped style loaded.
A separate build configuration with JSModulesEnabled=false.
Scenarios To Check

Development build and run

Build the app.
Run it on a device/emulator.
Open every page using JavaScript.
Confirm the collocated module loads.
Confirm the plain script loads.
Confirm the RCL initializer loads.
Confirm the RCL component and scoped CSS render.
Published app

Publish in Release mode.
Install the published app.
Repeat all JavaScript and CSS checks.
Confirm behavior matches the development build.
Publish twice without cleaning

Run dotnet publish twice consecutively.
Confirm both publishes succeed.
Confirm the second published app still works.
Clean and republish

Run dotnet clean.
Publish again.
Install and verify the app.
Confirm the result matches the previous publishes.

Disable module discovery

Build a second configuration with JSModulesEnabled=false.
It only needs to build successfully.
Confirm there is no MSBuild/static-web-assets error.
Add another module

Add another .razor.js module to a component.
Publish again.
Confirm it is discovered automatically.
No manual manifest or project-file entry should be required.
Second platform

Publish and install on another platform when available.
Repeat every runtime asset check.
No platform-specific differences are expected.
Build diagnostics

Check output for duplicate/conflicting static assets.
Check for errors mentioning blazor.modules.json.
Specifically ensure this exception does not occur:


Must Pass

RCL-referencing app publishes successfully.
No duplicate/conflicting asset warnings.
No blazor.modules.json failure.
Every JavaScript shape works in the installed published app.
RCL scoped CSS works.
Repeated and clean publishes produce the same result.
JSModulesEnabled=false builds successfully.
New modules require no manual bookkeeping.