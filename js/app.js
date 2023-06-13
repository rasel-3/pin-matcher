function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayShow = document.getElementById('display-show');
    displayShow.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = (event.target.innerText)
    const numberType = document.getElementById('number-type');
    const previousNumberType = numberType.value;
    if (isNaN(number)) {
        if (number === 'C') {
            numberType.value = '';
        }
        else if (number === '<') {
            const digits = previousNumberType.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            numberType.value = remainingDigits;
        }
    }
    else {
        const previousNumberType = numberType.value;
        const newTypeNumber = previousNumberType + number;
        numberType.value = newTypeNumber;
    }

})

document.getElementById('verify-button').addEventListener('click', function () {

    const displayShow = document.getElementById('display-show');
    const currentPin = displayShow.value;

    const numberType = document.getElementById('number-type');
    const currentNumber = numberType.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');
    if (currentNumber === currentPin) {
        const pinSuccess = document.getElementById('pin-success');
        pinSuccess.style.display = 'block';
        pinFailure.style.display ="none";
    }
    else {
        const pinFailure = document.getElementById('pin-failure');
        pinFailure.style.display ="block";
        pinSuccess.style.display = 'none';

    }
})