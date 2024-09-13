# LintingFormattingPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Description

This project is a simple Angular application designed to demonstrate adherence to linting and formatting standards using ESLint and Prettier. The application includes a basic component structure and implements strict linting rules to maintain code quality and consistency.

## Setup Instructions

#### 1. Clone the repository:

```bash
git clone https://github.com/RhodyArthur/angular-code-quality-enforcer.git
cd angular-code-quality-enforcer
```

#### 2. Install Dependencies

Install the necessary dependencies using npm

```bash
    npm install
```

## Configure ESLint

```bash
    ng add @angular-eslint/schematics
```

This creates the .eslintrc.json file. It also updates the angular.json and package.json files.
Added custom rules:

- semi and quotes.
- @typescript-eslint/no-explicit-any: Ensures explicit usage of any type is avoided.

## Fix Linting Errors and Warnings

Run ESlint

```bash
    ng lint
```

Initial results:

24 errors
9 warnings related to the use of single quotes in app.component.ts.
Fixes Applied
Created an interface to replace the usage of any type.
Updated code to adhere to single quote conventions.

Run ESLint again to confirm all issues are resolved:

```bash
    ng lint
```

## Key Configuration Details

- ESLint: Configured with plugin:@typescript-eslint/recommended for TypeScript support.

- Prettier: Integrated using eslint-config-prettier and eslint-plugin-prettier to prevent conflicts between ESLint rules and Prettier formatting.

## Integrate Prettier

Install Prettier and Related Packages

```bash
    npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

Creates .prettierrc file
Adds settings that ensures:

- singleQuote: true:

Description: Use single quotes (') instead of double quotes (") for strings.
Effect: All string literals will be formatted with single quotes.

- trailingComma: "es5":

Description: Add trailing commas where valid in ES5 (i.e., objects, arrays, etc.).
Effect: Trailing commas will be added in places where they are allowed by ES5 syntax, such as in arrays and object literals.

- printWidth: 80:

Description: Specify the line length that the printer will wrap on.
Effect: Lines of code will be wrapped at 80 characters. This helps maintain readability by avoiding excessively long lines.

- tabWidth: 2:

Description: Set the number of spaces per indentation level.
Effect: Each tab character will be replaced with 2 spaces, ensuring consistent indentation.

- semi: true:

Description: Print semicolons at the ends of statements.
Effect: Semicolons will be included at the end of every statement, which can help prevent potential issues with automatic semicolon insertion (ASI) in JavaScript.

- endOfLine: "lf":

Description: Enforce Unix-style line endings (\n).
Effect: Line endings will be consistent with Unix-style line feeds, which helps avoid issues with different line endings across various operating systems.

## Configure Prettier to Work with ESLint

Add "plugin:prettier/recommended" to the extends array

## npm Scripts for Linting and Formatting

```bash
    `npm start`: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
    `ng lint`: Executes linting checks for the Angular project.
    `prettier --write .`: Formats all code files in the project directory according to Prettier's rules.
    `prettier --check .`: Checks all code files in the project directory for formatting issues without making any changes.
    `npm run lint:fix && npm run format`: Executes linting fixes followed by code formatting
```

## Set Up a Pre-Commit Hook Using Husky

Install Husky and Lint-Staged: this creates husky directory with pre-commit file and other files

```bash
    npm install --save-dev husky lint-staged
```

Add the following content to the .husky/pre-commit file:

```bash
    npx lint-staged
```

## NPM Scripts and Their Purposes

- npm run lint: Runs ESLint to check for linting errors in the project.
- npm run lint:fix: Runs ESLint and automatically fixes linting errors that can be corrected.
- npm run format: Runs Prettier to format all files in the project according to the configuration.

# Using the Linting and Formatting Tools

1. To check for linting erros:

```bash
npm run lint
```

2. To automaticaly fix linting errors:

```bash
npm run lint:fix
```

3. To format code with Prettier

```bash
npm run format
```
