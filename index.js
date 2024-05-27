const inputNumber = document.querySelector("#number");
const tofahrenheitBtn = document.querySelector("#fahrenheit");
const tocelciusBtn = document.querySelector("#celcius");
const displayBtn = document.querySelector(".result");
// const submitBtn = document.querySelector("#submit");


var temp;
var tempDisplay = 30;


// submitBtn.onclick = function () 

function convert() {

    if (tofahrenheitBtn.checked) {
        temp = Number(inputNumber.value);
        temp = temp * 9 / 5 + 32;
        tempDisplay = temp;

            if (tempDisplay >=85) {
            displayBtn.innerHTML = tempDisplay.toFixed(1) + "°F ☀";
        }

        else if(tempDisplay >=70) {
            displayBtn.innerHTML = tempDisplay.toFixed(1) + "°F ⛅";
            
        }
          else if (tempDisplay < 70) {
              displayBtn.innerHTML = tempDisplay.toFixed(1) + "°F ☁";
              
        }

      
    }

    else if (tocelciusBtn.checked) {
        temp = Number(inputNumber.value);
        temp = (temp - 32) * (5/9);
        tempDisplay = temp;
        
          if (tempDisplay >=29) {
            displayBtn.innerHTML = tempDisplay.toFixed(1) + "°F ☀";
        }

        else if(tempDisplay >=20) {
            displayBtn.innerHTML = tempDisplay.toFixed(1) + "°F ⛅";
            
        }
          else if (tempDisplay < 20) {
              displayBtn.innerHTML = tempDisplay.toFixed(1) + "°F ☁";
              
        }
       
        
    }
  
    else {
        displayBtn.innerHTML = "Select a unit"
        
        }
 }



