# CAPTCHA Collection

A collection of different types of CAPTCHA implementations for web security.

![image](https://github.com/harshsinghcs/captcha/assets/115187902/0e777130-a639-45fe-a2b9-2f0d648074b8)

## Available CAPTCHA Types

### 1. [Simple Text CAPTCHA](./Code/)
- **Type**: Text-based verification
- **Description**: Traditional alphanumeric CAPTCHA with random character generation
- **Features**: Basic text input validation
- **Files**: `index.html`, `script.js`, `style.css`

### 2. [Image Grid CAPTCHA](./Image-Captcha/)
- **Type**: Image-based grid selection
- **Description**: Advanced split-image CAPTCHA where users select grid segments containing specific objects
- **Features**: 
  - 3x3 grid image segmentation
  - Multiple challenge types (road signals, cars, crosswalks, buses)
  - Text-to-speech accessibility
  - Smart challenge rotation
  - Modern responsive UI
- **Files**: `index.html`, `split-captcha.js`, `styles.css`, `images/`

## Getting Started

1. **Choose a CAPTCHA type** from the available implementations
2. **Navigate to the respective folder**
3. **Open `index.html`** in your web browser
4. **Test the CAPTCHA** functionality
5. **Integrate** into your project as needed

## Features Comparison

| Feature | Simple Text | Image Grid |
|---------|-------------|------------|
| Difficulty | Basic | Advanced |
| Accessibility | ❌ | ✅ (Audio) |
| Mobile Friendly | ✅ | ✅ |
| Bot Resistance | Low | High |
| Visual Appeal | Basic | Modern |
| Setup Complexity | Simple | Moderate |

## Contributing

We welcome contributions of new CAPTCHA types! Please:
1. Create a new folder for your implementation
2. Include comprehensive documentation
3. Ensure cross-browser compatibility
4. Add accessibility features where possible

## License

Open source - feel free to use and modify as needed.
