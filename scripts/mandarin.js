const mandarinData = {
  name: "Mandarin",
  notablePeople: [
    "Herbert Hoover",
    "Koji Yano",
    "Mark Henry Rowswell",
    "Mark Zuckerberg",
    "Ming Na Wen",
    "John Cena",
    "Kevin Rudd",
    "Park Geun-hye",
    "Vanessa Branch",
    "Mira Sorvino",
    "Bob Woodruff",
    "Takeshi Kaneshiro",
    "Lou Jing"
  ],
  funFacts: {
    relatedLanguages: ["Korean", "Japanese"],
    lettersInAlphabet: 50000,
    numberOfSpeakers: "about 900 million",
    mandrinInfo: {
      dialectInfo: "Mandrin is one of many different Chinese dialects. It is mainly spoken in North and Southeast China",
      chineseDialects: ["Mandarin", "Wu", "Gan", "Xiang", "Hakka", "Yue", "Min"]
    }
  },
  countriesSpoken: [
    "China",
    "Singapore",
    "Taiwan"
  ],
  dictionary: {
    hello: "你好",
    goodbye: "再见",
    thankYou: "谢谢",
    goodEvening: "晚上好",
    howAreYou: "你好吗",
    whatsYourName: " 你叫什么名字"
  }
};


const mContent = document.querySelector("#language-container")
// Title
function mTitle(){
  let mTitleHtmlString =""
  mTitleHtmlString += `<h1 class ="mPageTitle">Mandarin</h1>`
  return mTitleHtmlString
};

//Function with Loop for notable People
function mNotablePeople() {
  let mNotableHtmlString = ""
  mNotableHtmlString += `<section class = "mEntirePage"><section class= "mSection1"><h3 class = "mandarin__noteHeader">Notable People who speak Mandarin</h3><ul>`
  for (i = 0; i < mandarinData.notablePeople.length; i++) {
    var mPeople = `<li>${mandarinData.notablePeople[i]}</li>`
    console.log(mPeople)
    mNotableHtmlString += `${mPeople}`
  }
  mNotableHtmlString += `</ul></section>`
  console.log(`${mNotableHtmlString}`)
  return mNotableHtmlString
};

// Fun Facts Header
function mFunFacts() {
  let funFactsHtmlString = `<section class= "mSection2"><h3 class = "mandarin__funHeader">Fun Facts</h3>`
 return funFactsHtmlString
};


// Function for related Languages with Loop
function mRelatedLanguages() {
  let mRelatedHtmlString = ""
  mRelatedHtmlString += `<h4 class="mandarin__relatedHeader">Related Languages</h4><ul>`
  // Loop for related Languages
  for (i = 0; i < mandarinData.funFacts.relatedLanguages.length; i++) {
    var mrelated = `<li>${mandarinData.funFacts.relatedLanguages[i]}</li>`

    mRelatedHtmlString += `${mrelated}`
  }
  mRelatedHtmlString += `</ul>`
  console.log(" this should mRelatedHtmlString in mRelatedLanguages", mRelatedHtmlString)
  return mRelatedHtmlString;

};

// Letters in Alphabet
function mLetters() {
  let mLettersHtmlString = ""
  mLettersHtmlString += `<h4 class = "mandarin__lettersIn">Letters in Alphabet</h4>
      <p>${mandarinData.funFacts.lettersInAlphabet}</p>`
      return mLettersHtmlString;
};

// Number of People who Speak Mandarin
function mNumbers() {
  let mNumbersHtmlString =""
 mNumbersHtmlString += `<h4 class = "mandarin__numberSpeakers"> How many people speak Mandarin?</h4>
    <p>${mandarinData.funFacts.numberOfSpeakers}</p>`
    return mNumbersHtmlString;
};

// Dialect Info
function mSpokenDialect() {
  let mSpokenHtmlString =""
  mSpokenHtmlString += `<h4 class = "mandarin__dialectsInfo">Dialect Info</h4>
  <p>${mandarinData.funFacts.mandrinInfo.dialectInfo}</p></section>`
  return mSpokenHtmlString
};

