const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
    "John Cena",
    "Coco Chanel"
  ],
  funFacts: {
    relatedLanguages: ["Latin", "Spanish", "Italian"],
    lettersInAlphabet: 26,
    numberOfSpeakers: "about 300 million"
  },
  countriesSpoken: [
    "Belgium",
    "Benin",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Canada",
    "Chad",
    "the Ivory Coast",
    "the Democratic Republic of the Congo",
    "Djibouti",
    "Equatorial Guinea",
    "France",
    "Haiti",
    "Luxembourg",
    "Madagascar",
    "Mali",
    "Monaco",
    "Niger",
    "Rwanda",
    "Senegal",
    "Seychelles",
    "Switzerland",
    "Togo and Vanuatu"
  ],
  dictionary: {
    hello: "Bonjour",
    goodbye: "Au revior",
    thankYou: "Merci",
    goodEvening: "Bon soir",
    howAreYou: "Ça va?",
    whatsYourName: "Comment tu t’appelles?"
  }
};

const fNav = document.querySelector("#french");
console.log(fNav);

const fContent = document.querySelector("#language-container")

//    Name of Language
function fNameFunction(){
  let fNameString = ""
  fNameString += `<h1 class ="fPageTitle">French</h1>`
  return fNameString
}

//Function for people
function fPeopleFunction() {
  let fPeopleEmptyString = ""
  fPeopleEmptyString += `<section class = "fEntirePage" ><section class= "fSection1"><h2 class = "french__notablePeopleHeader"> Notable People </h2><ul>`
  for (i = 0; i < frenchData.notablePeople.length; i++) {
    const fPeople = `<li>${frenchData.notablePeople[i]}</li>`
    console.log(fPeople)
    fPeopleEmptyString += `${fPeople}`
  }
  fPeopleEmptyString += `</ul></section>`
  console.log(fPeopleEmptyString)
  return fPeopleEmptyString
};

//Function for countries
function fCountriesSpokenFunction() {
  let fCountriesEmptyString = ""
  fCountriesEmptyString += `<section class = "fSection2"> <h2 class = "french__countriesSpokenHeader"> Countries Spoken </h2><ul>`

  for (i = 0; i < frenchData.countriesSpoken.length; i++) {
    const fCountries = `<li>${frenchData.countriesSpoken[i]}</li>`
    console.log(fCountries)
    fCountriesEmptyString += `${fCountries}`
  }
  fCountriesEmptyString += `</ul></section>`
  console.log(fCountriesEmptyString)
  return fCountriesEmptyString
};

//Function for Funfacts
function fFunFactsHeaderFunction() {
  let fFunFactsHeaderString = ""
  fFunFactsHeaderString += `<section class = "fSection3"> <h2 class = "french__funFactsHeader"> Fun Facts </h2>`
  return fFunFactsHeaderString
};
//Function for Funfacts for related languages
function fFunFactsRelatedLanguages() {
  let fRelatedLanguagesEmptyString = ""
  fRelatedLanguagesEmptyString += `<h4 class = "french__relatedLanguagesHeader"> Related Languages</h4><ul>`
  for (i = 0; i < frenchData.funFacts.relatedLanguages.length; i++) {
    const fRelatedLanguages = `<li>${frenchData.funFacts.relatedLanguages[i]}</li>`
    console.log(fRelatedLanguages)
    fRelatedLanguagesEmptyString += `${fRelatedLanguages}`
  }
  fRelatedLanguagesEmptyString += `</ul>`
  console.log(fRelatedLanguagesEmptyString)
  return fRelatedLanguagesEmptyString
}
//Function for Funfacts for total letters
function fFunFactsTotalLetters() {
  let fLettersInAlphString = ""
  const fLettersInAlphabet = `${frenchData.funFacts.lettersInAlphabet}`
  fLettersInAlphString += `<h4 class = "french__lettersInAlphabetHeader"> Letters in Alphabet </h4 ><p class "french__amtLettersP"> ${fLettersInAlphabet}</p><ul>`
  fLettersInAlphString += `</ul>`
console.log(fLettersInAlphString) 
return fLettersInAlphString
 
}


//Function for Funfacts for number of speakers
function fNumberOfSpeakersFunction() {
  let fNumberOfSpeakersString = ""
  const fNumberOfSpeakers = `${frenchData.funFacts.numberOfSpeakers}`
  fNumberOfSpeakersString += `<h4 class = "french__numberOfSpeakersHeader"> Number of speakers </h4> <p class "french__numberOfSpeakersP"> ${fNumberOfSpeakers}</p><ul></section></section>`
  console.log(fNumberOfSpeakersString)
  return fNumberOfSpeakersString
}

// Translator Text Area and Translate Button HTML
// Put this area Above your Final Add.EventListener
function ftranslateBarFunction(){
  let translateBarCode =""
  translateBarCode += `<section class = "translatorSection">
  <label for="translationText"></label>
   <input type="text" id="translationInput" placeholder="      Type to Translate" autofocus />
   <button id= "translationButton">Translate</button>
   <div class= "answerArea"></div>
  </section>
  `
  return translateBarCode
};


// Call the functions
fNav.addEventListener("click", () => {
  fContent.innerHTML = 
  fNameFunction() +
  fPeopleFunction() +
  fCountriesSpokenFunction() +
  fFunFactsHeaderFunction() + 
  fFunFactsRelatedLanguages() + 
  fFunFactsTotalLetters() +
  fNumberOfSpeakersFunction() +
  ftranslateBarFunction()
})

// Translator Text Area and Translate Button
// Creating a Const for our Translate Button
const languageContainer = document.querySelector("#language-container")
// Translate Button Click Event
languageContainer.addEventListener("click", () =>{
   
  // So it doesnt load at the same time as the Page
  if (event.target.id === "translationButton"){
  // Text Area 
  const translationInput = document.querySelector("#translationInput").value
  // Answer Area
  const answerArea = document.querySelector(".answerArea");
  let translationHtml = `<p><p>`
  // First Word in Dictionary
 if (translationInput === `hello`){
    translationHtml = `<p>${frenchData.dictionary.hello}</p>`}
    // Second Word in Dictionary
  else if(translationInput === `goodbye`){
    translationHtml =`<p>${frenchData.dictionary.goodbye}</p>`}
    // Third Word in Dictionary
    else if(translationInput === `thank you`){
      translationHtml =`<p>${frenchData.dictionary.thankYou}</p>`}
      // Fourth Word in Dictionary
    else if (translationInput === `good evening`){
      translationHtml = `<p>${frenchData.dictionary.goodEvening}</p>`}
      // Fifth Word in Dictionary
     else if (translationInput === `how are you`){
       translationHtml = `<p>${frenchData.dictionary.howAreYou}</p>`}
      //  Sixth Word in Dictionary 
       else if(translationInput === `what's your name?`){
         translationHtml = `<p>${frenchData.dictionary.whatsYourName}</p>`}
        // Print your Text Input into your Text Area
         answerArea.innerHTML += translationHtml;
       }
    }
  )





