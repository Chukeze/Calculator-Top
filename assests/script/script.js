let numberOfButtons = 12;
const numberButtonContainer = document.querySelector('.number-container');
const viewscreen = document.querySelector('.viewscreen');
let count;
let storeInMemory;
let operand1 = '';
let operand2 = '';
let regex = /[-+*\/]/;
const spaces = /^.+\s.+$/g
let calculator = {
    operators: {
        add(a,b) {
            return a + b;
        },
        subtract(a,b) {
            return a - (b);
        },
        multiply(array) {
            return array.length ? array.reduce((count, next) => count * next) : 0;
        },
        divide(a,b) {
            return a / b;
        },
    },
    symbols : ['+', '-', '*', '/', '%', '='],
    numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '(', '0', ')'],
    specialOperators : {
        memory : {
            memoryStorage: [],
            memoryClear(){
                this.memoryStorage.pop();
            },
            memoryRecall: 'MR',
            memoryAdd(item){
                this.memoryStorage.push(...item);
            },
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
    //el.classList.add('active');
    const item = document.querySelector('.expression');
    item.textContent += `${el.textContent}`;
    storeInMemory = calculator.specialOperators.memory.memoryAdd(item.textContent);
    //const mem = document.querySelector('.memory');
    //viewscreen.appendChild(item);
}));

const operatoration = document.querySelectorAll('.operation');
[...operatoration].forEach(el => el.addEventListener('click', () => {
    const item = document.querySelector('.expression');
    //viewscreen.appendChild(item);
    (el.textContent == "=") ? item.textContent.slice(0) : item.textContent += `${el.textContent}` ;
    storeInMemory = calculator.specialOperators.memory.memoryAdd(item.textContent);
    //(el.textContent != "=") ? item.textContent = "" : ;
    //console.log(item.textContent == "=");
    //viewscreen.appendChild(viewscreen.removeChild(item) );
}))

/*
function getOperand() {
    document.querySelector('#add').addEventListener('click', () => {
        let A = document.querySelector('#add').textContent;
        //console.log(A);
        return A;
    }, {passive: true});
}
*/

document.querySelector('#delete').addEventListener('click', ()=>{
    document.querySelector('.expression').textContent.slice(0,-1);
    //count = 0;
    //viewscreen.hasChildNodes ? viewscreen.removeChild(viewscreen.children.item(count--),-1) : null;
},{passive: true});

document.querySelector('#equals').addEventListener('click', () =>{
    const expression = document.querySelector('.expression').textContent;
    const num1 = expression.substring(0, expression.indexOf(expression.match(regex)));
    //const operand = document.querySelector('.expression').textContent.split(/[-+\*\/]/);
    const operand = expression.match(regex);
    //console.log(+num1 + "howdy");
    //let a = operand;
    //console.log(a);
    const num2 = expression.substring(expression.indexOf(operand) + 1);
    console.log(num1);
    console.log(num2);
    console.log(operand);
    operate(+num1,+num2,operand);
    //console.log(operand);
    //console.log(num2.indexOf(operand));
    //console.log(num2);
    //console.log(operand.trim(0, num2.indexOf(operand)));
    //console.log(num2.indexOf(operand.trim(0, num2.charAt(-1, num2.indexOf(operand)))));
    //console.log(num2.valueOf(num2.indexOf(operand.trim(0, num2.charAt(-1, num2.indexOf(operand))))));
    //console.log(num2.valueOf(num2.charAt(num2.indexOf(operand),0 )));
    //console.log(+num2.slice(num2.indexOf(operand), num2.indexOf(operand.trim(0, num2.charAt(-1, num2.indexOf(operand))))));
    //console.log(+num1.slice(0,num1.indexOf(operand)),+num2.slice(num2.indexOf(operand), num2.indexOf(operand.trim(0, num2.indexOf(operand)))));
    //console.log(num1.slice(operand));
    //operate(+num1.slice(0,num1.indexOf(operand)),+num2.substring(num2.indexOf(operand)),operand);
    calculator.specialOperators.memory.memoryClear();
    //console.log(operate(num1,num2,getOperand()))
});

//Logic
function operate (num1, num2,operand) {
    let answer;
    const showanswer = document.querySelector('.answer');
    let expression = [num1, num2];
    //showanswer.classList.add('answer');
    if(operand == "+"){
        answer = calculator.operators.add(num1, num2);
        showanswer.textContent = answer;
        //viewscreen.appendChild(showanswer);
    }
    if(operand == "-"){
        answer = calculator.operators.subtract(num1, num2);
        showanswer.textContent = answer;
    }
    if(operand == "*"){
        answer = calculator.operators.multiply(expression);
        console.log("Hello Multiply" + answer)
        showanswer.textContent = answer;
    }
    if(operand == "/"){
        answer = calculator.operators.divide(num1, num2);
        showanswer.textContent = answer;
    }
}

//console.log(calculator.specialOperators.memory.memoryStorage);
//console.log(calculator.operators.add(2,2));