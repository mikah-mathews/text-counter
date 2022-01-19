//utility logic
function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

//business logic
// function wordCounter(text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let wordCount = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(word) {
//     if (isNaN(word) === true) {
//       wordCount++;
//     }
    
//   });
//   return wordCount;
// }

function numberOfOccurrencesInText(word, text) { 
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordOccurrences = 0;
  let resultArray = [];
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordOccurrences++;
    }
  });
  resultArray.push([word, wordOccurrences])
  return resultArray;
};

function threeMostCommon(text) {
  const wordArray = text.split(" ").sort();
  let wordsSort = text.split(" ").sort();
  let wordOccurrences = 0;
  for (i=0; i<= wordArray.length; i++ ) {
    let test = numberOfOccurrencesInText(wordArray[i], text); //find out how many times word shows up
    console.log(test[i][1]); // have an array or var ???? 
    console.log(wordsSort.splice(0,test[i][1]));
    // [[hello, 3], [hi, 2], [bye, 5], ...]
    // then compare words/how times showed up
  }
  //let array = [[hello, 2], []];
  let most1 = 0;
  let most2 = 0;
  let most3 = 0;

  //if (allwords[i] === )

}

// UI logic
function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length -1)) {
      htmlString = htmlString.concat(" ")
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function() {
  $("form#word-counter").submit(function(event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});