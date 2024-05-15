let grocery = ['milk','vegetables','eggs','rice','fruits']
// let grocery1 = 'Milk'
console.log(typeof(grocery));
console.log(grocery);
console.log(grocery.length);
console.log(grocery[3]);
grocery[3] = 'wheat'
console.log(grocery);

string = grocery.toString()
console.log(string);

let data = string.split(',');
console.log(data);
console.log(data.indexOf('fruits'));
