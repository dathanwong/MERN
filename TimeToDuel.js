class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    summon(){
        console.log(this.name + " is summoned");
    }

    attack(target){
        //reduce target res by power
        target.res -= this.power;
        console.log(target.name + " resilience changed to " + target.res)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit){
            if(this.stat == "resilience"){
                target.res += this.magnitude;
                console.log(target.name + " resilience changed to " + target.res);
            }
            if(this.stat == "power"){
                target.power += this.magnitude;
                console.log(target.name + " power changed to " + target.power);
            }
        }else{
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Incraease target's power by 2", "power", 2); 

redBeltNinja.summon();
hardAlgorithm.play(redBeltNinja);
blackBeltNinja.summon();
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);