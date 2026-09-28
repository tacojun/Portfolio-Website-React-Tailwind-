# Portfolio Website

A small React portfolio project used to practice maintainable frontend structure, accessible navigation, responsive layouts, and a reviewable GitHub workflow.

## Features

- React 18 application structure
- Responsive single-page layout
- Accessible section navigation and semantic markup
- Project cards linking to public repositories
- Simple CSS with no UI framework dependency

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Tests

```bash
npm test
```

The React Testing Library tests in `src/App.test.js` check the main heading, navigation, and project repository links. The GitHub Actions build workflow runs these tests and the production build on pull requests and pushes to `main`.

## Production build

```bash
npm run build
```

## Project structure

```text
public/
  index.html
src/
  App.js
  App.test.js
  index.js
  setupTests.js
  styles.css
package.json
README.md
```

## Development workflow

Changes are tracked with GitHub issues and developed on feature branches before being merged through pull requests.

## Next steps

- add a dedicated skills/experience section
- add project screenshots
- deploy a public preview

## License

This project is currently maintained as a personal learning project.
