<div align="center">
    <img src="./DEMYTH-10-9-2023.png" alt="Demyth Logo">

Welcome on the main repository for DeMyth's project.<br />

[![license](https://img.shields.io/github/license/marcoreliooo/demyth.svg?style=flat-square)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/dec0dOS/demyth/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
[![made with hearth by MarcOreliOoo](https://img.shields.io/badge/made%20with%20%E2%99%A5%20by-marcoreliooo-ff1414.svg?style=flat-square)](https://github.com/marcoreliooo)

</div>

## 📋 Table of Contents

1. 🔱 [What is Demyth?](#what-is-demyth)
2. 🔨 [Installation](#installation)
3. ⚙️ [Stack](#stack)
4. 🚀 [Build](#build)
5. 🐳 [Docker](#docker)
6. 💯 [Tests](#tests)
7. 🌿 [Env variables](#env-variables)
8. ☑️ [Code analysis and consistency](#code-analysis-and-consistency)
9. 📈 [Releases & Changelog](#versions)
10. 🐙 [GitHub Actions](#github-actions)
11. ✨ [Misc commands](#misc-commands)
12. ©️ [License](#license)
13. ❤️ [Contributors](#contributors)

## <a name="what-is-demyth">🔱 What is Demyth?</a>

Demyth is a strategy-based web3 browser game, inspired by mythology, where players compete to ascend the rankings.
In addition to the game, this project aims to integrate a variety of common full-stack tools, as we will discuss further.

## <a name="installation">🔨 Installation</a>

First you need to fork/download the monorepo.
Secondly, you need these:
| Soft | Note |
| -------- | -------- |
| ![NODE](https://img.shields.io/badge/-node-black?style=for-the-badge&logoColor=white&logo=nodedotjs&color=green) | It is better to have node >= 18.10; if no upgrade it - v18.17.1 |
| ![YARN](https://img.shields.io/badge/-yarn-black?style=for-the-badge&logoColor=white&logo=yarn&color=darkviolet) | |
| ![Nest](https://img.shields.io/badge/-NestJs-black?style=for-the-badge&logo=nestjs&color=E0234D) | Better to install cli globaly: `npm i -g @nestjs/cli` |

Then, in the root of the monorepo project:

```bash
# Install all monorepo's dependencies
yarn install
```

## <a name="stack">⚙️ Stack</a>

### Backend

![NEST](https://img.shields.io/badge/-NestJs-black?style=for-the-badge&logo=nestjs&color=E0234D)
![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=2F73BF)
![MONGODB](https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=127237)
![MONGOOSE](https://img.shields.io/badge/-Mongoose-black?style=for-the-badge&logoColor=white&logo=mongoose&color=880000)

### Frontend

![NEXT](https://img.shields.io/badge/-Next.Js-black?style=for-the-badge&logo=nextdotjs&color=black)<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="white" width="16" height="16"><title>shadcn/ui</title><path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z"/></svg>![SHADCNUI](https://img.shields.io/badge/Shadcn/Ui-black?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=2F73BF)

### Blockchain

![Hardhat](https://img.shields.io/badge/-Hardhat-black?style=for-the-badge&logo=opensourcehardware&color=yellow)

### Soon - To come

![Docker](https://img.shields.io/badge/-Docker-black?style=for-the-badge&logoColor=white&logo=docker&color=004EA2)

## <a name="build">🚀 Build</a>

In order to build the app for production, in the root, run the following command:

```bash
# Build the app
yarn build

# Run the app in production mode
yarn start:dev
```

## <a name="docker">🐳 Docker</a>

This app will be Docker ready soon!
The Dockerfile will be available at the root of the project.

### 🔨 Development mode

```bash
# Run the frontend in development mode - in frontend folder:
yarn dev

# Run the backend in development mode - in backend folder:
yarn start:dev
```

### 🚀 Production mode

```bash
# Run the frontend in development mode - in frontend folder:
yarn build
yarn start

# Run the backend in development mode - in backend folder:
yarn build
yarn start:prod
```

## <a name="tests">💯 Tests</a>

### 🧪 Unit and E2E tests

![Jest](https://img.shields.io/badge/-Jest-black?style=for-the-badge&logoColor=white&logo=jest&color=BF3B14)
![Mocha](https://img.shields.io/badge/-Mocha-black?style=for-the-badge&logoColor=white&logo=mocha&color=8D6748)
![Chai](https://img.shields.io/badge/-Chai-black?style=for-the-badge&logoColor=white&logo=chai&color=A30701)

<!--[![Tests count](https://byob.yarr.is/marcoreliooo/demyth/tests-count)](https://byob.yarr.is/marcoreliooo/demyth/tests-count)

[![Covered Statements](https://byob.yarr.is/marcoreliooo/demyth/covered-statements)](https://byob.yarr.is/marcoreliooo/demyth/covered-statements)

[![Covered Branches](https://byob.yarr.is/marcoreliooo/demyth/covered-branches)](https://byob.yarr.is/marcoreliooo/demyth/covered-branches)

[![Covered Functions](https://byob.yarr.is/marcoreliooo/demyth/covered-functions)](https://byob.yarr.is/marcoreliooo/demyth/covered-functions)

[![Covered Lines](https://byob.yarr.is/marcoreliooo/demyth/covered-lines)](https://byob.yarr.is/marcoreliooo/demyth/covered-lines)-->

### 🥒 Acceptance tests

![Cucumber](https://img.shields.io/badge/-Cucumber-black?style=for-the-badge&logoColor=white&logo=cucumber&color=169652)

<!--[![Scenarios](https://byob.yarr.is/antoinezanardi/werewolves-assistant-api-next/scenarios)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-api-next/scenarios)-->

### ▶️ Commands

Before testing, you must follow the **[installation steps](#installation)**.
Then, run one of the following commands:

```bash
#Soon
```

## <a name="env-variables">🌿 Env variables</a>

Environnement files are available in the **[env directory](https://github.com/marcoreliooo/demyth)**.

You can create a `.env` file in this directory to override the default values when starting the project locally.

Environment variables are:

|        Name         |               Description               | Required | Default value |                   Limitations                    |
| :-----------------: | :-------------------------------------: | :------: | :-----------: | :----------------------------------------------: |
|       `HOST`        | Host on which the API will be available |    ❌    |  `127.0.0.1`  |          If set, can't be empty string           |
|       `PORT`        | Port on which the API will be available |    ❌    |    `8080`     | If set, must be a number between `0` and `65535` |
|   `ENVIRONNEMENT`   |  Environment in which the API will run  |    ✅    |      ❌       |  Must be `development`, `production` or `test`   |
|   `DATABASE_HOST`   |        MongoDB database host URL        |    ✅    |      ❌       |              Can't be empty string               |
|   `DATABASE_PORT`   |          MongoDB database port          |    ❌    |  `undefined`  | If set, must be a number between `0` and `65535` |
|   `DATABASE_NAME`   |          MongoDB database name          |    ✅    |      ❌       |              Can't be empty string               |
| `DATABASE_USERNAME` |          MongoDB database user          |    ✅    |      ❌       |              Can't be empty string               |
| `DATABASE_PASSWORD` |        MongoDB database password        |    ✅    |      ❌       |              Can't be empty string               |

## <a name="code-analysis-and-consistency">☑️ Code analysis and consistency</a>

### 🔍 Code linting & formatting

![ESLint](https://img.shields.io/badge/-ESLint-black?style=for-the-badge&logoColor=white&logo=eslint&color=341BAB)

In order to keep the code clean, consistent and free of bad TS practices, more than **300 ESLint rules are activated** !

Complete list of all enabled rules is available in the **[.eslintrc.js file](https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/master/.eslintrc.js)**.

### ▶️ Commands

Before linting, you must follow the [installation steps](#installation).

Then, run one of the following commands :

```bash
# Lint
npm run lint

# Lint and fix
npm run lint:fix

# Lint and fix only on staged files (runs on pre-commit)
npm run lint:staged
```

### 🥇 Project quality scanner

Multiple tools are set up to maintain the best code quality and to prevent vulnerabilities :

![CodeQL](https://img.shields.io/badge/-CodeQL-black?style=for-the-badge&logoColor=white&logo=github&color=2781FE)

You can check the **[CodeQL analysis report here](https://github.com/antoinezanardi/werewolves-assistant-api-next/security/code-scanning)**.

![SonarCloud](https://img.shields.io/badge/-SonarCloud-black?style=for-the-badge&logoColor=white&logo=sonarcloud&color=F37A3A)

SonarCloud summary is available **[here](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)**.

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=coverage)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)

[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-api-next&metric=bugs)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-api-next)

## <a name="versions">📈 Releases & Changelog</a>

Releases on **main** branch are generated and published automatically by :

![Semantic Release](https://img.shields.io/badge/-Semantic%20Release-black?style=for-the-badge&logoColor=white&logo=semantic-release&color=000000)

It uses the **[conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)** strategy.

Each change when a new release comes up is listed in the **<a href="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/master/CHANGELOG.md" target="_blank">CHANGELOG.md file</a>**.

Also, you can keep up with changes by watching releases via the **Watch GitHub button** at the top of this page.

#### 🏷️ <a href="https://github.com/antoinezanardi/werewolves-assistant-api-next/releases" target="_blank">All releases for this project are available here</a>.

## <a name="github-actions">🐙 GitHub Actions</a>

This project uses **GitHub Actions** to automate some boring tasks.

You can find all the workflows in the **[.github/workflows directory](https://github.com/antoinezanardi/werewolves-assistant-api-next/tree/main/.github/workflows).**

### 🎢 Workflows

|                                                                             Name                                                                             |                                                                                                                                                                          Description & Status                                                                                                                                                                           |                      Triggered on                      |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------: |
|                         **[⚙️ Build](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/build.yml)**                          |                                   Various checks for app health, code quality and tests coverage<br/><br/>[![⚙️ Build Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/build.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/build.yml)                                    | `push` on `develop` and all pull requests to `develop` |
| **[🔃 Lint PR Name Into Develop Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/lint-pr-name-into-develop.yml)** |    Checks if pull request name respects `conventionnal-commit` rules<br/><br/>[![🔃 Lint PR Name Into Develop Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/lint-pr-name-into-develop.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/lint-pr-name-into-develop.yml)    |         `pull-request` `created` or `updated`          |
|       **[⛵️ Push On Develop Branch Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/push-on-develop.yml)**        |                       Uploads app with `develop` version to `Docker Hub`<br/><br/>[![⛵️ Push On Develop Branch Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/push-on-develop.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/push-on-develop.yml)                       |                  `push` on `develop`                   |
|        **[🔃️ Upsert PR Release Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/upsert-pr-release.yml)**         | Creates or updates pull request to `main` depending on commits on `develop` since last release<br/><br/>[![🔃️ Upsert PR Release Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/upsert-pr-release.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/upsert-pr-release.yml) |                  `push` on `develop`                   |
|          **[🏷️ Release Creation Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/release-creation.yml)**          |           Creates a new release using `semantic-release` with tag and updated changelog<br/><br/>[![🏷️ Release Creation Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/release-creation.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/release-creation.yml)            |                    `push` on `main`                    |
|      **[🚀 Deploy To Production Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/deploy-to-production.yml)**      |              Deploys app with last tag version to `Docker Hub` and `GCP`<br/><br/>[![🚀 Deploy To Production Workflow](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/deploy-to-production.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-api-next/actions/workflows/deploy-to-production.yml)               |                     `tag-creation`                     |

## <a name="misc-commands">✨ Misc commands</a>

### 🌳 Animated tree visualisation of the project's evolution with **[Gource](https://gource.io/)**

```shell
# Please ensure that `gource` is installed on your system.
npm run gource
```

### 🔀 Create git branch with a conventional name

```shell
npm run script:create-branch
```

### ⤴️ Create pull request against the `develop` branch from current branch

```shell
npm run script:create-pull-request
```

### 📣 To all IntelliJ IDEs users (IntelliJ, Webstorm, PHPStorm, etc.)

All the above commands are available in the **.run directory** at the root of the project.

You can add them as **run configurations** in your IDE.

## <a name="license">©️ License</a>

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## <a name="contributors">❤️ Contributors</a>

There is no contributor yet. Want to be the first ?

If you want to contribute to this project, please read the [**contribution guide**](https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/master/CONTRIBUTING.md).

# Start backend

-   `yarn workspace @demyth/backend start:dev`

# Start frontend

-   `yarn workspace @demyth/frontend dev`

# Deploying frontend on Vercel

-   https://demyth-frontend.vercel.app/

# Deploying backend on Render

-   https://demyth-render-test.onrender.com
