---
title: Extending official ESLint's HTML formatter
slug: eslint-formatter-html-extended
date: '2019-02-19'
minute2read: 3
description: Why I decide to extending official ESLint's HTML formatter
---

## Background Story ⛈

In my daily job, we are using ESLint in almost all of our repository especially for our FrontEnd (FE) code (because I only work in FE repository). Ideally, developers should run ESLint in it's development phase and make sure all branch that he working for is clean from ESLint warnings and errors. For the sake of teams, we also put git hook using `husky` to run ESLint before pushing changes to it's origin. But it wasn't enough for our current flow, I don't know why, sometimes still there are code that not pass ESLint's rule in the origin branch. Recently, we put this ESLint script into our Continuous Integration (CI) process.

Unfortunately our developers is not very like to read full-log in our CI tools, they like to see seperate HTML report for each stage in CI. After reading official documentation from ESLint, I found the section about [ESLint formatter ↗️](https://eslint.org/docs/user-guide/formatters/). We can create HTML report with this formatter.

We doing trial and error for proof of concept (POC) about producing HTML report from our ESLint. After a day using official HTML reporter in our CI, we found that official HTML formatter prevent from creating log when there are some error that make it exit with code 1. We can see the HTML report but we lost our log. It's not our expectation.

Finally, we decide to create our own formatter that combined the power of HTML reporter and keep the log exist in our log system.

We call it, `eslint-formatter-html-extended`!

## Unboxing 📦

Basicly, we don't want reinvent the whell. So, we just combining two type of formatters from ESLint. We choose HTML formatter by [JulianLaval ↗️](https://github.com/JulianLaval) and Stylish formatter by [Sindre Sorhus ↗️](https://github.com/sindresorhus). We also adding some little touch in HTML output report to be more beautiful and easy to navigated.

## Usage ☀️

Install dependencies via script:

```bash
$ yarn add eslint-formatter-html-extended -D
# OR
$ npm i eslint-formatter-html-extended --dev
```

Refer to this [docs ↗️](https://eslint.org/docs/user-guide/formatters/), you just need to add parameter `-f nameFormatter -o nameFile` in your ESLint CLI script, e.g.:

```bash
$ eslint --ext .js . -f html-extended -o eslint-report.html
```

This formatter is published as open source that you can see in [Github repository ↗️](https://github.com/mazipan/eslint-formatter-html-extended), feel free to fork or submit new issue.