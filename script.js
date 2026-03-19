// Calculator state management
let calculator = {
    display: document.getElementById('display'),
    currentValue: '0',
    previousValue: '',
    operation: null,
    shouldResetDisplay: false,
    
    // Initialize calculator
    init: function() {
        this.updateDisplay();
        this.setupEventListeners();
    },
    
    // Update display with current value
    updateDisplay: function() {
        this.display.value = this.currentValue;
    },
    
    // Append value to display
    appendToDisplay: function(value) {
        if (this.shouldResetDisplay) {
            this.currentValue = '0';
            this.shouldResetDisplay = false;
        }
        
        if (this.currentValue === '0' && value !== '.') {
            this.currentValue = value;
        } else if (value === '.' && !this.currentValue.includes('.')) {
            this.currentValue += value;
        } else if (value !== '.') {
            this.currentValue += value;
        }
        
        this.updateDisplay();
    },
    
    // Set operation
    setOperation: function(op) {
        if (this.operation !== null && !this.shouldResetDisplay) {
            this.calculate();
        }
        
        this.previousValue = this.currentValue;
        this.operation = op;
        this.shouldResetDisplay = true;
    },
    
    // Calculate result
    calculate: function() {
        if (this.operation === null || this.shouldResetDisplay) {
            return;
        }
        
        let result;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    this.currentValue = 'Error';
                    this.updateDisplay();
                    this.shouldResetDisplay = true;
                    return;
                }
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }
        
        // Handle decimal places
        if (result % 1 !== 0) {
            this.currentValue = result.toFixed(8).replace(/\.?0+$/, '');
        } else {
            this.currentValue = result.toString();
        }
        
        this.operation = null;
        this.previousValue = '';
        this.shouldResetDisplay = true;
        this.updateDisplay();
    },
    
    // Clear display
    clear: function() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
    },
    
    // Setup keyboard event listeners
    setupEventListeners: function() {
        document.addEventListener('keydown', (event) => {
            const key = event.key;
            
            // Number keys
            if (key >= '0' && key <= '9') {
                this.appendToDisplay(key);
            }
            // Decimal point
            else if (key === '.') {
                this.appendToDisplay('.');
            }
            // Operators
            else if (key === '+') {
                this.setOperation('+');
            }
            else if (key === '-') {
                this.setOperation('-');
            }
            else if (key === '*') {
                this.setOperation('*');
            }
            else if (key === '/') {
                event.preventDefault();
                this.setOperation('/');
            }
            else if (key === '%') {
                this.setOperation('%');
            }
            // Equals
            else if (key === '=' || key === 'Enter') {
                this.calculate();
            }
            // Clear
            else if (key === 'Escape' || key === 'c' || key === 'C') {
                this.clear();
            }
            // Backspace
            else if (key === 'Backspace') {
                if (this.currentValue.length > 1) {
                    this.currentValue = this.currentValue.slice(0, -1);
                } else {
                    this.currentValue = '0';
                }
                this.updateDisplay();
            }
        });
    }
};

// Global functions for HTML onclick handlers
function appendToDisplay(value) {
    if (['+', '-', '*', '/', '%'].includes(value)) {
        calculator.setOperation(value);
    } else {
        calculator.appendToDisplay(value);
    }
}

function calculate() {
    calculator.calculate();
}

function clearDisplay() {
    calculator.clear();
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    calculator.init();
});
