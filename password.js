

let password = "bzVF6KIop8fsd"

let length  = password.length

let numbers = 0
let letters = 0

for(i = 0 ; i < password.length ; i++){
   //get asci code of each char
    code = password.charCodeAt(i);
   
    // count numbers.. code 48-57 is  0 - 9 
    if (code > 47 && code < 58) {
        numbers++
    }
    // count letters. code 65-90 is  a - z and 97-122 is A - Z 
    if ( ( code > 64 && code < 91) || (code > 96 && code < 123)) {
        letters++
    }
}

let forbiddenWords  = ["password","letmein"]
let containsForbiddenWords = false

for(i = 0 ; i < forbiddenWords.length ; i++){
 if (forbiddenWords[i] === password){
    containsForbiddenWords= true
 }
}
console.log("length",length,"letters",letters,"numbers",numbers,"containsForbiddenWords",containsForbiddenWords)

if ( length >= 10 && length <= 20 && letters >= 1  && numbers >= 1 && !containsForbiddenWords){
    console.log(`
                   +-+-+-+-+-+-+-+ +-+
                   |S|u|c|c|e|s|s| |!|
                   +-+-+-+-+-+-+-+ +-+`)
} else {
    console.log(`
    +-+-+-+-+-+-+-+
    |f|a|i|l|u|r|e|
    +-+-+-+-+-+-+-+`)
}