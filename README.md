# **Logfy-X**: Logs Generating Fantastic eXperiences

**Transform Your Terminal Logs with Style and Precision**

**Logfy-X** is a powerful terminal logging tool designed to make logging easier, organized, and pleasant, both during development and production. With **Logfy-X**, developers can view real-time behavior in a colorful and structured way, reducing the monotony of plain text logs.

## 🚀 **Key Feature**

- 🎨 **Stylized/Pretty Text Log**: Color, background color, text style, transform to upper/lower case, and more.

## 📖 **Examples**

### **Text Styling**

#### Code:
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

## 🤝 **Contributing**

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) for details on how to get started.

## 📄 **License**

This project is licensed under the [MIT License](LICENSE).
