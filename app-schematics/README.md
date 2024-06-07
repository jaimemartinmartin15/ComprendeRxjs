# app-schematics

This package contains schematics to run in this project:

- rxjs-page
  
  Generates the files for a new operator component. Manually, add new entry in the corresponding group in [home-menu-links.ts](../src/app/home-menu/home-menu-links.ts), or create a new group.

## Development

Clone the repository:

```text
git clone https://github.com/jaimemartinmartin15/ComprendeRxjs.git
```

Install dependencies:

```text
cd app-schematics && npm i
```

Build:

```text
npm run build
```

```text
npm run build:watch
```

Clean build files:

```text
npm run clean
```

## Debugging

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

It is recommended to open two terminals.

In the first one, in this folder, run `npm run build:watch` to build the schematic in watch mode.

In the second one, in the project root folder (parent of this folder), run `schematics ./app-schematics:rxjs-page --dry-run=true --name=somePageName` to execute the schematic.
