# Linting Errors and Resolutions

This document provides an overview of the initial linting errors encountered in the project and the steps taken to resolve them.

## Initial Linting Errors

### Error: `Delete '␍' prettier/prettier`

- **Description**: This error was caused by Windows-style carriage return (`\r`) characters in the code. ESLint, with Prettier, flagged these as formatting inconsistencies because it expected Unix-style line endings (`\n`).
- **Resolution**: Updated the Prettier configuration to enforce Unix-style line endings by adding `"endOfLine": "lf"` in `.prettierrc`. This was followed by running the command:

  ```bash
  npm run lint:fix
  ```

### Error: 'app-user-list' is not a known element'

- **Description**: This error occurred because the UserListComponent was not declared correctly in the Angular module.

- **Resolution**: Fixed by correctly importing and declaring UserListComponent in the AppComponent and changing UserListComponent and AppComponent to standalone components.

### Error: 'app-sample' is not a known element'

- **Description**: Similar to the previous error, this was due to the SampleComponent not being correctly registered in the Angular module.

- **Resolution**: Corrected by importing SampleComponent to the AppComponent and making the SampleComponent a standalone component.
