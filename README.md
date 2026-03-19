# Calculator

A modern, responsive web calculator with clean design and full functionality.

## Features

### Core Functionality
- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulo (%)
- **Number Input**: Digits 0-9 with decimal point support
- **Clear Function**: Reset calculator to initial state
- **Error Handling**: Division by zero protection with error display

### User Interface
- **Modern Design**: Gradient backgrounds with glassmorphism effects
- **Responsive Layout**: Adapts to mobile, tablet, and desktop screens
- **Interactive Buttons**: Hover effects and smooth transitions
- **Color-Coded Controls**:
  - Numbers: White/light gray gradient
  - Operators: Red gradient
  - Equals: Teal gradient  
  - Clear: Green gradient

### Input Methods
- **Mouse/Touch**: Click or tap buttons
- **Keyboard Support**: Full keyboard navigation
  - Numbers: 0-9
  - Operators: +, -, *, /, %
  - Equals: Enter or =
  - Clear: Escape or C
  - Decimal: .
  - Backspace: Backspace key

## File Structure

```
calculator/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Calculator logic and interactions
└── README.md       # This documentation
```

## Technical Implementation

### HTML (index.html)
- Semantic HTML5 structure
- Grid-based button layout (4x4 with special zero button)
- Accessible button labels
- Clean separation of concerns

### CSS (styles.css)
- **Modern Styling**: CSS Grid, Flexbox, CSS custom properties
- **Visual Effects**: Gradients, shadows, backdrop filters
- **Responsive Design**: Media queries for mobile/tablet/desktop
- **Smooth Animations**: CSS transitions for hover and active states
- **Typography**: Segoe UI font family with proper sizing

### JavaScript (script.js)
- **Object-Oriented Design**: Calculator object with methods
- **State Management**: Tracks current value, previous value, and operation
- **Event Handling**: Both click and keyboard events
- **Error Prevention**: Division by zero handling
- **Decimal Precision**: Proper floating-point number handling

## How to Use

1. Open `index.html` in a web browser
2. Use mouse/touch to click buttons or use keyboard
3. Perform calculations by entering numbers and operators
4. Press "=" or Enter to see results
5. Press "C" or Escape to clear

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers with touch support
- Requires ES6+ JavaScript support

## Design Principles

- **Clean Code**: Human-written, readable, and maintainable
- **Reusable Architecture**: Modular JavaScript functions
- **User Experience**: Intuitive interface with visual feedback
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Efficient DOM manipulation and event handling
