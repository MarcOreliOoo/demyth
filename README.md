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

# <a name="what-is-demyth">🔱 What is Demyth?</a>

Demyth is a strategy-based web3 browser game, inspired by mythology, where players compete to ascend the rankings.
In addition to the game, this project aims to integrate a variety of common full-stack tools, as we will discuss further.

Frontend Demo: https://demyth-frontend.vercel.app/
Backend API Demo: https://demyth-render-test.onrender.com

# <a name="installation">🔨 Installation</a>

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

# <a name="stack">⚙️ Stack</a>

### Frontend

| What                                                                                                                              | Why                                                    |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| ![NEXT](https://img.shields.io/badge/-Next.Js-black?style=for-the-badge&logo=nextdotjs&color=black)                               |                                                        |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=2F73BF)    |                                                        |
| ![tailwindcss](https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4) |                                                        |
| ![SHADCNUI](https://img.shields.io/badge/Shadcn/Ui-black?style=for-the-badge)                                                     | Component library                                      |
| ![web3Modal](https://img.shields.io/badge/-Wagmi-black?style=for-the-badge&logoColor=white&logo=walletconnect&color=3B99FC)       | All web3modal suff: wagmi, wallet connecct, viem, siwe |
| ![framermotion](https://img.shields.io/badge/-FramerMotion-black?style=for-the-badge&logoColor=white&logo=framer&color=0055ff)    | Animation purpose                                      |
| ![Tailwind Utility](https://img.shields.io/badge/-Utility-black?style=for-the-badge)                                              | twMerge, clsx, cva                                     |
| ![Auth](https://img.shields.io/badge/-NextAuth-black?style=for-the-badge&logoColor=white&logo=nextauth&color=magenta)             | web2 & web3 login with jwt session                     |

### Backend

![NEST](https://img.shields.io/badge/-NestJs-black?style=for-the-badge&logo=nestjs&color=E0234D)
![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=2F73BF)
![MONGODB](https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=127237)
![MONGOOSE](https://img.shields.io/badge/-Mongoose-black?style=for-the-badge&logoColor=white&logo=mongoose&color=880000)

### Blockchain

![Hardhat](https://img.shields.io/badge/-Hardhat-black?style=for-the-badge&color=yellow)
![Solidity](https://img.shields.io/badge/-Solidity-black?style=for-the-badge&logo=solidity&color=363636)

### Soon - To come

![Docker](https://img.shields.io/badge/-Docker-black?style=for-the-badge&logoColor=white&logo=docker&color=004EA2)

# <a name="build">🚀 Build</a>

In order to build the app for production, in the root, run the following command:

```bash
# Build the app
yarn build

# Run the app in production mode
yarn start:dev
```

# <a name="docker">🐳 Docker</a>

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

# <a name="tests">💯 Tests</a>

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

<!--[![Scenarios](https://byob.yarr.is/marcoreliooo/demyth/scenarios)](https://byob.yarr.is/marcoreliooo/demyth/scenarios)-->

### ▶️ Commands

Before testing, you must follow the **[installation steps](#installation)**.
Then, run one of the following commands:

```bash
#Soon
```

# <a name="env-variables">🌿 Env variables</a>

Environnement files are available in the **[env directory](https://github.com/marcoreliooo/demyth)**.

You can create a `.env` file in this directory to override the default values when starting the project locally.

Environment variables are:

|                 Name                  |                    Description                     | Required |         Example value         | Limitations |
| :-----------------------------------: | :------------------------------------------------: | :------: | :---------------------------: | :---------: |
|                `HOST`                 |      Host on which the API will be available       |    ✅    |    `http://localhost:3001`    |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECTID` |             Wallet connect project ID              |    ✅    | `25654aeff98f7aaac5b9fff6...` |
|     `NEXT_PUBLIC_SIGNIN_MESSAGE`      | Message content to be sign when web3 login is used |    ✅    |              ❌               |
|           `NEXTAUTH_SECRET`           |                Secret for NextAuth                 |    ✅    |              ❌               |
|            `NEXTAUTH_URL`             |                  Url for NextAuth                  |    ✅    |    `http://localhost:3000`    |
|             `MONGODB_URL`             |                 Atlas Mongodb URL                  |    ✅    |   ``mongodb+srv://....net/`   |
|           `JSON_TOKEN_KEY`            |               Key for Jwt generation               |    ✅    |              ❌               |
|          `JSON_TOKEN_EXPIRE`          |                Expire time for Jwt                 |    ✅    |             `1d`              |
|        JSON_REFRESH_TOKEN_KEY         |               Key for Jwt generation               |    ✅    |              ❌               |
|       JSON_REFRESH_TOKEN_EXPIRE       |                Expire time for Jwt                 |    ✅    |             `7d`              |
|                 PORT                  |                  Port for backend                  |    ✅    |            `3001`             |

## <a name="code-analysis-and-consistency">☑️ Code analysis and consistency</a>

### 🔍 Code linting & formatting

![ESLint](https://img.shields.io/badge/-ESLint-black?style=for-the-badge&logoColor=white&logo=eslint&color=341BAB)

<!--
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

#### 🏷️ <a href="https://github.com/antoinezanardi/werewolves-assistant-api-next/releases" target="_blank">All releases for this project are available here</a>. -->

## <a name="github-actions">🐙 GitHub Actions</a>

This project uses **GitHub Actions** to automate some boring tasks.

You can find all the workflows in the **[.github/workflows directory](https://github.com/marcoreliooo/demyth/tree/main/.github/workflows).**

### 🎢 Workflows

Workflows are onlky for frontend at the time.
| Name | Description & Status | Triggered on |
| :---------------------------------------------------------------------------------------------------: | :------------------------------------------------------------: | :----------------------------------------------------: |
| **[⚙️ Preview Workflow](https://github.com/marcoreliooo/demyth/actions/workflows/preview.yml)** | Various checks for app health, code quality and tests coverage | `push` on `develop` and all pull requests to `develop` |
| **[🚀 Production Workflow](https://github.com/marcoreliooo/demyth/actions/workflows/production.yml)** | Various checks for app health, code quality and tests coverage | `push` on `main` and all pull requests to `main` |

## <a name="misc-commands">✨ Misc commands</a>

## <a name="license">©️ License</a>

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## <a name="contributors">❤️ Contributors</a>

There is no contributor yet. Want to be the first?
