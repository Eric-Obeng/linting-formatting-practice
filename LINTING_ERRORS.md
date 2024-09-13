# Linting Errors and Resolutions

This document provides an overview of the initial linting errors encountered in the project and the steps taken to resolve them.

## Initial Linting Errors

#### According to ESLint, the following errors were detected:

    Error 1 (app.component.ts, line 16, column 6): 'X' is never reassigned. Use 'const' instead.
    Error 2 (user-list.component.ts, line 17, column 10): Unexpected any. Which requires 'Specify a different type'.

### Fixing Problems Manually

#### Error 1: Using const for X

To resolve this error, the variable X was initialized using the const keyword, indicating that its value would not be changed throughout its scope.

#### Error 2: Defining an Interface for User

To address the second error, an interface named User was created to define the expected properties of a user object: name and age. This interface was then applied to the Users array in both the user-list.component.ts and the user.service to ensure that the objects within the array adhere to the specified structure.

#### Code Example (user-list.component.ts):

#### TypeScript

interface User {
name: string;
age: number;
}

// ...

export class UserListComponent implements OnInit {
users: User[] = []; // Using the User interface

// ...
}

##### Code Example (user.service.ts):

##### TypeScript

interface User {
name: string;
age: number;
}

// ...

addUser(user: User) { // Using the User interface for the parameter
// ...
}

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
