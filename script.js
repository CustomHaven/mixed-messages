// Generating a Random Number
const generateRandomNum = arraylen => Math.floor(Math.random() * arraylen);

// empty array to push the message to

const newArray = [];

// Mixed Messages saved to an Object
const programmingLanguage = {
    language: ['JavaScript', 'Python', 'php', 'Java', 'C#', 'Ruby', 'C++'],
    level: ['Amature', 'Intermediate', 'Junior', 'Senior', 'Master', 'Supreme Wizard'],
    advice: ['It always seems impossible until it is done', 'Success is not final, failure is not fatal', "It's always too soon to quit!"]
};

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
        default:
            newArray.push("WRONG!")
    }
};

// console.log(newArray)

// converting the array to a string
const stringify = array => {

    console.log(array.join("\n"));

};

stringify(newArray);
