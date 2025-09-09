# Split-Image CAPTCHA System

A sophisticated image-based CAPTCHA implementation that presents users with images split into a 3x3 grid, challenging them to identify and select specific objects within the grid segments.

![Split Image CAPTCHA Demo](https://img.shields.io/badge/Status-Working-brightgreen) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-blue) ![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange) ![CSS3](https://img.shields.io/badge/CSS3-Grid-blue)

## 🌟 Features

### 🖼️ **Grid-Based Image Selection**
- Images are dynamically split into a **3x3 grid** (9 segments)
- Users click on segments containing the target objects
- Visual feedback with green borders and opacity changes for selected segments

### 🎯 **Multiple Challenge Types**
- **Road Signals**: Traffic lights, stop signs, speed limit signs
- **Cars**: Various types of vehicles on streets
- **Zebra Crossings**: Pedestrian crossing stripes
- **Buses**: Public transportation vehicles

### 🔊 **Accessibility Features**
- **Text-to-Speech**: Audio instructions using Web Speech API
- **Visual Indicators**: Clear selection feedback
- **Keyboard Navigation**: Accessible interface design

### 🔄 **Smart Challenge Rotation**
- **Anti-Repetition**: Prevents consecutive identical challenges
- **Random Selection**: Dynamic challenge type selection
- **Auto-Refresh**: New challenge on incorrect attempts

### ⚡ **User Experience**
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, card-based interface with smooth transitions
- **Immediate Feedback**: Real-time validation messages
- **Easy Reset**: Manual refresh option available

## 🚀 How It Works

### Challenge Flow
1. **Image Selection**: System randomly selects one of 4 predefined challenge types
2. **Grid Generation**: Chosen image is split into 9 equal segments using CSS background positioning
3. **User Interaction**: Users click on segments they believe contain the target objects
4. **Validation**: System compares selected segments with predefined correct answers
5. **Feedback**: Immediate success/failure notification with appropriate actions

### Technical Implementation

#### Image Segmentation
```javascript
const x = -(i % gridSize) * 100;
const y = -Math.floor(i / gridSize) * 100;
segment.style.backgroundPosition = `${x}% ${y}%`;
segment.style.backgroundSize = `300% 300%`;
```

#### Challenge Configuration
```javascript
const captchaConfig = [
    {
        src: './images/road-signal.png',
        target: 'road signal',
        correctSegments: [0,1,3,4]
    },
    // ... more configurations
];
```

## 📁 File Structure

```
captcha2/
├── index.html              # Main HTML structure
├── split-captcha.js        # Core JavaScript functionality
├── styles.css              # Styling and grid layout
├── images/                 # Challenge images directory
│   ├── road-signal.png     # Traffic signals image
│   ├── cars.jpg           # Street vehicles image
│   ├── zebra-crossing.jpg # Pedestrian crossing image
│   └── buses.jpg          # Public transport image
└── README.md              # This documentation
```

## 🎮 Usage Instructions

### For Users
1. **Read the instruction** displayed at the top (e.g., "Select the road signal")
2. **Click on grid segments** that contain the specified objects
3. **Selected segments** will show a green border and reduced opacity
4. **Click "Verify"** to check your selection
5. **Use refresh button** (🔄) to get a new challenge
6. **Use audio button** (🔊) to hear the instructions

### For Developers
1. Clone or download the files
2. Place your challenge images in the `images/` directory
3. Update the `captchaConfig` array in `split-captcha.js`
4. Adjust `correctSegments` arrays based on where objects appear in your images
5. Open `index.html` in a web browser

## ⚙️ Configuration

### Adding New Challenge Types
```javascript
{
    src: './images/your-image.jpg',
    target: 'your target object',
    correctSegments: [0, 2, 4, 6, 8] // Grid positions with target objects
}
```

### Grid Position Reference
```
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]
```

## 🔧 Technical Specifications

- **Grid Size**: 3x3 (configurable)
- **Image Format**: PNG, JPG, JPEG supported
- **Browser Compatibility**: Modern browsers with ES6+ support
- **Dependencies**: None (Pure vanilla JavaScript)
- **Responsive**: Mobile and desktop friendly

## 🎨 Styling Features

- **Dark Theme**: Professional dark background with contrasting white card
- **Smooth Animations**: 0.3s transitions for better user experience
- **Visual Feedback**: Green borders for selected segments
- **Modern Design**: Clean, minimalist interface
- **Accessibility**: High contrast colors and readable fonts

## 🔒 Security Features

- **Dynamic Challenge Selection**: Random image selection prevents pattern recognition
- **Visual Complexity**: Grid-based selection makes automated solving difficult
- **Multiple Challenge Types**: Variety prevents specialized bot solutions
- **No Predictable Patterns**: Anti-repetition logic ensures variation

## 🌐 Browser Support

| Browser | Version | Supported |
|---------|---------|-----------|
| Chrome  | 60+     | ✅ |
| Firefox | 55+     | ✅ |
| Safari  | 11+     | ✅ |
| Edge    | 79+     | ✅ |
| Mobile  | iOS 11+, Android 8+ | ✅ |

## 📊 Performance

- **Lightweight**: ~5KB total JavaScript code
- **Fast Loading**: Images optimized for web
- **Memory Efficient**: Minimal DOM manipulation
- **Smooth Animations**: Hardware-accelerated CSS transitions

## 🤝 Contributing

This implementation can be extended with:
- Additional challenge types (animals, food, objects)
- Difficulty levels (4x4 or 5x5 grids)
- Timer-based challenges
- Progressive difficulty
- Analytics and success rate tracking

## 📄 License

This project is part of the CAPTCHA repository and follows the same licensing terms.

## 🔗 Integration

To integrate this CAPTCHA into your existing project:

1. Include the CSS and JavaScript files
2. Add the HTML structure to your form
3. Handle the validation result in your form submission logic
4. Customize the styling to match your application's theme

---

**Note**: This is an advanced image-based CAPTCHA system designed to be both user-friendly and bot-resistant. The grid-based selection method provides a good balance between security and usability.
