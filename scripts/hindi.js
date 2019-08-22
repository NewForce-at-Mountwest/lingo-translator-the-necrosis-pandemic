
  const hindiData = {
    name: "Hindi  ",
    notablePeople: [
      "Nelly Furtado",
      "John Cena",
      "Natalie Di Luccio",
      "Anush Stepanyan",
      "Will Smith",
      "Hugh Jackman",
      "Julia Roberts",
      "Ben Kingsley",
      "Dev Patel"

    ],
    funFacts: {
      relatedLanguages: `Hindi is not really one language, rather it is a "catchall" name for over 300 different languages, like Chinese, which is another generic name for different languages.`,
      lettersInAlphabet: 50,
      numberOfSpeakers: "about 341 million"
    },
    countriesSpoken: [
      "India",
      "Nepal",
      "Fiji",
      "Pakistan",
      "Trinidad and Tobago",
      "Singapore",
      "South Africa",
      "Mauritius",
      "Guyana",
      "Suriname"
    ],
    dictionary: {
      hello: {
        hindi: "नमस्ते",
        englishPronunciation: "namaste"},
      goodbye: {
        hindi: "अलविदा",
        englishPronunciation:"alavida"
      },
      thankYou: {
        hindi: "धन्यवाद",
        englishPronunciation: "dhanyavaad"

      },
      goodEvening: {
        hindi: "सुसंध्या",
        englishPronunciation: "susandhya"
      },
      howAreYou: {
        hindi: "क्या हाल है",
        englishPronunciation: "kya haal hai"
      },
      whatsYourName: {
        hindi: "तुम्हारा नाम क्या हे",
        englishPronunciation: "tumhaara naam kya he"
    }
    }
  };



const hContent = document.querySelector("#language-container");

// // Display language name / Header H1 - Hindi 
// function hLanguageHindiDisplay(){

//   var hNameOfLanguage = `${hindiData.name}`

//   // h1 - name of Language (Hindi) header
//   hContent.innerHTML +=`<h1 class = "hindi__nameOfLanguageHeader">${hNameOfLanguage}</h1><br>`

// };


function hNotablePeopleDisplay(){
  let hPeopleString=""

// Open Div
  hPeopleString +=`<div class="hindi-div"><h3 class="hindi-people-header">Notable people who speak Hindi:</h3><ul class="hindi-people-list">`
  for(i = 0; i < hindiData.notablePeople.length; i++){
    const hPeople= `${hindiData.notablePeople[i]}`

    hPeopleString += `<li>${hPeople}</li>`

    console.log(hPeople)
  }
    hPeopleString += `</ul>`

    
    
    return hPeopleString
};


function hFunFactsDisplay(){
    let hFunFactsString = ""

    hFunFactsString += `<h3 class="hindi-fun-facts-header">Fun Facts</h3>`

    return hFunFactsString

};
 
function hRelatedLanguagesDisplay() {
  
    const hRelatedLangParagraph = `${hindiData.funFacts.relatedLanguages}`
   

  let hRelatedString = ""
    hRelatedString += `<h4 class="hindi-related-languages"> Related Languages:</h4><br><p class="hindi-related-languages-p">${hRelatedLangParagraph}</p>`

    console.log(hRelatedLangParagraph)

    return hRelatedString

};

function hLettersInAlphabetDisplay() {

  const hNumOfLetters = `${hindiData.funFacts.lettersInAlphabet}`

  let hLettersInAlphabetString =""
    hLettersInAlphabetString += `<p class="hindi-lettersInAlphabet-P"> Letters in alphabet: ${hNumOfLetters}</p>`

    console.log(hNumOfLetters)

    return hLettersInAlphabetString

};

function hNumOfSpeakersDisplay() {

  const hNumOfSpeakers = `${hindiData.funFacts.numberOfSpeakers}`

  let hNumOfSpeakersString = ""
    hNumOfSpeakersString += `<p class="hindi-numberOfSpeakers-P"> How many people speak Hindi? ${hNumOfSpeakers}</p>`

  console.log(hNumOfSpeakers);  

  return hNumOfSpeakersString

};


function hCountriesSpokenDisplay(){

  let hCountriesSpokenString =""
    hCountriesSpokenString += `<h4 class = hindi__countriesSpokenHeader>Countries where Hindi is spoken</h4><ul class="hindi-countries-spoken-list">`
    return hCountriesSpokenString}

    function hPrintCountriesSpoken(){

      let hPrintCountriesString=""
  for(i = 0; i < hindiData.countriesSpoken.length; i++){

    const hCountriesSpoken=`${hindiData.countriesSpoken[i]}`

    hPrintCountriesString += `<li>${hCountriesSpoken}</li>`
  }
    
    hPrintCountriesString += `</ul>`
    console.log(hPrintCountriesString)
    return hPrintCountriesString
     
};

 

//    Translate bar
function hTranslate() {
  console.log("hindi translate bar")
//    close div
  return `</div><form class="hindi-search"><input id="hindi-searchbar" type="search"><input type="button" value="Translate to English"></form>
  `
};
// Event listener - when Hindi link is clicked in NavBar, calls functions.
const hNav = document.querySelector("#hindi");
hNav.addEventListener("click", () => {

  hContent.innerHTML =
  // hLanguageHindiDisplay() +
  hNotablePeopleDisplay() +
  hFunFactsDisplay() +
  hRelatedLanguagesDisplay() +
  hLettersInAlphabetDisplay() +
  hNumOfSpeakersDisplay() +
  hCountriesSpokenDisplay() +
  hPrintCountriesSpoken() +
  hTranslate()
});


