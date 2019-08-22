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

//    Translate bar
function sTranslate() {
  console.log("spanish translate bar")
  //    close div
  return `</div><center><form class=""spanish-search id="spanish-translate"><label>Type Here: </label><input id="spanish-searchbar" type="search"><input type="button" value="Translate to Spanish"></form></center>`
}

//    Find Link
const sNav = document.querySelector("#spanish")
//    Listen for Click on Link, Then Call Functions
sNav.addEventListener("click", function () {
  console.log("you clicked Spanish")
  console.log(sContent)
  sContent.innerHTML = (sName() + sSpeakers() + sNotablePeople() + sLetters() + sRelatedLanguages() + sCountriesSpoken() + sTranslate())
})


