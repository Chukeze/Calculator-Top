let numberOfButtons = 12;
const numberButtonContainer = document.querySelector('.number-container');
const viewscreen = document.querySelector('.viewscreen');
let count;

let calculator = {
    operators: {
        add(a,b) {
            return a + b;
        },
        subtract(a,b) {
            return a - b;
        },
        multiply(array) {
            return array.length ? array.reduce((count, next) => count * next) : 0;
        },
        divide(a,b) {
            return a / b;
        },
        sum(){//use reduce here
        },
    },
    symbols : ['+', '-', '*', '/', '%', '='],
    numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '(', '0', ')'],
    specialOperators : {
        memory : {
            memoryClear: 'MC',
            memoryRecall: 'MR',
            memoryAdd: 'M+',
            memoryRemove: 'M-',
        },
        square : {
            symbol : 'x^2',
            square() {},
        },
        power : {
            symbol : 'x^y',
            power(a,b) {return a ** b},
        },
        sin : {
            symbol : 'sin',
            sin() {},
        },
        cos : {
            symbol : 'cos',
            cos() {},
        },
        tan : {
            symbol : 'tan',
            tan() {},
        },
        squareroot : {
            symbol : '&#8730',
            sqroot() {},
        },
        log : {
            symbol : 'log',
            log() {},
        },
        Euler :{
            symbol : 'EXP',
            exp(){},
        },
        sum : {
            sum(array){
                return array.reduce((total,current) => total + current,0)
            }
        }
    },
}
function fillOperation(){
    count = 0;
    let nameofSymbol = ['add','subtract','multiply', 'divide', 'modular', 'equals'];
    const fillOperationButtons = document.querySelectorAll('.operation');
    [...fillOperationButtons].map(operator => operator.textContent = calculator.symbols[count++]);
    for (let index = 0; index < nameofSymbol.length; index++) {
        [...fillOperationButtons].map(el => el.id = nameofSymbol[index++]);
    }
    //forEach(operator => operator.textContent = calculator.symbols[count]);
}
const createNumberButtons = (amount = numberOfButtons) => {
    count = 0;
    numberButtonContainer.style.setProperty("--repeat", amount/4);
    numberButtonContainer.append(
        ...Array.from({length: amount}, () => (length > 15) ? null : document.createElement("button"))
    );
    [...numberButtonContainer.children].forEach(el => el.classList.add('Numbers'));
    const numbers = document.querySelectorAll('.Numbers');
    numbers.forEach(el => el.textContent = calculator.numbers[count++]);
}
createNumberButtons(); 
fillOperation();



const numbers = document.querySelectorAll('.Numbers');
[...numbers].forEach(el => el.addEventListener('click', () =>{
    const item = document.querySelector('.expression');
    item.textContent = el.textContent;
    //viewscreen.appendChild(item);
}));

const operatoration = document.querySelectorAll('.operation');
[...operatoration].forEach(el => el.addEventListener('click', () => {
    const item = document.querySelector('.expression');
    //viewscreen.appendChild(item);
    (el.textContent == "=") ? item.parentElement.removeChild(item) : viewscreen.appendChild(item,item.textContent = el.textContent);
    //(el.textContent != "=") ? item.textContent = "" : ;
    //console.log(item.textContent == "=");
    //viewscreen.appendChild(viewscreen.removeChild(item) );
}))

function getOperand() {
    document.querySelector('#add').addEventListener('click', () => {
        return document.querySelector('#add').textContent;
    }, {passive: true});
}


document.querySelector('#delete').addEventListener('click', ()=>{
    count = 0;
    viewscreen.hasChildNodes ? viewscreen.removeChild(viewscreen.children.item(count--),-1) : null;
},{passive: true});

document.querySelector('#equals').addEventListener('click', () =>{
    const num1 = document.querySelector('.viewscreen').firstChild.textContent;
    const num2 = document.querySelector('.viewscreen').lastChild.textContent;
    operate(num1,num2,getOperand());
    console.log(operate(num1,num2,getOperand()))
});

//Logic
function operate (num1, num2,operand) {
    let answer;
    const showanswer = document.querySelector('.answer');
    //showanswer.classList.add('answer');
    if(operand == "+"){
        answer = calculator.operators.add(num1, num2);
        showanswer.textContent = answer;
        //viewscreen.appendChild(showanswer);
    }
    if(operand == "-"){
        calculator.operators.subtract(num1, num2);
        showanswer.textContent = answer;
    }
    if(operand == "*"){
        calculator.operators.multiply(num1);
        showanswer.textContent = answer;
    }
    if(operand == "/"){
        calculator.operators.divide(num1, num2);
        showanswer.textContent = answer;
    }
}
