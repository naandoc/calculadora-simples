const fieldDigitos = document.querySelector(".digitos-container");
const calculatorIpt = document.querySelector(".insert-numbers input")

// ------------------ Funções -------------------------- 

const createElements = (element, addClass) => {
    const el = document.createElement(element);
    el.classList.add(addClass)

    return el;
}

const insertSpans = () => {
    for (let i = 0; i < 20; i++) {
        fieldDigitos.appendChild(createElements("span", "centralizer"));
    }

    calculator.addDigits();
    calculatorIpt.focus();
}

// ----- Objeto calculadora -----

const calculator = {
    digits: ['C', '(', ')', '/', 7, 8, 9, '*', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '<', '='],

    addDigits() {
        const calculatorDigits = document.querySelectorAll(".digitos-container span");
        for (index in calculatorDigits) {
            calculatorDigits[index].innerText = this.digits[index];
        }
    },

    insertDigits(insertedValue) {
        const calculatorDigits = document.querySelectorAll(".digitos-container span");

        for (let values of calculatorDigits) {
            if (values.innerText == insertedValue) {
                calculatorIpt.value += insertedValue;
            }
            return;
        }
    },

    calculate() {
        return eval(calculatorIpt.value);
    }
}


// -------------------- Eventos --------------------

window.onload = insertSpans();

document.addEventListener("click", e => {
    const target = e.target.innerText;
    const digits = calculator.digits;

    for (let values of digits) {
        if (target == "C") {
            calculatorIpt.value = "";
            calculatorIpt.focus();

            return;
        }

        if (target == "<") {
            calculatorIpt.value = calculatorIpt.value.slice(0, calculatorIpt.value.length - 1);
            calculatorIpt.focus();

            return;
        }

        if (target == "=") {
            calculatorIpt.value = calculator.calculate();

            calculatorIpt.focus();

            return;
        }

        if (target == values) {
            calculatorIpt.value += target;

            calculatorIpt.focus();
        }
    }
})

