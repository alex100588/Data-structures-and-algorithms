class Player{
    constructor(name, type){
        console.log(this);
        this.name = name
        this.type = type
    }

    introduce(){
        console.log(`Hi I am ${this.name} and I have ${this.type}`);
    }
}

class Wizzard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`Weeeee I'm a ${this.type}`);
    }
}

const alex = new Player('Alex', 'Programmer')
console.log(alex);
console.log(alex.introduce());

const wizzard1 = new Wizzard('Adi',  'Healer')
console.log(wizzard1);
console.log(wizzard1.play());

const wizard2 = new Wizzard('Shawn', 'Dark Magic')
console.log(wizard2.play());