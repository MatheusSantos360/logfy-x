# Logfy-X API Documentation

## `logfy()`

Formats and logs the content with optional styles.

### Parameters

- `content` (any): The content to be logged.
- `options` (object, optional): Optional settings for the log output, including style.

### Examples

```javascript
import logfy from "logfy-x";

// Log to the console with the default styles specified in `logfy-x.json`
logfy("My content");

// Log to the console with the default styles and additional custom styles
// ⚠️ Note: The styles provided in the options can overwrite the default styles.
logfy("My content", { style: "white bg-blue bold" });

// Log to the console with the default styles "red" and "bold" removed
logfy("My content", { style: "-red -bold" });
```

## `info()`

Logs formatted informational messages to the console.

### Parameters

- `title` (string): The title of the information message.
- `messages` (string | (string | string[])[]): The message or array of messages.

### Examples

```javascript
import { info } from "logfy-x";

// Log a simple message
info("Update", "The process was successful.");

// Log nested messages
info("Update", ["The process was successful.", ["Step 1: Completed", "Step 2: Completed"], "Final step: Completed"]);
```

## `warn()`

Logs formatted warning messages to the console.

### Parameters

- `title` (string): The title of the warning message.
- `messages` (string | (string | string[])[]): The message or array of messages.

### Examples

```javascript
import { warn } from "logfy-x";

// Log a simple warning message
warn("Caution", "This action is risky.");

// Log nested warning messages
warn("Caution", ["This action is risky.", ["Step 1: Proceed with care", "Step 2: Verify settings"], "Final step: Confirm changes"]);
```

## `error()`

Logs formatted error messages to the console.

### Parameters

- `title` (string): The title of the error message.
- `messages` (string | (string | string[])[]): The message or array of messages.

### Examples

```javascript
import { error } from "logfy-x";

// Log a simple error message
error("Error", "An unexpected error occurred.");

// Log nested error messages
error("Error", ["An unexpected error occurred.", ["Step 1: Check the logs", "Step 2: Restart the application"], "Final step: Contact support"]);
```

## `success()`

Logs formatted success messages to the console.

### Parameters

- `title` (string): The title of the success message.
- `messages` (string | (string | string[])[]): The message or array of messages.

### Examples

```javascript
import { success } from "logfy-x";

// Log a simple success message
success("Success", "Operation completed successfully.");

// Log nested success messages
success("Success", ["Operation completed successfully.", ["Step 1: Verify the outcome", "Step 2: Celebrate the achievement"], "Final step: Document the process"]);
```
