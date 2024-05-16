let pi = 3.154
let person = {
    firstName: 'Muhammad',
    lastname: 'Hashim',
    pi: 3.14,
    radius: 4,
    dis: function () {
        return this.pi * this.radius * this.radius
    },
    qualities: {
        quali1: 'Honest',
        quali2: 'Brave'
    },
    fullName: function () {
        return `${this.firstName} ${this.lastname}`
        // return this.firstName+'  '+this.lastname
    },
    'my hair color': 'Black'
}

console.log(person.firstName);
console.log(person.dis());
console.log(person.qualities.quali2);
console.log(`My Name is ${person.fullName()}`);
console.log(person["my hair color"]);