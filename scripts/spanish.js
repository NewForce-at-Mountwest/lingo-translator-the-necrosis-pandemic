const spanishData = {
  name: "Spanish",
  notablePeople: [
    "Antonio Banderas",
    "John Cena",
    "Enrique Iglesias",
    "Rita Moreno",
    "Penelope Cruz"
  ],
  funFacts: {
    relatedLanguages: ["Catalan", "Italian", "French", "Portuguese", "Romanian"],
    lettersInAlphabet: 27,
    numberOfSpeakers: "more than 437 million"
  },
  countriesSpoken: [
    "Argentina",
    "Bolivia",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominican Republic",
    "Equador",
    "El Salvador",
    "Equatorial Guinea",
    "Guetemala",
    "Honduras",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Mali",
    "Monaco",
    "Paraguay",
    "Peru",
    "Puerto Rico",
    "Spain",
    "Uruguay",
    "Venezuela"
  ],
  dictionary: {
    hello: "Hola",
    goodbye: "Adiós",
    thankYou: "Gracias",
    goodEvening: "Buena noches",
    howAreYou: "¿cómo estás?",
    whatsYourName: "cuál es tu nombre?"
  }
};

//    Variable to Modify DOM
const sContent = document.querySelector("#language-container")

//    Name of Language
function sName() {
  return `<center><h2 class="spanish-name">${spanishData.name}</h2></center>`
}

//    Loop Notable Spanish Speakers
function sNotablePeople() {
  let sPeopleString = ""
  console.log("Spanish Notable People")

  sPeopleString += `<h3 class="spanish-people">Notable Speakers</h3>
  <ul class="spanish-people">`
  for (i = 0; i < spanishData.notablePeople.length; i++) {
    var sPeople = `<li>${spanishData.notablePeople[i]}</li>`
    sPeopleString += `${sPeople}`
  }
  sPeopleString += `</ul></div>`
  return sPeopleString
}

//    Loop Related Languages
function sRelatedLanguages() {
  console.log("Spanish Related Languages")
  let sRelatedString = ""
  sRelatedString += `<h3 class="spanish-related-languages">Related Languages</h3><ul class="spanish-related-languages">`
  for (i = 0; i < spanishData.funFacts.relatedLanguages.length; i++) {
    var sFactLang = `<li>${spanishData.funFacts.relatedLanguages[i]}</li>`
    sRelatedString += `${sFactLang}`
  }
  sRelatedString += `</ul></div>`
  return sRelatedString
}
//    Number Of Letters In Spanish Alphabet
function sLetters() {

  return `<div class="sbox"><h3 class="spanish-letters">Number of letters in alphabet</h3> <p class="spanish-letters">${spanishData.funFacts.lettersInAlphabet}</p><br><br>`
}
//    Number Of Spanish Speakers
function sSpeakers() {
  //    Open div
  return `<div class="spanish-div"><div class="sbox"><h3 class="spanish-speakers">Number of Speakers</h3><p class="spanish-speakers"> ${spanishData.funFacts.numberOfSpeakers}</p><br><br>`
}
//    Loop Countries Spoken
function sCountriesSpoken() {
  let sSpokenString = ""
  console.log("spanish countries spoken")
  sSpokenString += `<div class="sbox"><h3 id="scountry-text" class="spanish-countries-spoken">Countries Spoken</h3><ul class="spanish-countries-spoken">`
  for (i = 0; i < spanishData.countriesSpoken.length; i++) {
    var sSpoken = `<li>${spanishData.countriesSpoken[i]}</li>`
    sSpokenString += `${sSpoken}`
  }
  sSpokenString += `</ul></div>`
  return sSpokenString
}

// Translator Text Area and Translate Button HTML
// Put this area Above your Final Add.EventListener
function sTranslateBarFunction(){
  let translateBarCode =""
  translateBarCode += `<section class = "stranslatorSection">
  <label for="translationText"></label>
   <input type="text" id="stranslationInput" placeholder="      Type to Translate" autofocus />
   <button id= "stranslationButton">Translate</button>
   <div class= "sanswerArea"></div>
  </section></div>
  `
  return translateBarCode
};


//    Find Link
const sNav = document.querySelector("#spanish")
//    Listen for Click on Link, Then Call Functions
sNav.addEventListener("click", function () {
  console.log("you clicked Spanish")
  console.log(sContent)
  sContent.innerHTML = (sName() + sSpeakers() + sNotablePeople() + sLetters() + sRelatedLanguages() + sCountriesSpoken() + sTranslateBarFunction())
})

// Translator Text Area and Translate Button
// Creating a Const for our Translate Button
const sLanguageContainer = document.querySelector("#language-container")
// Translate Button Click Event
sLanguageContainer.addEventListener("click", () =>{
   
  // So it doesnt load at the same time as the Page
  if (event.target.id === "stranslationButton"){
  // Text Area 
  const translationInput = document.querySelector("#stranslationInput").value
  // Answer Area
  const answerArea = document.querySelector(".sanswerArea");
  let translationHtml = `<p><p>`
  // First Word in Dictionary
 if (translationInput === `hello`){
    translationHtml = `<p>${spanishData.dictionary.hello}</p>`}
    // Second Word in Dictionary
  else if(translationInput === `goodbye`){
    translationHtml =`<p>${spanishData.dictionary.goodbye}</p>`}
    // Third Word in Dictionary
    else if(translationInput === `thank you`){
      translationHtml =`<p>${spanishData.dictionary.thankYou}</p>`}
      // Fourth Word in Dictionary
    else if (translationInput === `good evening`){
      translationHtml = `<p>${spanishData.dictionary.goodEvening}</p>`}
      // Fifth Word in Dictionary
     else if (translationInput === `how are you`){
       translationHtml = `<p>${spanishData.dictionary.howAreYou}</p>`}
      //  Sixth Word in Dictionary 
       else if(translationInput === `what's your name?`){
         translationHtml = `<p>${spanishData.dictionary.whatsYourName}</p>`}
        // Print your Text Input into your Text Area
         answerArea.innerHTML = translationHtml;
       }
    }
  )