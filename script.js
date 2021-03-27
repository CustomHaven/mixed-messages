// Generating a Random Number
const generateRandomNum = arraylen => Math.floor(Math.random() * arraylen);

// empty array to push the message to

const newArray = [];

// Mixed Messages saved to an Object
const programmingLanguage = {
    language: ['JavaScript', 'Python', 'php', 'Java', 'C#', 'Ruby', 'C++'],
    level: ['Amature', 'Intermediate', 'Junior', 'Senior', 'Master', 'Supreme Wizard'],
    advice: ['It always seems impossible until it is done', 'Success is not final, failure is not fatal', "It's always too soon to quit!"],
    emojiASCII: ["Front-End Engineer \u{204F} \u{2282} ( \u{25C9} \u{203F} \u{25CE} ) \u{3064} ;", 
    "Back-End Engineer \u{204F} \u{219C} ( \u{21BB} _ \u{21BA} ) \u{219D} ;", 
    "Full-Stack Engineer \u{204F} \u{029DC} ( \u{022EC} \u{203F} \u{022ED} ) \u{022B8} ;"]
};


/*

'⁏	204F'
'Front-End Engineer ⁏⊂(◉‿◎)つ'
'‿	203F'
'◉	25C9'
'◎	25CE'
'⊂	2282 , 2283 for opposite side'
'つ 3064' is better for this instead off opposite of 2282;
'()'

'Back-End Engineer ⁏↜(↻_↺)↝'
'↜ 219C'
'↝	219D'
'↻	21BB'
'↺	21BA'

'Full-Stack Engineer ⧜(⋬‿⋭)⊸ '
'⧜	029DC'
'⋬ 022EC'
'⋭ 022ED'
'⊸ 022B8'
*/




// Itirating over the Object
for (let key in programmingLanguage) {

    let indexGen = generateRandomNum(programmingLanguage[key].length)

    switch (key) {
        case 'language':
            newArray.push(`The language you are currently doing is: "${programmingLanguage[key][indexGen]}".`);
            break;
        case 'level':
            newArray.push(`Your experty level is at: "${programmingLanguage[key][indexGen]}".`);
            break;
        case 'advice':
            newArray.push(`Just remmember: "${programmingLanguage[key][indexGen]}".`);
            break;
        case 'emojiASCII':
            newArray.push(`You will work as a "${programmingLanguage[key][indexGen]}".`);
            break;
        default:
            newArray.push("WRONG!")
    }
};

const valStr = newArray[3];

// converting the array to a string
const stringify = (array,val) => {

    console.log("emiii " + String.fromCodePoint(parseInt("1F923", 16)))

    console.log(array.join("\n"));

};

console.log("\u{21AD}"); 
stringify(newArray, valStr);
