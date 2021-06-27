'use strict';

//metod Filter and Map

//filter
const names = ['Anna', 'Vladimir', 'Kit', 'Jone'];

const shortName = names.filter((name) => {
   return name.length < 5
});

console.log(shortName);//['Anna', 'Kit', 'Jone']

//map
let answers = ['AnnA', 'VlaDIMir', 'PettOr', 'VasIA'];

answers = answers.map(item => item.toLowerCase());

console.log(answers); //[ 'anna', 'vladimir', 'pettor', 'vasia' ]

//использование интерполяции
console.log(`Пользователь: ${name}, возрост: ${age}`);

// для установки второго пораметра по default можно сразу присвоить ему значение count = 0
function fetchData(data, count = 0) {
   //  count = count || 0;
   console.log(`Данные: ${data}, значение: ${count}`);
}

fetchData('something'); //Данные: something, значение: undefined

// restoperations соберает все данные в массив
function max(...number) {
   console.log(number);
}

max(34, 12, 67); //[ 34, 12, 67 ]

//Spread operation разварачивает данные с массива

const arr1 = [15, 25, 66],
   arr2 = [33, 57, 12];

const res = Math.max(1, ...arr1, 333, ...arr2);

console.log(res); //333

//object spread operation
const avatar = 'Photo';
const user = {
   name: 'default',
   pass: 'qwerty',
   rigths: 'user',
}

const admin = {
   name: 'admin',
   pass: 'root',
}

const res = Object.assign(user, admin); //таким образам мы перезатрем свойства user свойствами admin
console.log(res); //{ name: 'admin', pass: 'root', rigths: 'user' }

const res2 = Object.assign({}, user, admin); //таким образом мы создаем новый объект
console.log(res2); //{ name: 'admin', pass: 'root', rigths: 'user' }

const res3 = { ...user, ...admin }; //объединение двух объектов в один с помощью spread operation
console.log(res3); //{ name: 'admin', pass: 'root', rigths: 'user' }

const res4 = { ...user, ...admin, avatar }; //объединение двух объектов в один с помощью spread operation
console.log(res4); //{ name: 'admin', pass: 'root', rigths: 'user', avatar: 'Photo' }

// создание объектов раньше
const x = 25, y = 10;

const coords = {
   x: x,
   y: y,
   calcSq: function () {
      console.log(this.x * this.y);
   },
}
//сейчас можно сосдовать проще и немного оптимизирован
const coords2 = {
   x, y,
   calcSq() {
      console.log(this.x * this.y);
   },
};

coords2.calcSq(); //250

//Диструктуризация (destructuring assignment)

const user = {
   name: {
      first: 'Sam',
      second: 'Smith',
   },
   pass: 'qwerty',
   rigths: 'user',
}
//для того чтоб вытощить свойства как отдельные переменные
const { name: { first, second }, pass, rigths } = user;

// console.log(name, pass); //{ first: 'Sam', second: 'Smith' } qwerty
console.log(first, second);//Sam Smith

//классический патерн
function connect({
   host = 'localhost',
   port = 3000,
   user = 'default', }) {
   console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

//можем вызвать функцию с одним каким небуть параметром, а остольные параметры подтянутся по умолчанию
connect({
   port: 233,
}); //result function - host: localhost, port: 233, user: default
connect(); //вызовет ошибку его можно исправить если пораметры функции диструктуризировать {} = {}
connect({}); //применит все пораметры по умолчагию 

//Диструктуризацию можно использовать также и для массивов

const numbers = [1, 2, 6, 6];

const [a, b, c] = numbers;
console.log(a, b, c); //1 2 3

const [, , c] = numbers;
console.log(c);//6

const numbers = [[1, 2], [6, 6]];
const [[a, b], [c, d]] = numbers;

console.log(numbers[0][0]); //1 сейчас такой метод стал проще с помощью диструктуризации
console.log(a, b, c, d); //1 2 6 6

const country = {
   name: 'England',
   population: 2000000,
   gender: {
      male: ['15%', '40%'],
      female: ['16%', '29%'],
   },
};

//получение классическим способом
// country.gender.male[0];

//за диструктуризированный объект
const { name, population, gender: { male:[maleUnder18, maleAdult], female: [femUnder18, femAdult] } } = country;

console.log(maleUnder18, femAdult); //15% 29%