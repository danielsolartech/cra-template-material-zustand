# cra-template-material-zustand

A template for ReactJS with TypeScript, Zustand and Material UI v5.

## Usage

To use this template within your project, add `--template material-zustand` when creating a new app.

For example:

```sh
# NPM
$ npx create-react-app my-app --template material-zustand

# Yarn
$ yarn create react-app my-app --template material-zustand
```

> Cloning this repo pulls down the material-zustand template only; not a bundled and configured Create React App.

## Structure

### Base

- `src`
  - `constants` - This folder contains the global constants, that is, those used in more than one component/module.

  - `features` - This folder contains all the application modules.
    - `common` - This folder contains the components that are used by more than one module.

  - `hooks` - This folder contains the globable hooks, that is, those used in more than one component/module.

  - `interfaces` - This folder contains the global interfaces; for example, the interface that defines the type for a group of constants.

  - `pages` - If the web has more than one route, its main components must be placed here, the respective containers or layouts created for this route will be combined here.

  - `stores`

  - `utils`

### Feature

- `components`

- `containers`

- `hooks` - This folder contains the internal component hooks.

- `interfaces` - This folder contains the internal component interfaces types.

- `stores` - This folder contains the internal component stores.

- `index.tsx`

#### Component/Container

- `{name}` - If the component or container has separate styles or handlers it must be placed in a folder.

  - `{name}.styles.ts` - This file contains the styles for the component or container.

  - `{name}.handlers.ts` - This file contains all the events that are called on the buttons or inputs within the component or container.

  - `{name}.test.tsx` or `{name}.spec.ts` - This file contains the tests of the component or container.

  - `{name}.tsx` - This file contains the entire view of the component or container.

  - `index.tsx` - If the component or container is a directory, this file must be added, exporting by default the file `{name}.tsx` (`export { default } from './{name}';`).

## Testing

To test this template, you must run the command below:

```sh
# NPM
$ npx create-react-app my-app --template file:./

# Yarn
$ yarn create react-app my-app --template file:./
```

## License

Check the [LICENSE](./LICENSE) file for more information.

## Contributors

Thanks to this amazing people for make this template better:

- [@danielsolartech](https://github.com/danielsolartech)

> If you help to this template, feel free to add here.
