# 🚀 Logfy-X: Log into the terminal in a beautiful, organized, easy, and pleasant way

The goal of this package is to make logging in the terminal easier, nice, organized, and pleasant, especially during development or production. Developers frequently log in their terminals to see real-time behavior. With Logfy-X, this can be done in a colorful and structured manner, reducing the monotony of plain text logs. Logfy-X offers features such as:

- 🎨 **Stylized/Pretty text log**: Color, background color, text style, transform to upper/lower case, and more.
- 📊 **Display of values/variables**: Display values or variables beautifully and easily.
- 😀 **Emoji logs**: Log emojis on the terminal with ease.
- ⏱️ **Latency and debug logs**: Efficiently manage latency and debugging.
- 🔍 **Info/Warn/Error logs management**:
  - 💡 **Info logs**: Display an information log with an 💡 emoji and blue text.
  - ⚠️ **Warn logs**: Display a warning log with a ⚠️ emoji and yellow text.
  - ❌ **Error logs**: Display an error log with a ❌ emoji and red text (errors exit the program by default).
- 📝 **Alignment**: Align logged contents easily.
- 🎨 **Themes**: Logfy-X includes ready-to-use themes for quick configuration.
- 🔧 **Components**: Create and log terminal components that display information beautifully and can be customized.
- 🌐 **Remote Logging**: Send logs to a remote server for centralized monitoring.
- 🔍 **Log Filters**: Filter logs by level, tags, or other criteria.
- 🛠️ **Custom Output Format**: Define custom formats for log outputs.
- 🔄 **Log Rotation**: Implement log rotation to prevent excessively large log files.
- ⚡ **Async Logging**: Log asynchronously to avoid blocking the main thread.
- 📈 **Performance Metrics**: Log performance metrics like execution time and memory usage.
- 🔒 **Audit Logs**: Record audit logs for user actions and data changes.
- 📊 **Monitoring Integration**: Integrate with popular monitoring tools like Prometheus, Grafana, or ELK Stack.

### Components
- 📊 **Table**
- 📋 **List**
- ◼️ **Square**
- ⚪ **Circle**
- ◻️ **Rectangle**
- 🚀 **Progress bar**
- 😀 **Emojis**
- ➖ **Divider (horizontal line)**

### Customization Options
- 🔢 **Fields quantity**
- 🎨 **Background color**
- 🎨 **Text color**
- 📐 **Alignment**

# Examples

## Text Styling

### Code:
```javascript
import logfy, { green, bg, bold, underline } from "logfy-x";

// Text with simple styling
logfy(green("It's a green text!"));
logfy(bg.red("This text has a red background!"));
logfy(bold("This text is bold."));
logfy(underline("Text with underline."));

// Combined styles
logfy(bg.red(green(bold(underline("Logfy-X is very good!")))));

// More readable code
logfy("Logfy-X is very easy!", { style: "yellow bg-red bold underline" });
```

## Info/Warn/Error Logs
### Code:
```javascript
import { Info, Warn, Error } from "logfy-x";

Info("Fix the data validation function.");
Warn("Invalid data received.");
Error("Something went wrong.");
```

### Output:
```
💡 Info: Fix the data validation function.
⚠️ Warn: Invalid data received.
❌ Error: Something went wrong.
```

## Displaying Values/Variables
### Code:
```javascript
import { logValue } from "logfy-x";

const user = { name: "John Doe", age: 30, job: "Developer" };
logValue(user);

// Better formatted output
logValue(user, { style: "bold blue bg-white" });
```

## Logging Emojis
### Code:
```javascript
import { logEmoji } from "logfy-x";

logEmoji("rocket", "Launching the rocket!");
logEmoji("tada", "Celebration time!");
```

## Latency and Debug
### Code:
```javascript
import { logLatency, logDebug } from "logfy-x";

// Measuring latency
logLatency("Database query time:", async () => {
  await db.query("SELECT * FROM users");
});

// Debugging
logDebug("User data fetched:", user);
```

## Pre-defined Themes
### Code:
```javascript
import logfy, { themes } from "logfy-x";

// Using a theme
logfy("Application started.", { theme: themes.success });
logfy("Application error occurred.", { theme: themes.error });
```

## Components (Table, List, etc.)
### Code:
```javascript
import { Table, List, ProgressBar } from "logfy-x";

// Table
const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
Table(data);

// List
const items = ["Item 1", "Item 2", "Item 3"];
List(items, { style: "bold" });

// Progress Bar
ProgressBar(70, { width: 50, color: "green" });
```

## Custom Log Components
### Code:
```javascript
import { logComponent, createComponent } from "logfy-x";

// Custom component
const myComponent = createComponent("My Custom Component", { style: "bold blue bg-white" });
logComponent(myComponent, { content: "This is a custom log component." });
```

## Remote Logging
### Code:
```javascript
import { logRemote } from 'logfy-x';

logRemote('https://logserver.com', { message: 'Server started', level: 'info' });
```

## Log Filters
### Code:
```javascript
import { setLogFilter, logInfo, logError } from 'logfy-x';

setLogFilter({ level: 'info' });
logInfo('This is an info log'); // Will be shown
logError('This is an error log'); // Will be ignored
```

## Custom Output Format
### Code:
```typescript
import { setLogFormat } from 'logfy-x';

setLogFormat((level, message) => `[${new Date().toISOString()}] ${level.toUpperCase()}: ${message}`);
logInfo('App started'); // Output: [2024-11-03T08:15:30Z] INFO: App started
```

## Log Rotation
### Code:
```typescript
import { logRotate } from 'logfy-x';

logRotate('app.log', { maxSize: '10M', maxFiles: 5 });
```

## Async Logging
### Code:
```typescript
import { logAsync } from 'logfy-x';

await logAsync('Processing data...');
```

## Performance Metrics
### Code:
```typescript
import { logPerformance } from 'logfy-x';

logPerformance(() => {
  // Code you want to monitor
});
```

## Audit Logs
### Code:
```typescript
import { logAudit } from 'logfy-x';

logAudit('User logged in', { userId: '12345' });
```

## Monitoring Integration
### Code:
```typescript
import { integrateWithMonitoring } from 'logfy-x';

integrateWithMonitoring('prometheus', { endpoint: 'http://prometheus:9090' });
```