// Function for Dialect Info with Loop
function mDialectInfo() {
  let mDialectHtmlString = ""
  mDialectHtmlString += `<section class = "mSection3"><h4 class = "mandarin__dialectsHeader">Chinese Dialects</h4><ul>`
  // Main loop for dialect Info
  for (i = 0; i < mandarinData.funFacts.mandrinInfo.chineseDialects.length; i++) {
    var mDialect = `<li>${mandarinData.funFacts.mandrinInfo.chineseDialects[i]}</li>`
    mDialectHtmlString += `${mDialect}`
  }
  mDialectHtmlString += `</ul>`
 return mDialectHtmlString
};

// Function for Countries Spoken with Loop
function mCountriesSpoken() {
  let mCountriesHtmlString = ""
 mCountriesHtmlString += `<h3 class = "mandarin__spokenHeader">Countries Spoken</h3><ul>`
  // Loop for Countries Spoken
  for (i = 0; i < mandarinData.countriesSpoken.length; i++) {
    var mSpoken = `<li>${mandarinData.countriesSpoken[i]}</li>`

    mCountriesHtmlString += `${mSpoken}`
  }
  mCountriesHtmlString += `</ul></section></section>`
  return mCountriesHtmlString
  ;
};


// Translator Text Area and Translate Button HTML
// Put this area Above your Final Add.EventListener
function mTranslateBarFunction(){
  let translateBarCode =""
  translateBarCode += `<section class = "translatorSection">
  <label for="translationText"></label>
   <input type="text" id="stranslationInput" placeholder="      Type to Translate" autofocus />
   <button id= "stranslationButton">Translate</button>
   <div class= "sanswerArea"></div>
  </section>
  `
  return translateBarCode
};

// Link to Mandarin
const mNav = document.querySelector("#mandarin")

mNav.addEventListener("click", () => {
mContent.innerHTML = 
  mTitle ()+
  mNotablePeople() +
  mFunFacts() +
  mRelatedLanguages()+
  mLetters()+
  mNumbers()+
  mSpokenDialect()+
  mDialectInfo()+
  mCountriesSpoken()+
  mTranslateBarFunction()
});


console.log(mContent)

// Translator Text Area and Translate Button

// Creating a Const for our Translate Button
const languageContainer = document.querySelector("#language-container")

// Translate Button Click Event
languageContainer.addEventListener("click", () =>{
   
  // So it doesnt load at the same time as the Page
  if (event.target.id === "stranslationButton"){

  // Text Area 
  const translationInput = document.querySelector("#stranslationInput").value

  // Answer Area
  const answerArea = document.querySelector(".sanswerArea");

  let translationHtml = `<p><p>`
  // First Word in Dictionary
 if (translationInput === `hello`){
    translationHtml = `<p>${mandarinData.dictionary.hello}</p>`}

    // Second Word in Dictionary
  else if(translationInput === `goodbye`){
    translationHtml =`<p>${mandarinData.dictionary.goodbye}</p>`}

    // Third Word in Dictionary
    else if(translationInput === `thank you`){
      translationHtml =`<p>${mandarinData.dictionary.thankYou}</p>`}

      // Fourth Word in Dictionary
    else if (translationInput === `good evening`){
      translationHtml = `<p>${mandarinData.dictionary.goodEvening}</p>`}

      // Fifth Word in Dictionary
     else if (translationInput === `how are you`){
       translationHtml = `<p>${mandarinData.dictionary.howAreYou}</p>`}

      //  Sixth Word in Dictionary 
       else if(translationInput === `what's your name?`){
         translationHtml = `<p>${mandarinData.dictionary.whatsYourName}</p>`}

        // Print your Text Input into your Text Area
         answerArea.innerHTML = translationHtml;

       }
    }
  )
