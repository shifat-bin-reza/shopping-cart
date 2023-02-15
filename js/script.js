function updateNumber(isIncrease, isField) {
    const caseInputField = document.getElementById(isField);
    const caseNumberString = caseInputField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
        if (newCaseNumber < 0) {
            newCaseNumber = 0;
        }
    }

    caseInputField.value = newCaseNumber;

    return newCaseNumber;
}

function updateTotalPrice(newCaseNumber, isElement, isMultiply, isTrue) {
    const caseTotalPrice = newCaseNumber * isMultiply;
    const caseTotalElement = document.getElementById(isElement);
    caseTotalElement.innerText = caseTotalPrice;

    let subTotal, subTotalString, subTotalNumber, subTotalPrice, taxTotal, taxAmount, total, totalPrice;
    subTotal = document.getElementById('sub-total');
    taxTotal = document.getElementById('tax-total');
    total = document.getElementById('total');
    subTotalString = subTotal.innerText;
    subTotalNumber = parseInt(subTotalString);

    if (isTrue) {
        subTotalPrice = subTotalNumber + isMultiply;
    } else {
        subTotalPrice = subTotalNumber - isMultiply;
    }

    taxAmount = subTotalPrice * 0.1;
    totalPrice = subTotalPrice + taxAmount;

    subTotal.innerText = subTotalPrice;
    taxTotal.innerText = taxAmount.toFixed(1);
    total.innerText = totalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateNumber(true, 'case-number-field');
    updateTotalPrice(newCaseNumber, 'case-total', 59, true);
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateNumber(false, 'case-number-field');
    updateTotalPrice(newCaseNumber, 'case-total', 59, false);
})

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updateNumber(true, 'phone-number-field');
    updateTotalPrice(newPhoneNumber, 'phone-total', 1219, true);
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updateNumber(false, 'phone-number-field');
    updateTotalPrice(newPhoneNumber, 'phone-total', 1219, false);
})


const crosses = document.getElementsByClassName('remove-item');
for (const cross of crosses) {
    cross.addEventListener('click', function () {
        cross.parentNode.parentNode.parentNode.remove();;
    })
}