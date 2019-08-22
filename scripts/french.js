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
function sNameFunction() {
  fContent.innerHTML += `<h1 class="french-name">${frenchData.name}</h1>`

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
  fNumberOfSpeakersString += `<h4 class = "french__numberOfSpeakersHeader"> Number of speakers </h4> <p class "french__numberOfSpeakersP"> ${fNumberOfSpeakers}</p><ul></section>`
  console.log(fNumberOfSpeakersString)
  return fNumberOfSpeakersString
}



// Call the functions
fNav.addEventListener("click", () => {
  fContent.innerHTML = 
  sNameFunction() +
  fPeopleFunction() +
  fCountriesSpokenFunction() +
  fFunFactsHeaderFunction() + 
  fFunFactsRelatedLanguages() + 
  fFunFactsTotalLetters() +
  fNumberOfSpeakersFunction() 
})





