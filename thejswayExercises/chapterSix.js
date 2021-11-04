//Program 1: Adding Character Experience

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,

    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} XP points`;
    }
    }

    aurora.health -= 20;
    aurora.strength += 10;
    aurora.xp += 15;
    console.log(aurora.describe());

// Program 2: Modeling a dog

    const dog = {
        name: "Fang",
        species: "boardhound",
        size: 75,

        bark() {
            return ("Grrr! Grrr!");
        }
    }

    console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
    console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);