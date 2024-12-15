let operationType = '';
let numberType = '';
let screen = document.getElementById('screenContent');
let beforeOperation = document.getElementById('beforeOperation');

function operations(operation) {
    operationType = operation;
    screen.innerHTML += operationType;
    console.log(screen.innerHTML);
}

function numbers(number){
    console.log('numbers: ',number);
    
    const currentFragment = screen.innerHTML.split(/[\+\-\*\/]/).pop(); 

    if (number === '.' && currentFragment.includes('.')) {
        return; 
    }

    numberType = number;
    screen.innerHTML += numberType;
    console.log(screen.innerHTML+'aqui');
    
}

function clearScreen(){
    screen.innerHTML = '';
}

function clearOne(){
    let screenContent = screen.innerHTML;
    screen.innerHTML = screenContent.substring(0, screenContent.length - 1);
}

function calculate(){
    if (screen.innerHTML === '') {
        return; 
    }

    if(screen.innerHTML.includes('/0')){
        console.log('no se puede');
        alert('no puedes dividir entre 0')
        screen.innerHTML = '';
        return;
    }

    let result = eval(screen.innerHTML);
    beforeOperation.innerText = screen.innerHTML;
    
    screen.innerHTML = parseFloat(result.toFixed(10));
    // console.log('result: ', result = parseFloat(result.toFixed(10)));
}
