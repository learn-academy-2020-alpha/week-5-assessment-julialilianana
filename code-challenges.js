// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.


var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const secretCode = (string) => {
    let i = 0
    let array = string.split("")
    let newString = "" 

    array.map(value =>{
        if( value[i] === "a") {
        newString += 4
        }
        else if( value[i] === "e"){
            newString += 3
        }else if( value[i] === "i"){
            newString += 1
        } else if( value[i] === "o"){
            newString += 0
        }  else
        newString += value[i]
    } )
 
    return newString
}

console.log(secretCode(secretCodeWord1));
console.log(secretCode(secretCodeWord2));



// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.


var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"


//functin that takes in an array of words called onlyA
const onlyA = (array) => {
//create a new array for the words with an "a"
    let newArray =[]
//loop through each string inside the array of words creating a new array for each word
    for (let i=0; i < array.length; i++){
        let wordArray = array[i].split("")
//check each index of each word for an "a"
            for (let i=0; i < wordArray.length; i++){  
//if the word contains an "a" push that word to the new array
                if (wordArray[i].toLowerCase() === "a"){
                newArray.push(wordArray.join(""))
                break
                }
            }
    }
    return newArray
}
console.log(onlyA(arrayOfWords));


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.


var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5,5,5,3,3,7]
// Expected output: false

const fullHouse = (array) => {
    //sort array so that numbers with the same value will be next to each other
    array.sort((a,b)=> a-b)
    // check to see if hand contains proper amount of cards
    if(array.length === 5){
        // check to see if contains one pair and one three of a kind
        if(array[0] === array[1] && array[2] === array[3] && array[2] === array[4]){
            return true
        // check to see if contains one three of a kind and one pair
        } else if(array[0] === array[1] && array[0] === array[2] && array[3] === array[4]){
            return true
        }else
        return false
    } else
        return false
}

console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));
