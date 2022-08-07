const lyrics = "Tumi bondhu kala pakhi ami jano ki. Bosonto kale tomai bolte pari ni. kala kala sada sada";
console.log(lyrics);
// Every White Space Split*********
const parts = lyrics.split(" ");
console.log(parts);

// Every Sentencs Split**********
const sentence = lyrics.split(".");
console.log(sentence);

// Every Character Split********
const char = lyrics.split("");
console.log(char);

// Slice********
const parcial = lyrics.slice(5, 33);
console.log(parcial);

// Substring**********

const letter = lyrics.substring(5,8);
console.log(letter);

// Join*********

const mainSentence = sentence.join(".")
console.log(mainSentence);