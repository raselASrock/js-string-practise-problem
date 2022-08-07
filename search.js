// **************** includes()************************
const lyrics = "Tumi bondhu kala pakhi ami jano ki??? Bosonto kale tomai bolte pari ni....kala kala sada sada"

// const doesExist = lyrics.includes("pakhi");
// console.log(doesExist);
// const doesExist = lyrics.includes("pokkhi");
// console.log(doesExist);
const searchString = "Pakhi";
const lyricsLowerCase = lyrics.toLowerCase();

const searchStringLower = searchString.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);

const doesExistOneLine = lyricsLowerCase.includes(searchString.toLowerCase());
console.log(doesExistOneLine);

// ******************* indexOf()*******************

console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("Tumi"));
