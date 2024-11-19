# 🚀 Logfy-X: Logs Generating Fantastic eXperiences
Transform Your Terminal Logs with Style and Precision

Logfy-X is a powerful terminal logging tool designed to make logging easier, organized, and pleasant, both during development and production. With Logfy-X, developers can view real-time behavior in a colorful and structured way, reducing the monotony of plain text logs.

## Key Features

- 🎨 **Stylized/Pretty Text Log**: Customize text color, background color, text style, transform text to upper/lower case, and more. Logfy-X exports all functionalities of picocolors for even more customization.
- 📊 **Displaying Values/Variables**: Present values or variables beautifully and easily in the terminal with syntax highlighting and customizable indentation.
- 💡 **Info Logs**: Displays informative logs with visual highlights for easy identification of important information during program execution.
- ⚠️ **Warn Logs**: Displays warning logs with visual highlights for easy identification of potential issues during program execution.
- ❌ **Error Logs**: Displays error logs with visual highlights for easy identification of critical issues during program execution.
- ✅ **Success Logs**: Displays success logs with visual highlights to celebrate successful operations during program execution.
- 🧩 **Alignment Function**: Align text to the left, center, or right within the terminal.
- ⏱️ **Latency Function**: Measure and log latency for different operations.
- 🐞 **Debug Function**: Log detailed messages for debugging purposes with various logging options.
- 🎚️ **Log Level Filtering**: Filter logs by level (VERBOSE, DEBUG, INFO, WARN, ERROR) to control the verbosity of the output.

## Installation

To install Logfy-X, use npm:
```bash
npm install logfy-x
```

## Usage

### 1. Stylized/Pretty Text Log

**Description**: Allows customizing the text color, background color, text style, and transforming text to uppercase/lowercase. Logfy-X exports all functionalities of picocolors for even more customization.

**Function Declaration**:
```ts
logfy(message: string, options?: { style?: string; }): void;
```

**Example**:
```javascript
import logfy, { bold, italic, underline, red, bgBlue } from "logfy-x";

// Using color names
logfy("Text in red", { style: "red" });
logfy("Text with blue background", { style: "bg-blue" });

// Using hexadecimal codes
logfy("Text in green", { style: "#00FF00" });
logfy("Text with yellow background", { style: "bg-#FFFF00" });

// Applying text styles
logfy("Bold text", { style: "bold" });
logfy("Italic text", { style: "italic" });
logfy("Underlined text", { style: "underline" });

// Using picocolors styles
logfy(bold(red("Bold and red text")));
logfy(bgBlue(underline("Underlined text with blue background")));

// Transforming text
logfy("Text in uppercase", { style: "uppercase" });
logfy("TEXT IN LOWERCASE", { style: "lowercase" });
```

### 2. Displaying Values/Variables

**Description**: Allows presenting values or variables beautifully and easily in the terminal with syntax highlighting and customizable indentation.

**Features**:

- **Value Presentation**:
  - Display values or variables in a stylized and organized way.
- **Syntax Highlighting**:
  - Colorize keys, values, arrays, strings, numbers, booleans, and null for improved readability.
- **Custom Indentation**:
  - Set custom indentation levels for better formatting.

**Function Declaration**:
```ts
code(value: any, options?: { indent?: number; }): void;
```

**Example Code**

**Value Presentation with Syntax Highlighting and Indentation**:
```javascript
import { code } from "logfy-x";

const user = { name: "John Doe", age: 30, job: "Developer", active: true, skills: ["JavaScript", "Node.js"], address: null };
code(user, { indent: 4 });
```

### 3. Info Logs

**Description**: Displays informative logs with visual highlights for easy identification of important information during program execution.

**Features**:
- **Informative Log**:
  - Adds a 💡 emoji next to the title.
  - Displays the title in bold and blue, followed by the content with indentation.
  - Automatically adds ">" before each message for consistent indentation.
  - **Inline Option**: Allows displaying logs in a single line for a more compact view.

**Function Declaration**:
```ts
Info(title: string, message: string, inline?: boolean): void;
```

**Examples**:
```javascript
import { Info } from "logfy-x";

// Example 1: Single Item
Info("Startup", "Application started"); // Normal
Info("Startup", "Application started", true); // Inline

// Example 2: Complex Indentation
Info("System Overview",
  "Initialization started",
  "> Loading modules",
  ">> Module A loaded",
  ">> Module B loaded",
  ">>> Submodule B1 started",
  ">>> Submodule B2 started",
  ">>>> Process B2-1 completed",
  ">>>> Process B2-2 in progress",
  "> Configuration applied",
  ">> Network settings updated",
  "Security checks",
  "> Firewall enabled",
  "> Antivirus enabled"
);
```

