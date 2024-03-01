function getElementID(id) {
    return document.getElementById(id);
}

function printData(id, result, bgResult) {
    getElementID(id).innerHTML = `<div class="${bgResult} mt-3 mb-3 p-3">${result}</div>`;
}

/*--------BÀI TẬP 1--------*/
function getMinNumberLessThanSum(numberCompare) {
    var sum = 0;
    var n = 0;
  
    while(sum < numberCompare) {
        n++;
        sum = sum + n;
    }

    return n;
}

getElementID("hanldeFindMinNumberLessThanSum").onclick = function() {
    var numberCompare = parseFloat(getElementID("numberCompare").value);

    var idResult = "minNumberLessThanSuResult";
    var result;
    var bgResult = 'bg-danger';

    if (isNaN(numberCompare)){
        result = "Vui lòng nhập số cần so sánh S";
    } else {
        bgResult = 'bg-success';
        var minNumberLessThanSum = getMinNumberLessThanSum(numberCompare);
        result = `Số nhỏ nhất để tổng từ 1 đến nó lớn hơn ${numberCompare} là ${minNumberLessThanSum}`;
    }

    printData(idResult, result, bgResult);
};

/*--------BÀI TẬP 2--------*/
function sumBaseWithPowIndex(numberBase, numberIndex) {
    var sum = 0;
    var numberPow = 1;

    for (var i = 1; i <= numberIndex; i++) {
        numberPow *= numberBase;
        sum += numberPow;
    }

    return sum;
}

getElementID("hanldeSumPow").onclick = function() {
    var numberBase = parseFloat(getElementID("numberBase").value);
    var numberIndex = parseFloat(getElementID("numberIndex").value);

    var idResult = "sumPowResult";
    var result;
    var bgResult = 'bg-danger';

    if (isNaN(numberBase)){
        result = "Vui lòng nhập cơ số";
    } else if (isNaN(numberIndex)){
        result = "Vui lòng nhập số mũ";
    } else {
        bgResult = 'bg-success';
        var sumPow = sumBaseWithPowIndex(numberBase, numberIndex);
        result = `Tổng số là ${sumPow}`;
    }

    printData(idResult, result, bgResult);
}

/*--------BÀI TẬP 3--------*/
function calculateFactorial(numberTarget) {
    var factorial = 1;

    for(var i = 1; i <= numberTarget; i++){
        factorial = factorial * i;
      }

    return factorial;
}

getElementID("hanldeFactorial").onclick = function() {
    var numberTarget = parseInt(getElementID("numberTarget").value);

    var idResult = "factorialResult";
    var result;
    var bgResult = 'bg-danger';

    if (isNaN(numberTarget)){
        result = "Vui lòng nhập vào số dương";
    } else {
        bgResult = 'bg-success';
        var factorial = calculateFactorial(numberTarget);
        result = `Tổng số là ${factorial}`;
    }

    printData(idResult, result, bgResult);
}

/*--------BÀI TẬP 4--------*/
function createDiv(idResult, bgDiv, numberDiv) {
    var divResult = document.createElement("div");
    divResult.innerHTML = numberDiv;
    divResult.style.cssText = `background: ${bgDiv}; margin: 10px 0px; text-align: center; padding: 10px 0px; color: white;`;
    getElementID(idResult).appendChild(divResult);
}

getElementID("hanldeBackgroundDiv").onclick = function() {
    var numberDiv = parseInt(getElementID("numberDiv").value);

    if (isNaN(numberDiv)){
        numberDiv = 10;
    }

    var idResult = "backgroundDivResult";

    getElementID(idResult).innerHTML = "";

    for (let i = 1; i <= numberDiv; i++) {
        var bgDiv = "blue";
        if (i % 2 == 0) {
            bgDiv = "red";
        }

        createDiv(idResult, bgDiv, i);
    }
}

/*--------BÀI TẬP 5--------*/

function isPrime(n) {
    if (n < 2) {
        return false;
    } else if (n == 2) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    }
    
    for (var i = 3; i < Math.sqrt(n); i += 2)
    {
        if (n % i == 0){
            return false;
        }
    }

    return true;
}

function getArrPrime(numberPrime) {
    var arrPrime = [];
    for (let i = 1; i <= numberPrime; i++) {
        if (isPrime(i)) {
            arrPrime.push(i);
        }         
    }

    return arrPrime;
}

getElementID("hanldeFindPrime").onclick = function() {
    var numberPrime = parseInt(getElementID("numberPrime").value);

    var idResult = "primeResult";
    var result = "";
    var bgResult = 'bg-danger';

    if (isNaN(numberPrime) || numberPrime <= 1){
        result = "Vui lòng nhập vào số muốn thực thi";
        printData(idResult, result, bgResult);
        return;
    }

    result = `Không có số nguyên tố nào từ 1 tới ${numberPrime}`;

    var arrPrime = getArrPrime(numberPrime);

    if (arrPrime.length != 0)
    {
        bgResult = 'bg-success';
        result = "Số nguyên tố: ";

        for (let i = 0; i < arrPrime.length; i++) {
            result += `${arrPrime[i]} `;        
        }
    }

    printData(idResult, result, bgResult);
}