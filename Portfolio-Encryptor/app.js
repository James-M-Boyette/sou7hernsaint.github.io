const runEncryptionButton = document.querySelector("#runEncryptor");

runEncryptionButton.onclick = () => {
    console.log(`Let's create a basic encryptor!`);

    const encryptor = {
        "A" : "Z",
        "B" : "Y",
        "C" : "X",
        "D" : "W",
        "E" : "V",
        "F" : "U",
        "G" : "T",
        "H" : "S",
        "I" : "R",
        "J" : "Q",
        "K" : "P",
        "L" : "O",
        "M" : "N",
        "N" : "M",
        "O" : "L",
        "P" : "K",
        "Q" : "J",
        "R" : "I",
        "S" : "H",
        "T" : "G",
        "U" : "F",
        "V" : "E",
        "W" : "D",
        "X" : "C",
        "Y" : "B",
        "Z" : "A",
        " " : " ",
        "'" : "'",
        "`" : "`",
        "," : ",",
        ";" : ";",
        "." : ".",
        ":" : ":",
        "[" : "[",
        "]" : "]",
        "{" : "{",
        "}" : "}",
        "(" : "(",
        ")" : ")",
        "<" : "<",
        ">" : ">",
        "~" : "~",
        "-" : "-",
        "_" : "_",
        "+" : "+",
        "=" : "=",
        "*" : "*",
        "&" : "&",
        "^" : "^",
        "%" : "%",
        "$" : "$",
        "#" : "#",
        "@" : "@",
        "!" : "!",
        "?" : "?",
        "|" : "|",
        "/" : "/",
        "1" : "1",
        "2" : "2",
        "3" : "3",
        "4" : "4",
        "5" : "5",
        "6" : "6",
        "7" : "7",
        "8" : "8",
        "9" : "9",
        "0" : "0",
    }

    const output = document.querySelector('#target')

    let userInput = prompt(`Please enter a phrase or word to convert it into secret code! `);

    console.log(`Here's the userInput, and the type:`);
    console.log(userInput);
    console.log(typeof userInput);

    // userInput = userInput.toUpperCase();
    // console.log(`Here's the upper-case version:`);
    // console.log(userInput);

    // userInput = userInput.split(``);
    // console.log(`Here's the split version:`);
    // console.log(userInput);

    console.log(`This was your input: ${userInput}`)
    console.log(`This was your input: ${userInput[0]}`)

    // Problem: if we split without spaces, we lose the ability to de-encrypt later
    // Splitting by ` ` gives us an array of ['ABC', 'DEF', 'GHI']
    // userInput = userInput.toUpperCase().split(` `);
    userInput = userInput.toUpperCase().split(``);
    console.log(`This was your input: ${userInput[0]}`)

    let encryptedArray = [];

    // Solution: Use a nested loop, that 1) reads each 'chunk' and pushes the encrypted letter to the output array, and 2) adds a space (thus maintaining the original sentance structure)
    // for(let i = 0; i < userInput.length; i++){
    //     for(let i2 = 0; i2 < userInput[i].length; i2++){
    //         // console.log(userInput[i][i2]);
    //         encryptedArray.push(encryptor[userInput[i][i2]]); //  Here we are calling the letter from userInput[i] in our encryptor - `encryptor - what is associated with "A" or "B" or "C"?`
    //     }
    //     console.log(`i2 finished`)
    //     encryptedArray.push(` `)
    //     console.log(encryptedArray);
    // }
    // Solution 2:
    for(let i = 0; i < userInput.length; i++){
        console.log(userInput[i]);
        encryptedArray.push(encryptor[userInput[i]]); //  Here we are calling the letter from userInput[i] in our encryptor - `encryptor - what is associated with "A" or "B" or "C"?`
    }

    console.log(encryptedArray);

    encryptedArray = encryptedArray.join(``);
    
    console.log(`Here's the encryptedArray:`);
    console.log(encryptedArray);
    console.log(typeof encryptedArray);

    document.getElementById("target").style = `font-style: normal`;
    output.innerHTML = encryptedArray;
}

const runDecryptionButton = document.querySelector("#runDecryptor");

runDecryptionButton.onclick = () => {
    console.log(`Let's decrypt our message!`);

    const decryptor = {
        "Z" : "A",
        "Y" : "B",
        "X" : "C",
        "W" : "D",
        "V" : "E",
        "U" : "F",
        "T" : "G",
        "S" : "H",
        "R" : "I",
        "Q" : "J",
        "P" : "K",
        "O" : "L",
        "N" : "M",
        "M" : "N",
        "L" : "O",
        "K" : "P",
        "J" : "Q",
        "I" : "R",
        "H" : "S",
        "G" : "T",
        "F" : "U",
        "E" : "V",
        "D" : "W",
        "C" : "X",
        "B" : "Y",
        "A" : "Z",
        " " : " ",
        "'" : "'",
        "`" : "`",
        "," : ",",
        ";" : ";",
        "." : ".",
        ":" : ":",
        "[" : "[",
        "]" : "]",
        "{" : "{",
        "}" : "}",
        "(" : "(",
        ")" : ")",
        "<" : "<",
        ">" : ">",
        "~" : "~",
        "-" : "-",
        "_" : "_",
        "+" : "+",
        "=" : "=",
        "*" : "*",
        "&" : "&",
        "^" : "^",
        "%" : "%",
        "$" : "$",
        "#" : "#",
        "@" : "@",
        "!" : "!",
        "?" : "?",
        "|" : "|",
        "/" : "/",
        "1" : "1",
        "2" : "2",
        "3" : "3",
        "4" : "4",
        "5" : "5",
        "6" : "6",
        "7" : "7",
        "8" : "8",
        "9" : "9",
        "0" : "0",
    }

    const output = document.querySelector('#target')

    let userInput = document.getElementById("target").innerHTML

    console.log(`Here's the userInput, and the type:`);
    console.log(userInput);
    console.log(typeof userInput);

    console.log(`This was your input: ${userInput}`)
    console.log(`This was your input: ${userInput[0]}`)


    userInput = userInput.toUpperCase().split(``);
    console.log(`This was your input: ${userInput[0]}`)

    let decryptedArray = [];

    // Solution: Use a nested loop, that 1) reads each 'chunk' and pushes the encrypted letter to the output array, and 2) adds a space (thus maintaining the original sentance structure)
    for(let i = 0; i < userInput.length; i++){
        decryptedArray.push(decryptor[userInput[i]]); //  Here we are calling the letter from userInput[i] in our encryptor - `encryptor - what is associated with "A" or "B" or "C"?`
    }

    console.log(decryptedArray);

    decryptedArray = decryptedArray.join(``);
    
    console.log(`Here's the decryptedArray:`);
    console.log(decryptedArray);
    console.log(typeof decryptedArray);

    document.getElementById("target").style = `font-style: normal`;
    output.innerHTML = decryptedArray;
}
