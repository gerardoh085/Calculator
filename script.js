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
            if(state.res !== ''){
                state.res = '';
                inpClass.value = '';
            }
            if(state.fnum == ''){
                inpClass.value = '';
            }
            // add decimal
            if(inpClass.value.indexOf(".") || state.fnum == ""){
                document.getElementsByClassName("dot").disable = true;
            }
            
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
    var addition = document.getElementsByClassName("add")[0];
    addition.addEventListener("click",()=>{
        op = '+';
        if(state.pnum == ''){
            state.pnum = state.fnum;
            state.fnum = '';
            inpClass.value = state.fnum
            console.log("fnum + : " + state.fnum);
            console.log("pnum + : " + state.pnum);
        }else if(state.pnum !== '' && state.fnum !== ''){
            // in case user presses '+' again:
            // eval the pnum and fnum:
            // store result in pnum
            console.log("ENTERED")
            state.pnum = parseFloat(state.pnum) + parseFloat(state.fnum);
            state.fnum = '';
            inpClass.value = state.pnum;
            
            // state.res = parseFloat(state.pnum);
            console.log("result: "+state.pnum);
        }
    });
    // subtraction
    var sub = document.getElementsByClassName("sub")[0];
    sub.addEventListener("click",()=>{
        op = '-';
        if(state.pnum == ''){
            state.pnum = state.fnum;
            state.fnum = '';
            inpClass.value = state.fnum
            console.log("fnum + : " + state.fnum);
            console.log("pnum + : " + state.pnum);
        }else if(state.pnum !== '' && state.fnum !== ''){

            state.pnum = parseFloat(state.pnum) - parseFloat(state.fnum);
            state.fnum = '';
            inpClass.value = state.pnum;

            console.log("result: "+state.pnum);
        }
    });
    //multiplication:
    var mult = document.getElementsByClassName("mult")[0];
    mult.addEventListener("click",()=>{
        op = '*';
        if(state.pnum == ''){
            state.pnum = state.fnum;
            state.fnum = '';
            inpClass.value = state.fnum
            console.log("fnum + : " + state.fnum);
            console.log("pnum + : " + state.pnum);
        }else if(state.pnum !== '' && state.fnum !== ''){

            state.pnum = parseFloat(state.pnum) * parseFloat(state.fnum);
            state.fnum = '';
            inpClass.value = state.pnum;

            console.log("result: "+state.pnum);
        }
    });
    //division
    var division = document.getElementsByClassName("division")[0];
    division.addEventListener("click",()=>{
        op = '/';
        if(state.pnum == ''){
            state.pnum = state.fnum;
            state.fnum = '';
            inpClass.value = state.fnum
            console.log("fnum + : " + state.fnum);
            console.log("pnum + : " + state.pnum);
        }else if(state.pnum !== '' && state.fnum !== ''){

            state.pnum = parseFloat(state.pnum) / parseFloat(state.fnum);
            state.fnum = '';
            inpClass.value = state.pnum;

            console.log("result: "+state.pnum);
        }
    });

    

    var eqls = document.getElementsByClassName("equal")[0];
    eqls.addEventListener("click",()=>{
        // if state is '' then do nothing 
        // if both pnum and fnum are not '' then compute
        // if fnum = '' then do nothing
        
        if(state.fnum !== '' && state.pnum !== ''){
            console.log(op);
            if(op === '+'){
                state.res = parseFloat(state.pnum) + parseFloat(state.fnum);
            }else 
            if(op === '*'){
                state.res = parseFloat(state.pnum) * parseFloat(state.fnum);
            }else if(op === '/'){
                state.res = parseFloat(state.pnum) / parseFloat(state.fnum);
            }else if(op === '-'){
                state.res = parseFloat(state.pnum) - parseFloat(state.fnum);
            }
            state.pnum = '';
            state.fnum = '';
            inpClass.value = state.res;
        }
    });



    
}



const delBtn = (inpClass,state)=>{
    
    var del = document.getElementsByClassName("del")[0];
    del.addEventListener("click",(event)=>{
        console.log("inside");
        var text = state.fnum;
        if(state.fnum.length > 0){
            console.log("inside 2");
            state.fnum = state.fnum.slice(0,-1); //removes the last character
            inpClass.value = state.fnum;
        }
    });
}


//clear all from display screen
const clearBtn = (inpClass, state)=>{
    var clr = document.getElementsByClassName("clr")[0];
    clr.addEventListener("click",(event)=>{
        inpClass.value = '';
        state.pnum = '';
        state.res='';
        state.fnum = '';
    });
}


if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}