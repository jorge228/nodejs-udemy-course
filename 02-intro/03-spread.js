
const deadpool = {
    name: 'Wade',
    surname: 'Winston',
    power: 'Regenerate',
    // age: 50,
    getname() {
        return `${this.name} ${this.surname} ${this.power}`
    }
}

// const name   = deadpool.name;
// const surname = deadpool.surname;
// const power    = deadpool.power;
// console.log(deadpool);

// const { name, surname, power, age = 0 } = deadpool;
// console.log(deadpool);

/*
function printHero({ name, surname, power, age = 0 }) {
    name = 'Jorge';
    console.log(name, surname, power, age);
}
printHero( deadpool );
*/

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [, , h3] = heroes;

console.log(h3);






