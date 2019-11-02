// https://leetcode.com/problems/most-common-word/submissions/
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    // inputs ia a string and array of string
    // string length < 1000 & aray length  < 100
    //array letters are < 10
    debugger;
    if (paragraph.length > 1000 || banned.length > 100) {
        return null;
    }
    let wordCount = {};
    let maxWord = "";
    let maxCount = 0;
    let newPara = paragraph.replace(/,/g, ' ');
    let paraArray = newPara.split(/\W/);
    for (let i = 0; i < paraArray.length; i++) {
        let word = paraArray[i].toLowerCase();
        word = word.replace('!', '');
        word = word.replace('?', '');
        word = word.replace(',', '');
        word = word.replace(';', '');
        word = word.replace('.', '');
        if (!banned.includes(word) && word != "") {
            if (wordCount[word]) {
                wordCount[word] = wordCount[word] + 1;
            } else {
                wordCount[word] = 1
            }
            if (wordCount[word] > maxCount) {
                maxWord = word;
                maxCount = wordCount[word];
            }
        }

    }
    return maxWord;
};