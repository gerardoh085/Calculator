var state = {
    fnum: '',
    rnum: 0,
    pnum: '',
}

const ready = ()=>{
    
    var inpClass = document.getElementsByClassName("text-display")[0];
    var firstNumber = document.getElementsByClassName("btn");
    for(var i = 0; i < firstNumber.length; i++){
        var fn = firstNumber[i];
        fn.addEventListener("click",(event)=>{
            
            inpClass.value += event.target.innerText;
            inpClass.scrollLeft = inpClass.scrollWidth
            
            console.log(event.target.innerText);
            
            state.fnum += event.target.innerText;
            
        });
    }

    //clear:
    clearBtn(inpClass,state);

    //del:
    delBtn(inpClass,state);

    //operations:
    // addition

    // subtraction

    //multiplication:

    //division



    
}



const delBtn = (inpClass,state)=>{
    
    
}


//clear all from display screen
const clearBtn = (inpClass, state)=>{
   
}


if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}