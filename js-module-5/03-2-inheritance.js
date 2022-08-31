// Наследование
//  -extends
//  - super()

class Hero{
    constructor({name = 'hero', xp = 0}= {}) {
           this.name = name;
        this.xp = xp;
    }
    gainXp(amount) {
            console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

// const mango = new Hero({name:'Mango',xp:1000})

// console.log(mango);
// mango.gainXp(1000);



class Warrior extends Hero{
    constructor({weapon, ...restProps} = {}) {
        super(restProps);

        this.weapon = weapon;
    }
    attack() {
        console.log(`${this.name} аттакует используя ${this.weapon}`);
    }
}

class Mage extends Hero{
    constructor({name,xp, spells=[]}= {}) {
        super({name,xp});
        this.spells = spells;
    }
    cast() {
        // console.log();
        console.log(`${this.name} что то там кастует`);
    }
}

const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'pistol' });

class Berserk extends Warrior{
    constructor({warcry, ...restProps} = {}) {
        super(restProps);
        this.warcry = warcry;
    }
    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berserk({
    name: 'Ajax',
    xp: 200,
    weapon: 'axe',
    warcry: 'aaaaaa'
});
console.log(ajax);
ajax.babyRage();
ajax.attack();
ajax.gainXp(562);


console.log(mango);

mango.gainXp(2000);
console.log(mango);

// console.log(mango.__proto__ === Warrior.prototype); //true
// console.log(Warrior.prototype.__proto__ === Hero.prototype); //true

console.log('Warrior.prototype', Warrior.prototype);
console.log('Hero.prototype', Hero.prototype);

mango.attack();
mango.gainXp(1000);

const poly = new Mage({ name: 'Poly', xp: 1000, spells: ['alahamora'] });
console.log(poly);
poly.cast();
poly.gainXp(300);