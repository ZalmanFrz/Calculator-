function Todisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
}

function cleardisplay() {
    document.getElementById('display').innerText = '0';
}

function cresult() {
    const display = document.getElementById('display');
    let expression = display.innerText;



    if ( expression.includes('%')) {
        const parts = expression.split('%');
        if (parts.length === 2) {
            expression = (parseFloat(parts[0]) * parseFloat(parts[1])) / 100;
        }
    } try {
        
        display.innerText = eval(expression);
      } catch {
        display.innerText = 'Error';
      }
    }