**Output**:
```
(<bg-blue, bold> "💡 INFO ") (<blue> Startup)
  > Application started

(<bg-blue, bold> "💡 Startup ") (<blue> Application started) // Inline

(<bg-blue, bold> "💡 INFO ") (<blue> System Overview)
  > Initialization started
  > Loading modules
    > Module A loaded
    > Module B loaded
      > Submodule B1 started
      > Submodule B2 started
        > Process B2-1 completed
        > Process B2-2 in progress
  > Configuration applied
    > Network settings updated
  > Security checks
  > Firewall enabled
  > Antivirus enabled
```

### 4. Warn Logs

**Description**: Displays warning logs with visual highlights for easy identification of potential issues during program execution.

**Features**:
- **Warning Log**:
  - Adds a ⚠️ emoji next to the title.
  - Displays the title in bold and yellow, followed by the content with indentation.
  - Automatically adds ">" before each message for consistent indentation.
  - **Inline Option**: Allows displaying logs in a single line for a more compact view.

**Function Declaration**:
```ts
Warn(title: string, message: string, inline?: boolean): void;
```

**Examples**:
```javascript
import { Warn } from "logfy-x";

// Example 1: Single Item
Warn("Low Disk Space", "Less than 10% of disk space remaining"); // Normal
Warn("Low Disk Space", "Less than 10% of disk space remaining", true); // Inline

// Example 2: Complex Indentation
Warn("Performance Warnings",
  "High memory usage detected",
  "> Application X is using 80% of RAM",
  ">> Possible memory leak",
  ">> Investigate module Y",
  ">>> Submodule Y1 may be causing issues",
  "Disk space running low",
  "> Only 5% of disk space remaining",
  ">> Consider cleaning up old files",
  ">>> Remove temporary files",
  ">>> Archive old logs"
);
```

**Output**:
```
(<bg-yellow, bold> "⚠️ WARN ") (<yellow> Low Disk Space)
  > Less than 10% of disk space remaining

(<bg-yellow, bold> "⚠️ Low Disk Space ") (<yellow> Less than 10% of disk space remaining) // Inline

(<bg-yellow, bold> "⚠️ WARN ") (<yellow> Performance Warnings)
  > High memory usage detected
  > Application X is using 80% of RAM
    > Possible memory leak
    > Investigate module Y
      > Submodule Y1 may be causing issues
  > Disk space running low
  > Only 5% of disk space remaining
    > Consider cleaning up old files
      > Remove temporary files
      > Archive old logs
```

### 5. Error Logs

**Description**: Displays error logs with visual highlights for easy identification of critical issues during program execution.

**Features**:
- **Error Log**:
  - Adds a ❌ emoji next to the title.
  - Displays the title in bold and red, followed by the content with indentation.
  - Automatically adds ">" before each message for consistent indentation.
  - **Inline Option**: Allows displaying logs in a single line for a more compact view.

**Function Declaration**:
```ts
Error(title: string, message: string, inline?: boolean): void;
```

**Examples**:
```javascript
import { Error } from "logfy-x";

// Example 1: Single Item
Error("Server Crash", "Unexpected server shutdown"); // Normal
Error("Server Crash", "Unexpected server shutdown", true); // Inline

// Example 2: Complex Indentation
Error("Critical Errors",
  "Database connection failed",
  "> Unable to connect to database server",
  ">> Check network connection",
  ">> Verify database server status",
  ">>> Restart database service",
  ">>> Check firewall settings",
  "System crash detected",
  "> Application Y crashed unexpectedly",
  ">> Error code: 500",
  ">>> Stack trace available",
  ">>> Review recent changes",
  ">>>> Revert to previous version if necessary"
);
```

**Output**:
```
(<bg-red, bold> "❌ ERROR ") (<red> Server Crash)
  > Unexpected server shutdown

(<bg-red, bold> "❌ Server Crash ") (<red> Unexpected server shutdown) // Inline

(<bg-red, bold> "❌ ERROR ") (<red> Critical Errors)
  > Database connection failed
  > Unable to connect to database server
    > Check network connection
    > Verify database server status
      > Restart database service
      > Check firewall settings
  > System crash detected
  > Application Y crashed unexpectedly
    > Error code: 500
      > Stack trace available
      > Review recent changes
        > Revert to previous version if necessary
```

### 6. Success Logs

**Description**: Displays success logs with visual highlights to celebrate successful operations during program execution.

**Features**:
- **Success Log**:
  - Adds a ✅ emoji next to the title.
  - Displays the title in bold and green, followed by the content with automatic indentation.
  - Adds new lines and indentations based on the specified ">" symbols, replacing them with "  > ".
  - **Inline Option**: Allows displaying logs in a single line for a more compact view.

**Function Declaration**:
```ts
Success(title: string, message: string, inline?: boolean): void;
```

