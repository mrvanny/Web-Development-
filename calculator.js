//console.log(" akdm nivant 😉")

let screen= document.getElementById('screen');
button= document.querySelectorAll('button');
let screenValue='';
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='x'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue="";
            screen.value=screenValue;

        }
//                      Code By Mr.Vanny       

        else if(buttonText=='Pi'){
            buttonText='3.14';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}