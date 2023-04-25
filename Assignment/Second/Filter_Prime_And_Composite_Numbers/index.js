// Filtering prime and composite numbers from a list of numbers

const integers = [];

for (var i = 1; i <= 100; i++){
    integers.push(i)
}

// for (var i = -100; i < 3; i++){
//     integers.push(i);
// }

console.log(integers);
const compositeNum = integers.filter((num) => {
    for (var i = 2; i < num; i++){
        if (num % i === 0){
            return num;
        }
    }
});

const primeNum = integers.filter(num => {
    let isPrime = false;

    if (num == 2){
        return num;
    }

    for (var i = 2; i < num; i++){
        if (num % i === 0){
            isPrime = false;
            return;
        }else{
            isPrime = true;
        }
    }

    if (isPrime){
        return num;
    }
});

// Though we have, negative numbers in the array, by definition, composite and prime numbers cannot be negative. Hence, the program also ignores the negative ones.
// console.log(compositeNum);
// console.log(primeNum);

const formattedCompositeNum = compositeNum.map((num) => {
    return " " + num;
});

const formattedPrimeNum = primeNum.map(num => " " + num);

document.write(`<hr /> Composite Numbers : ${formattedCompositeNum} <br /> Length : ${formattedCompositeNum.length}<hr />`);
document.write(`<hr /> Prime Numbers : ${formattedPrimeNum} <br /> Length : ${formattedPrimeNum.length}<hr />`);
document.write(`Neither Composite Nor Prime : 1`);
document.write(`<hr />Total Numbers : ${formattedCompositeNum.length + formattedPrimeNum.length + 1}`);