**Examples**:
```javascript
import { Success } from "logfy-x";

// Example 1: Single Item
Success("Deployment Complete", "The application was successfully deployed."); // Normal
Success("Deployment Complete", "The application was successfully deployed.", true); // Inline

// Example 2: Complex Indentation
Success("Project Milestones Achieved",
  "Phase 1 completed",
  "> Requirements gathered",
  ">> Stakeholders approved",
  "> Development completed",
  ">> Code reviewed and merged",
  ">>> Tests passed",
  "Phase 2 started",
  "> Sprint planning done",
  "> Tasks assigned"
);
```

**Output**:
```
(<bg-green, bold> "✅ SUCCESS ") (<green> Deployment Complete)
  > The application was successfully deployed.

(<bg-green, bold> "✅ Deployment Complete ") (<green> The application was successfully deployed.) // Inline

(<bg-green, bold> "✅ SUCCESS ") (<green> Project Milestones Achieved)
  > Phase 1 completed
  > Requirements gathered
    > Stakeholders approved
  > Development completed
    > Code reviewed and merged
      > Tests passed
  > Phase 2 started
  > Sprint planning done
  > Tasks assigned
```

### 7. Alignment Function

**Description**: Allows you to align text to the left, center, or right within the terminal in a simple and straightforward way.

**Function Declaration**:
```ts
align(text: string, alignment: 'left' | 'center' | 'right', width?: number): string;
```

**Example Code**:
```javascript
// Import the alignment function
import { align } from 'logfy-x';

// Use the alignment function
console.log(align("This message is left-aligned.", 'left'));
console.log(align("This message is centered.", 'center'));
console.log(align("This message is right-aligned.", 'right'));
```

**Output**:
```
This message is left-aligned.

                         This message is centered.

                                                         This message is right-aligned.
```

### 8. Latency Function

**Description**: Measures and logs latency for different operations to help identify performance bottlenecks and optimize response times.

**Function Declaration**:
```ts
function latency(operationName: string, operation: () => void): void;
```

**Example Usage**:
```javascript
import { latency } from 'logfy-x';

// Example of usage
latency('Database Query', () => {
  // Simulated operation
});
```

**Output**:
```
⏱️ LATENCY: Database Query took 50ms.
```

### 9. Debug Function

**Description**: Logs detailed messages for debugging purposes, helping developers trace and identify issues during development.

**Function Declaration**:
```ts
function debug(title: string, ...messages: (string | (() => void))[], condition?: boolean): void;
```

**Example Usage**:

**Basic Debug Logging**:
```javascript
import { debug } from 'logfy-x';

// Example of usage
debug('Initialization', 'Starting the initialization process...', 'Loading configurations', 'Services initialized');
```

**Output**:
```
🐞 DEBUG: Initialization
  > Starting the initialization process...
  > Loading configurations
  > Services initialized
```

**Execution Time Measurement**:
```javascript
import { debug } from 'logfy-x';

// Example of usage
debug('Database Query', () => {
  // Simulate a database query
});
```

**Output**:
```
🐞 DEBUG: Database Query completed in 50ms
```

**Error Logging**:
```javascript
import { debug } from 'logfy-x';

// Example of usage
debug('Faulty Operation', () => {
  // Simulate an operation that throws an error
});
```

**Output**:
```
🐞 DEBUG: Faulty Operation failed with error: Something went wrong!
```

**Conditional Logging**:
```javascript
import { debug } from 'logfy-x';

// Example of usage
debug('Conditioned Operation', () => {
  // This operation runs only if the condition is true.
}, false); // This won't log anything
```

**Output**:
No output, because the condition was false.

**Stack Trace Logging**:
```javascript
import { debug } from 'logfy-x';

// Example of usage
debug('Faulty Operation', () => {
  // Simulate an operation that throws an error
});
```

**Output**:
```
🐞 DEBUG: Faulty Operation failed with error: Something went wrong!
<stack trace here>
```

**Contextual Information Logging**:
```javascript
import { debug } from 'logfy-x';

// Example of usage
debug('Operation with Context', () => {
  // Simulate an operation that throws an error
}, { userId: 123, action: 'update' });
```

**Output**:
```
🐞 DEBUG: Operation with Context failed with error: Contextual error
Context: { userId: 123, action: 'update' }
```

### 10. Configuration

You can configure Logfy-X using a `logfy-x.json` file. Here is an example configuration:

```json
{
  "logLevel": "INFO",
  "theme": {
    "color": "white",
    "background": "none",
    "font": "none"
  }
}
```

To generate this configuration file, use the command:
```bash
logfy-x init
```

**Options**

- `logLevel`: Set the logging level. Possible values are `VERBOSE`, `DEBUG`, `INFO`, `WARN`, `ERROR`.
- `theme`: Customize the theme for log messages.
  - `color`: The color of the text. Accepts multiple styles from picocolors separated by spaces.
  - `background`: The background color of the text. Accepts multiple styles from picocolors separated by spaces.
  - `font`: The font style of the text. Accepts multiple styles from picocolors separated by spaces.