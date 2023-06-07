let calculator = document.querySelector('.calculator')
let mainScreen = document.querySelector('.mainScreen');
let buttons = document.querySelectorAll('.btn');
let deleteBtn = document.querySelector('.btn-del');
let clearBtn = document.querySelector('.btn-clear');
let equalBtn = document.querySelector('.btn-equal');
let toggleBtn = document.querySelector('.toggleBtn');


toggleBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mood')
})

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let value = e.target.getAttribute('data-num');
        mainScreen.value += value ;
    })
});

equalBtn.addEventListener('click',()=>{
if(mainScreen.value === ''){
    mainScreen.value = "";
}else {
    let answer = eval(mainScreen.value);
    mainScreen.value = answer;
}
});

clearBtn.addEventListener('click',()=>{
    mainScreen.value = '';
});

deleteBtn.addEventListener('click',()=>{
    mainScreen.value = mainScreen.value.toString().slice(0, -1)
})

