// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.


// class Computer {
//     constructor(ram, flops, name) {
//         this.ram = ram;
//         this.flops = flops;
//         this.name = name;
//     }
// }
//
// class Notebook extends Computer {
//     constructor(ram, flops, name, inches, batteryPower) {
//         super(ram, flops, name);
//         this.inches = inches;
//         this.batteryPower = flops / (inches * ram);
//     }
// }
// // let asus = new Notebook(8,2000,'asus', 24);
// // console.log(asus);
//
// class Ultrabook extends Notebook {
//     constructor(ram, flops, name, inches, batteryPower, weight) {
//         super(ram, flops, name, inches, batteryPower);
//         this.weight = weight;
//     }
//     goOn() {
//         if (this.weight > 2 || this.batteryPower < 4) alert('ERROR')
//     }
// }
//
// // let macbook = new Ultrabook(8,2500,'macbook',13,undefined,2)
// // macbook.goOn();
// // console.log(macbook);
//
// class Pc extends Computer {
//     constructor(ram, flops, name, fps) {
//         super(ram, flops, name);
//         this.fps = flops / ram
//     }
//     gamePlay(gameName) {
//         console.log(`You are playing ${gameName} with ${this.fps} FPs`);
//     }
//     updateCPU(carrots) {
//         if (carrots <= this.flops / 100 * 10) this.flops += carrots
//         else {alert('Забагато апгрейдиш')}
//     }
//     updateRAM(upgRam) {
//         if(upgRam <= this.ram * 2) this.ram += upgRam
//         else {alert('Забагато оперативки')}
//     }
// }

// let dragon = new Pc(8,5000,'Intel Core I9',undefined)
// dragon.gamePlay('CSGO');
// dragon.updateCPU(100);
// dragon.updateRAM(8)
// console.log(dragon)
//

// class gamePc extends Pc {
//     constructor(ram, flops, name, fps) {
//         super(ram, flops, name);
//         this.fps = 2 * (this.flops / this.ram)
//     }
//     gamePlay(gameName) {
//         this.flops = this.flops - (this.flops / (1000 * 100))
//         if (this.flops <= 500) alert('Відро не стягує ігру')
//         else {console.log(`You are playing ${gameName} with ${this.fps} FPs`)};
//     }
// }
//
// let me = new gamePc(8,500,'Ryzen-5',undefined)
// me.gamePlay('Dota2');
// console.log(me);

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


//
// function Car (model, producer, year, maxspeed, engine_capacity, driver) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine_capacity = engine_capacity;
//     this.driver = driver
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed}км на годину`);
//     }
//     this.info = function () {
//         console.log(`Модель:${this.model}, Виробник:${this.producer}, Рік випуску: ${this.year},Максимальна швидкісь: ${this.maxspeed}км , Об'єм двигуна: ${this.engine_capacity}л.`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver
//     }
// }
//
// let bmw = new Car('M5', 'BMW', 2018, 320, 3);
// console.log(bmw);
// bmw.drive()
// bmw.info()
// bmw.increaseMaxSpeed(20);
// console.log(bmw);
// bmw.changeYear(2021);
// console.log(bmw);
// bmw.addDriver({name: 'Matviy',surname: 'Zhalivtsiv' ,age:19, category: 'B'});
// console.log(bmw);
//



// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxspeed, engine_capacity, driver) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine_capacity = engine_capacity;
//         this.driver = driver
//     };
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     info() {
//         console.log(`Модель:${this.model}, Виробник:${this.producer}, Рік випуску: ${this.year},Максимальна швидкісь: ${this.maxspeed}км , Об'єм двигуна: ${this.engine_capacity}л.`)
//     };
//     increaseMaxspeed(newSpeed) {
//         this.maxspeed += newSpeed;
//     };
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//     addDriver(newDriver) {
//         this.driver = newDriver
//     }
// }
//
// let car = new Car('M5', 'BMW', 2018, 320, 3);
// car.drive()
// car.info()
// car.increaseMaxspeed(30);
// car.changeYear(2021);
// car.addDriver({name: 'Matviy',surname: 'Zhalivtsiv' ,age:19, category: 'B'});
// console.log(car);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Princess {
//     constructor(name, age, EU) {
//         this.name = name;
//         this.age = age;
//         this.EU = EU;
//     }
// }
//
// let Mariana = new Princess('Mariana', 20, 39);
// let Katya = new Princess('Katya', 19, 37);
// let Caitlyn = new Princess('Caitlyn', 23, 40);
// let Mathilda = new Princess('Mathilda', 26, 38);
// let Nadia = new Princess('Nadia', 24, 35);
// let Ivanka = new Princess('Ivanka', 21, 31);
// let Julia = new Princess('Julia', 30, 41);
// let Anna = new Princess('Anna', 29, 42.5);
// let Jessie = new Princess('Jessie', 22, 41);
// let Romana = new Princess('Romana', 24, 36);
//
// let arrOfPrincess = [Mariana, Katya, Caitlyn, Mathilda, Nadia, Ivanka, Julia, Anna, Jessie, Romana]
// console.log(arrOfPrincess);
//
// class Prince {
//     constructor(name,age, findedShoe) {
//         this.name = name;
//         this.age = age;
//         this.findedShoe = findedShoe;
//     }
// }
//
// let Matthew = new Prince('Matthew', 19,39)
//
// for (let i = 0; i < arrOfPrincess.length; i++) {
//     if(arrOfPrincess[i].EU == Matthew.findedShoe) {
//         console.log(`Принцеса ${arrOfPrincess[i].name} повинна бути з ${Matthew.name}`)
//     }
//
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Princess (name, age, EU) {
//         this.name = name;
//         this.age = age;
//         this.EU = EU;
// }
//
// let Mariana = new Princess('Mariana', 20, 39);
// let Katya = new Princess('Katya', 19, 37);
// let Caitlyn = new Princess('Caitlyn', 23, 40);
// let Mathilda = new Princess('Mathilda', 26, 38);
// let Nadia = new Princess('Nadia', 24, 35);
// let Ivanka = new Princess('Ivanka', 21, 31);
// let Julia = new Princess('Julia', 30, 41);
// let Anna = new Princess('Anna', 29, 42.5);
// let Jessie = new Princess('Jessie', 22, 41);
// let Romana = new Princess('Romana', 24, 36);
//
// let arrOfPrincess = [Mariana, Katya, Caitlyn, Mathilda, Nadia, Ivanka, Julia, Anna, Jessie, Romana];
//
// function Prince(name,age, findedShoe){
//     this.name = name;
//     this.age = age;
//     this.findedShoe = findedShoe;
// }
//
// let Matthew = new Prince('Matthew', 19,39)
//
// for (let i = 0; i < arrOfPrincess.length; i++) {
//     if(arrOfPrincess[i].EU == Matthew.findedShoe) {
//         console.log(`Принцеса ${arrOfPrincess[i].name} повинна бути з ${Matthew.name}`)
//     }
//     }