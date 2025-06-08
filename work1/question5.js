const doubleDigits = number =>String(number).split('').map(num=>parseInt(num)*parseInt(num)).join('');
console.log(doubleDigits(2236))
