let first_variable = null;
let operator = null;
let second_variable = null;
let buffer = 0;
const screen = document.querySelector(".screen-output");

function init() {
    document.querySelector(".buttons").addEventListener("click", function(event) {
      buttonClick(event.target.innerText);
    });
  }
  

  function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
  }

  function handleNumber(value){
      if(first_variable === null){
          first_variable = value;
          buffer = value;
          rerender();
      }
      else if(first_variable !== null){
          second_variable = value;
          buffer = value;
          rerender();
      }

  }

  function handleSymbol(value){
    switch(value){
        case "←":
            
        case "C":
            first_variable = null;
            second_variable = null;
            operator = null;
            buffer = 0;
            rerender();
            break;
        case "+":
            operator = '+';
            break;
        case "-":
            operator = '-';
            break;
        case "×":
            operator = '*';
            break;
        case "÷":
            operator = '/';
            break;
        case "=":
            first_variable = parseInt(first_variable);
            second_variable = parseInt(second_variable);
            switch(operator){
                case '+':
                    buffer = first_variable + second_variable;
                    rerender();
                    break;
                case '-':
                    buffer = first_variable - second_variable;
                    break;
                case '*':
                    buffer = first_variable * second_variable;
                    break;
                case '/':
                    buffer = first_variable / second_variable;
                    break;

            }
            console.log("i reached");
            rerender();
            console.log("i passed");
            first_variable = buffer;
            second_variable = null;
            operator = 0;
            break;
    }
  }

  function rerender(){
      screen.innerText = buffer;
      console.log("mai chla hu");
  }

 init();

