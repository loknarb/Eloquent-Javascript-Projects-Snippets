var nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2, 3, 5, 7, 11],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13],
        },
        addSnack: function (snack) {
            console.log("WHAT IS THIS?", this);
            this.snacks.push(snack);
            return this;
        },
    },
};
function stringprinter() {
    let arr = nestedData.innerData.numberData.primeNumbers;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// stringprinter();

function evenprinter() {
    let arr = nestedData.innerData.numberData.fibonnaci;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
// evenprinter();
function orderprinter() {
    let arr = nestedData.innerData.order;
    console.log(arr[1]);
}
// orderprinter();
// nestedData.innerData.addSnack("Chocolate");
// console.log(nestedData.innerData);

var nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000,
                    },
                },
            },
        },
        languages: {
            spanish: {
                hello: "Hola",
            },
            french: {
                hello: "Bonjour",
            },
        },
    },
};

function addSpeaker(value) {
    let obj = { name: value };
    let speakers = nestedObject.speakers;
    speakers.push(obj);
}
addSpeaker("bob");

function addLanguage(lang, greeting) {
    let languagesObj = nestedObject.data.languages;
    languagesObj[lang] = { hello: greeting };
}
addLanguage("english", "hey");

// nestedObject.data.languages.english.hello = "hey";
// console.log(nestedObject.data);

function addCountry(country, cap, pop) {
    let euroCountriesObj = nestedObject.data.continents.europe.countries;
    euroCountriesObj[country] = { capital: cap, population: pop };
}
addCountry("germany", "munich", 1);
console.log(nestedObject.data.continents.europe.countries);
