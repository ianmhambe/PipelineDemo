# GitHub Actions Intern Demo

This is a minimal static app for teaching GitHub Actions CI/CD.

It demonstrates:
- CI: automated tests run on every pull request and push.
- Build: the app is copied into a deployable `dist/` folder.
- CD: successful pushes to `main` deploy to GitHub Pages.

## Local commands

```bash
npm ci
npm test
npm run build
```

Open `dist/index.html` in a browser after building.

## GitHub setup

1. Create a new GitHub repository.
2. Push this project to the repository.
3. Go to **Settings > Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push to `main`, then watch **Actions**.

## Teaching points

- `on:` controls when the workflow starts.
- `jobs:` are units of work that run on runners.
- `steps:` are the individual commands/actions.
- `needs:` creates job order.
- `if:` prevents deployment from pull requests.
- `permissions:` follows least privilege for deployment.
