let numberOfButtons = 12;
const numberButtonContainer = document.querySelector('.number-container');
const specialOperatorsButtonContainer = document.querySelector('.special-operators');
let count;
let calculator = {
    operators: {
        add() {

        },
        multiply() {},
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
            power() {},
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
        }
    },
}
let goodarray = [];
goodarray.push(...Array.from(calculator.specialOperators.memory));
goodarray.push(calculator.specialOperators.square.symbol);
goodarray.push(calculator.specialOperators.Euler.symbol);
goodarray.push(calculator.specialOperators.cos.symbol);
goodarray.push(calculator.specialOperators.log.symbol);
goodarray.push(calculator.specialOperators.power.symbol);
goodarray.push(calculator.specialOperators.sin.symbol);
goodarray.push(calculator.specialOperators.tan.symbol);
goodarray.push(calculator.specialOperators.squareroot.symbol);
console.log(goodarray);
function fillOperation(){
    count = 0;
    const fillOperationButtons = document.querySelectorAll('.operation');
    [...fillOperationButtons].map(operator => operator.textContent = calculator.symbols[count++])
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
const specialOperators = (amount = Object.keys(calculator.specialOperators).length) => {
    console.log(amount);
    count = 0;
    //specialOperatorsButtonContainer.style.setProperty("--repeat", -amount/4);
    specialOperatorsButtonContainer.append(
        ...Array.from({length: amount + 4}, () => (length > 1000) ? null : document.createElement("button"))
    );
    [...specialOperatorsButtonContainer.children].forEach(el => el.id = [count++]);
    for (const iterator of goodarray) {
        [...specialOperatorsButtonContainer.children].map(specialOp => specialOp.textContent = iterator)
    }
    //[...specialOperatorsButtonContainer.children].map(specialOp => specialOp.textContent = goodarray[3]);
};
createNumberButtons(); 
fillOperation();
specialOperators();