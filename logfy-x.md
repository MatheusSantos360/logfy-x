# 🚀 Logfy-X: Logs Generating Fantastic eXperiences
Transform Your Terminal Logs with Style and Precision

Logfy-X is a powerful terminal logging tool designed to make logging easier, organized, and pleasant, both during development and production. With Logfy-X, developers can view real-time behavior in a colorful and structured way, reducing the monotony of plain text logs.

## Key Features

- 🎨 **Stylized/Pretty Text Log**: Customize text color, background color, text style, transform text to upper/lower case, and more. Logfy-X exports all functionalities of picocolors for even more customization.
- 📊 **Displaying Values/Variables**: Present values or variables beautifully and easily in the terminal with syntax highlighting and customizable indentation.
- 💡 **Info Logs**: Displays informative logs with visual highlights for easy identification of important information during program execution.
- ⚠️ **Warn Logs**: Displays warning logs with visual highlights for easy identification of potential issues during program execution.
- ❌ **Error Logs**: Displays error logs with visual highlights for easy identification of critical issues during program execution.

## Installation

To install Logfy-X, use npm:
```bash
npm install logfy-x
```

## Usage

### 1. Stylized/Pretty Text Log

**Description**: Allows customizing the text color, background color, text style, and transforming text to uppercase/lowercase. Logfy-X exports all functionalities of picocolors for even more customization.

**Function Declaration**:
```typescript
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
```typescript
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

**Function Declaration**:
```typescript
Info(title: string, ...messages: string[]): void;
```

**Examples**:
```javascript
import { Info } from "logfy-x";

// Example 1: Single Item
Info("Startup", "Application started");

// Example 2: Three Items
Info("Login", "User successfully logged in", "User profile loaded", "Dashboard initialized");

// Example 3: Complex Indentation
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

(<bg-blue, bold> "💡 INFO ") (<blue> Login)
  > User successfully logged in
  > User profile loaded
  > Dashboard initialized

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

**Function Declaration**:
```typescript
Warn(title: string, ...messages: string[]): void;
```

**Examples**:
```javascript
import { Warn } from "logfy-x";

// Example 1: Single Item
Warn("Low Disk Space", "Less than 10% of disk space remaining");

// Example 2: Three Items
Warn("API Limit", "Approaching API rate limit", "Current usage: 80%", "Threshold: 90%");

// Example 3: Complex Indentation
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

(<bg-yellow, bold> "⚠️ WARN ") (<yellow> API Limit)
  > Approaching API rate limit
  > Current usage: 80%
  > Threshold: 90%

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

**Function Declaration**:
```typescript
Error(title: string, ...messages: string[]): void;
```

**Examples**:
```javascript
import { Error } from "logfy-x";

// Example 1: Single Item
Error("Server Crash", "Unexpected server shutdown");

// Example 2: Three Items
Error("Database Error", "Failed to connect to database", "Connection timed out", "Retrying connection...");

// Example 3: Complex Indentation
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

(<bg-red, bold> "❌ ERROR ") (<red> Database Error)
  > Failed to connect to database
  > Connection timed out
  > Retrying connection...

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
  - Adds new lines and indentation based on the specified ">" symbols, replacing them with "  > ".

**Function Declaration**:
```typescript
Success(title: string, ...messages: string[]): void;
```

**Examples**:
```javascript
import { Success } from "logfy-x";

// Example 1: Single Item
Success("Deployment Complete", "The application was successfully deployed.");

// Example 2: Three Items
Success("Data Processing", "Data was successfully processed.", "Backup created.", "Notifications sent to users.");

// Example 3: Complex Indentation
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

(<bg-green, bold> "✅ SUCCESS ") (<green> Data Processing)
  > Data was successfully processed.
  > Backup created.
  > Notifications sent to users.

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
