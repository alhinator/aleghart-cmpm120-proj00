const defaultAttribs = [15,14,13,12,10,8]

class Player {
    constructor(charName = "Fujoshi Joe Biden") {
        this.name = charName
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        }
        let shuffledResult = shuffleArray(defaultAttribs);
        for (const [key, value] of Object.entries(this.attributes)) {
            let attributeValue = shuffledResult.pop();
            this.attributes[key] = attributeValue;
    }
    }


    rollAttributes() {
        console.log("Rolling dice...")
        // rng here
        for (const key in this.attributes){
            let results = diceRoller(4,6)
            results.sort(function(a,b){return a - b})
            results.shift()
            let sum = sumArrayElements(results)
            this.attributes[key] = sum
        }
        
    }
    
    printPlayer() {
        console.log(`Name: ${this.name}`)
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0, 3).toUpperCase()}: ${value}`);
        }
    }

} //end player class

// Fisher-Yates algorithm for randomly sorting an array
// from: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// adapted to JS and reconfigured to return a new (non-mutated) array
function shuffleArray(targetArray) {
    let shuffled = Array.from(targetArray);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}


function diceRoller(times, sides) {
    let results = []
    for (let i = 0; i < times; i++){
        results.push(Math.floor(Math.random() *sides + 1))
    }
    return results
}

function sumArrayElements(_array) {
    /*let sum = 0
    for (let i = 0; i < _array.length ; i++){
        sum += array[i]
    }
    return sum*/
    //better way...
    return _array.reduce((total, currentNumber) => total + currentNumber);

}


//live
const player01 = new Player()
player01.printPlayer()
const player02 = new Player("Mermaid Man")
player02.rollAttributes()
player02.printPlayer()

