
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

// Link NavBar - Hindi
const hNav = document.querySelector("#hindi");

// select area to add content
const hContent = document.querySelector("#language-container");

// Display language name / Header H1 - Hindi 
function hLanguageHindiDisplay(){

  var hNameOfLanguage = `${hindiData.name}`

  // h1 - name of Language (Hindi) header
  hContent.innerHTML +=`<h1 class = "hindi__nameOfLanguageHeader">${hNameOfLanguage}</h1><br>`

};

// Display Hindi notable people header <H3> and people list [array] <li>
function hNotablePeopleDisplay(){

  let hPeopleString=""
// Open div  
hPeopleString +=`<div class="hindi-div"><h3 class="hindi-people">Notable people who speak Hindi:</h3><ul class="hindi-people">`
  for(i = 0; i < hindiData.notablePeople.length; i++){
    const hPeople= `<li>${hindiData.notablePeople[i]}</li>`

    hPeopleString += `${hPeople}`
  }
    console.log(hPeople)
    hPeopleString += `</ul>`
    
    return hPeopleString
}  


    // list - listOfPeople
    hContent.innerHTML += `<li class = "hindi__listOfPeople">${hPeople}</li><br>`

  }

};


////** */

// Display Fun Facts header <h3>, relatedLanguages header <h4>, relatedLang paragraph <p>, number of letters in alphabet <p>, number of speakers <p>. 
function hFunFactsDisplay() {

  // h3 header - Fun Facts
  hContent.innerHTML += `<h3 class = "hindi__funFactsHeader">Fun Facts</h3><br>`

    const hRelatedLangParagraph = `${hindiData.funFacts.relatedLanguages}`
    const hNumOfLetters = `${hindiData.funFacts.lettersInAlphabet}`
    const hNumOfSpeakers = `${hindiData.funFacts.numberOfSpeakers}`
    

    console.log(hRelatedLangParagraph);
    console.log(hNumOfLetters);
    console.log(hNumOfSpeakers);
    
    //h4 header Related Languages
    hContent.innerHTML += `<h4 class ="hindi__relatedLangHeader">Related Languages</h4>`
   
    //paragraphs - Related Languages / Fun Facts
    hContent.innerHTML += `<p class="hindi__relatedLangP">${hRelatedLangParagraph}</p>`
    hContent.innerHTML += `<p class="hindi__lettersInAlphabetP"> Letters in alphabet: ${hNumOfLetters}</p>`
    hContent.innerHTML += `<p class="hindi__numberOfSpeakersP"> How many people speak Hindi? ${hNumOfSpeakers}</p>`
};

// Display countriesSpokenHeader <h4>, listOfCountriesSpoken <li>

function hCountriesSpokenDisplay(){

  //h4 header CountriesSpokenHeader
  hContent.innerHTML += `<h4 class = hindi__countriesSpokenHeader>Countries where Hindi is spoken</h4>`

  for(i = 0; i < hindiData.countriesSpoken.length; i++){

    const hCountriesSpoken=`${hindiData.countriesSpoken[i]}`

    console.log(hCountriesSpoken)

    // list of Countries Spoken
    hContent.innerHTML += `<li class = "hindi__listOfCountriesSpoken">${hCountriesSpoken}</li>`

  }
};

// Event listener - when Hindi link is clicked in NavBar, calls functions.

hNav.addEventListener("click", function(){

  hLanguageHindiDisplay();
  hNotablePeopleDisplay();
  hFunFactsDisplay();
  hCountriesSpokenDisplay();
});









