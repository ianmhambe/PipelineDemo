# Live Demo Script: GitHub Actions CI/CD

## Goal
Show interns a complete pipeline: code change -> test -> build -> deploy.

## Before the session
1. Create a new GitHub repository.
2. Upload or push this folder to the repository.
3. In GitHub, go to **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Make sure your default branch is `main`.

## Demo flow

### 1. Show the repository structure
Explain these files:
- `src/` contains the application.
- `tests/test.js` checks that the app has the expected content.
- `scripts/build.js` creates the deployable `dist/` folder.
- `.github/workflows/ci-cd.yml` defines the pipeline.

### 2. Run locally
```bash
npm ci
npm test
npm run build
```

### 3. Push to GitHub
```bash
git add .
git commit -m "Add GitHub Actions CI/CD demo"
git push origin main
```

### 4. Watch the workflow
Open the repository on GitHub, click **Actions**, then open the latest workflow run.
Point out:
- jobs run on fresh GitHub-hosted runners
- `build` waits for `test` because of `needs: test`
- `deploy` only runs on push to `main`

### 5. Break the pipeline on purpose
Edit `src/index.html` and remove `Shipped by GitHub Actions`, then commit to a branch and open a pull request.
The test job should fail. Explain that CI protects the main branch.

### 6. Fix the pipeline
Put the heading back, commit, and watch the pull request turn green.

## Key lesson
A CI/CD pipeline is not magic. It is a YAML checklist that runs the same quality gates every time code changes.
