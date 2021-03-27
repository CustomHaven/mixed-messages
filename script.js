// Generating a Random Number
const generateRandomNum = num => Math.floor(Math.random() * num);

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


/* Below part helps me visualize the ASCII Hex Codes: commented out as it is just a test of how it should look on completion
'⁏	204F' reversed semicolon
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


// Itirating over the Object then populating the empty newArray with help off switch statement.
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


// converting the array to a string and sending a random emoji for the laughs
const stringify = (array, emojiArray) => {
    
    // ASCII and Emoji unicodes has been included for the project
    array.unshift(`We kick off with a Random Emoji: "${String.fromCodePoint(parseInt(emojiArray[generateRandomNum(emojiArray.length)], 16))}".`);
    console.log(array.join("\n"));
};


// Array of 56 different Emojis
const emojiArray = [
"1F600", "1F601", "1F602", "1F603", "1F604", "1F605", "1F606", "1F607", 
"1F608", "1F609", "1F60A", "1F60B", "1F60C", "1F60D", "1F60E", "1F60F",
"1F610", "1F611", "1F612", "1F613", "1F614", "1F615", "1F616", "1F617",
"1F618", "1F619", "1F61A", "1F61B", "1F61C", "1F61D", "1F61E", "1F61F",
"1F620", "1F621", "1F622", "1F623", "1F624", "1F625", "1F626", "1F627",
"1F628", "1F629", "1F62A", "1F62B", "1F62C", "1F62D", "1F62E", "1F62F",
"1F630", "1F631", "1F632", "1F633", "1F634", "1F635", "1F636", "1F637"
]


// Final Part calling the project function which will give the output as a string
stringify(newArray, emojiArray);