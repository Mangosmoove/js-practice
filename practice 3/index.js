// function greet() {
//     // function body
//     console.log('Hello World');
// }

// greet();

// function greet(name) {
//     console.log('Hello ' + name);
// }

// greet('Arinah');
// greet('Josh');

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Josh', 'Matsuura');
greet('Arinah'); // Hello Arinah undefined

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(2));