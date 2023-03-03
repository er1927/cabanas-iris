// the math process in detail

// 1 persona * 1 dia = 5000
// 1 * (1 *5000) =

// 2 personas * 3 dias = 30000
// 2 * (3*5000)

// 6 personas * 5 dias = 150000
// 6 * (5 * 5000)

// global constants to do the math
const pricePerNight = 5000;
const person = 1;

// testing my reasoning
// console.log(person * (pricePerNight * 1)); //1 persona 1 noche
// console.log((2 * person) * (pricePerNight * 3)); // 2 personas 3 noches
// console.log((6 * person) * (pricePerNight * 5)) // 6 personas 5 noches


let personSelect = prompt("Cuantos huespedes?");
let nightSelect = prompt("Cuantas noches dura su estadia?");

function calculate () {
    let total = (personSelect * person)  * (pricePerNight * nightSelect);
    alert(`$ ${total} AR`);
};

calculate();