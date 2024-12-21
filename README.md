# **Logfy-X**: Logs Generating Fantastic eXperiences

**Transform Your Terminal Logs with Style and Precision**

**Logfy-X** is a powerful terminal logging tool designed to make logging easier, organized, and pleasant, both during development and production. With **Logfy-X**, developers can view real-time behavior in a colorful and structured way, reducing the monotony of plain text logs.

## 🚀 **Key Features**

- 🎨 **Stylized/Pretty Text Log**: Color, background color, text style, and more.

## 🛠️ **Installing**

To install Logfy-X, use the following command:

```bash
npm install --save logfy-x
```

## 📖 **Usage Examples**

### **Text Styling**

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

### **Informational Messages**

```javascript
import { info } from "logfy-x";

// Log a simple message
info("Update", "The process was successful.");

// Log nested messages
info("Update", [
  "The process was successful.",
  ["Step 1: Completed", "Step 2: Completed"],
  "Final step: Completed"
]);
```

### **Warning Messages**

```javascript
import { warn } from "logfy-x";

// Log a simple warning message
warn("Caution", "This action is risky.");

// Log nested warning messages
warn("Caution", [
  "This action is risky.",
  ["Step 1: Proceed with care", "Step 2: Verify settings"],
  "Final step: Confirm changes"
]);
```

### **Error Messages**

```javascript
import { error } from "logfy-x";

// Log a simple error message
error("Error", "An unexpected error occurred.");

// Log nested error messages
error("Error", [
  "An unexpected error occurred.",
  ["Step 1: Check the logs", "Step 2: Restart the application"],
  "Final step: Contact support"
]);
```

### **Success Messages**

```javascript
import { success } from "logfy-x";

// Log a simple success message
success("Success", "Operation completed successfully.");

// Log nested success messages
success("Success", [
  "Operation completed successfully.",
  ["Step 1: Verify the outcome", "Step 2: Celebrate the achievement"],
  "Final step: Document the process"
]);
```

## 🤝 **Contributing**

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) for details on how to get started.

## 📄 **License**

This project is licensed under the [MIT License](LICENSE).
