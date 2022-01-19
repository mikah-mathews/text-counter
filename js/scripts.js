
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(word) {
    if (isNaN(word) === true) {
      wordCount++;
    }
    
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) { 
  const wordArray = text.split(" ");
  if (text.trim().length === 0) {
    return 0;
  }
  let wordOccurrences = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordOccurrences++;
    }
  });
  return wordOccurrences;
};