let first_variable;
let operator = null;
let second_variable = null;
let buffer = 0;
const screen = document.querySelector(".screen-output");
let count = 0;

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
      if(operator === null){
          if(count === 0){
              first_variable = value;
              buffer = first_variable;
              count ++;
              rerender();
          } else if(count !== 0 ){
              first_variable += value;
              buffer = first_variable;
              rerender();
          }
      }
      else if(operator !== null){
          if(count === 0){
              second_variable = value;
              buffer = second_variable;
              count++;
              rerender();
          } else if(count !== 0){
              second_variable += value;
              buffer = second_variable;
              rerender();
          }
      }

  }

  function handleSymbol(value){
    switch(value){
        case "←":
            let c = screen.innerText;
            buffer = c.slice(0,c.length-1); 
            if(first_variable == c){ first_variable = buffer; }
            else if (second_variable == c ){ second_variable = buffer;}
            rerender();
            break;
        case "C":
            first_variable = null;
            second_variable = null;
            operator = null;
            count = 0;
            buffer = 0;
            rerender();
            break;
        case "+":
            operator = '+';
            count = 0;
            break;
        case "-":
            operator = '-';
            count = 0;
            break;
        case "×":
            operator = '*';
            count = 0;
            break;
        case "÷":
            operator = '/';
            count = 0;
            break;
        case "=":
            first_variable = parseInt(first_variable);
            second_variable = parseInt(second_variable);
            switch(operator){
                case '+':
                    buffer = first_variable + second_variable;
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
            rerender();
            first_variable = buffer;
            second_variable = null;
            operator = null;
            // count = 0;
            break;
    }
  }

  function rerender(){
      screen.innerText = buffer;
  }

 init();

