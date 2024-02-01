const inputEl=document.getElementById("result");
const buttons=document.querySelectorAll(".btns");

function calculate(e){
     const buttonValues=e.target.textContent;
     if(buttonValues==="C"){
        inputEl.value=""
     }else if(buttonValues==="="){
        const expression = inputEl.value.startsWith("/") ||
                           inputEl.value.startsWith("*") ||
                           inputEl.value.startsWith("-") ||
                           inputEl.value.startsWith("+") ?
                           "0" + inputEl.value :
                           inputEl.value;
        
        
        inputEl.value = eval(expression);
     }else{
        inputEl.value+=buttonValues
     }
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        calculate(event)
    })
})