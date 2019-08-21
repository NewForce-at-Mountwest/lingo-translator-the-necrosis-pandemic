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

//Function for people
function fPeopleFunction (){
  const fPeopleEmptyString = ""
  fContent.innerHTML += `<h1> Notable People </h1>`
  for (i = 0; i < frenchData.notablePeople.length; i++)
  var fPeople = `<li> ${frenchData.notablePeople[i]} </li>`
 console.log(fPeople) 
 fContent.innerHTML += `<ul>${fPeople}</ul>`
};

//Function for countries
  function fCountriesSpokenFunction (){
    const fCountriesEmptyString = ""
      fContent.innerHTML += `<h2> Countries Spoken </h2>`
      for (i = 0; i < frenchData.countriesSpoken.length; i++){
    var fCountries = `<li> ${frenchData.countriesSpoken[i]} </li>`
    console.log(fCountries)
    fContent.innerHTML += `<ul>${fCountries}</ul>`
  }
 };

 //Function for Funfacts
 function fFunFactsFunction (){
   let fFactsHTMLString = ""
  fContent.innerHTML += `<h2> Fun Facts </h2>`
  for (i = 0; i < frenchData.funFacts.relatedLanguages.length; i++){
    var fLanguages = `<li> ${frenchData.funFacts.relatedLanguages[i]} </li>`
    console.log(fLanguages)
    fContent.innerHTML += `<ul>${fLanguages}</ul>`
    }
      fContent.innerHTML += `<h4 class="alphabetAmt">Letters in alphabet</h4> <p> ${frenchData.funFacts.lettersInAlphabet}</p>`
      fContent.innerHTML += `<h4 class="peopleSpeaking">Amount of speakers</h4> <p> ${frenchData.funFacts.numberOfSpeakers}</p>`
 };

function fDictionaryExamples (){
  fContent.innerHTML += `<h2> Dictionary </h2>`
  for (i = 0; i < frenchDate.dictionary.length; i++){

  }
}
// Call the functions
fNav.addEventListener("click", function() {

  fPeopleFunction ();
  fCountriesSpokenFunction ();
  fFunFactsFunction ();
})





