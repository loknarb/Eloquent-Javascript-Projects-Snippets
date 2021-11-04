var instructorssData = {
    name: "Tim",
    favoriteHobbies: ["Sailing", "Hiking", "Coding"],
};
// console.log(instructorssData.favoriteHobbies[2])
let hobbiesArray = instructorssData.favoriteHobbies;
// console.log(hobbiesArray[1]);// returns "Sailing"

// ! Nested Complex Object with nested arrays and objects
var instructorsData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"],
        },
    },
};

//! Creating a function with Expression Notation in order to filter thru a complex object and its UNKNOWN keys and values
var programmingLanguages = {
    java: {
        yearCreated: 1995,
        creator: "James Gosling",
    },
    javaScript: {
        yearCreated: 1995,
        creator: "Brendan Eich",
    },
};

function addProgrammingLanguage(
    nameOfLanguage,
    yearLanguageCreated,
    creatorOfLanguage
) {
    //* how can we access the programming languages object?
    //* We can't use dot notation, because we don't know the name of
    //* the key until the function is called.
    //* Instead we use bracket notation where the key is the
    //* nameOfLanguage that is being passed to the function.
    programmingLanguages[nameOfLanguage] = {
        //* Creating the object which will be the value of the
        //* key.  We can directly assign the yearLanguageCreated
        //* and creatorOfLanguage to the appropriate keys here.
        yearCreated: yearLanguageCreated,
        creator: creatorOfLanguage,
    };
}

// ! Exercises
let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"],
        },
    },
};

// function displayCities() {
//     let cityArr = instructorData.additionalData.moreDetails.citiesLivedIn;
//     for (let i = 0; i < cityArr.length; i++) {
//         console.log(cityArr[i]);
//     }
// }
// displayCities();

function displayHometownData() {
    let hometownObject = instructorData.additionalData.moreDetails.hometown;
    for (let i = 0; i < Object.keys(hometownObject).length; i++) {
        console.log(Object.keys(hometownObject)[i]);
    }
}

displayHometownData();

function addDetail(param1, param2) {
    let moreDetails = instructorData.additionalData.moreDetails;
    moreDetails[param1] = param2;
}

addDetail("isHilarious", true);
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
// console.log(instructorData);

function removeDetail(param1) {
    let moreDetails = instructorData.additionalData.moreDetails;
    delete moreDetails[param1];
    return moreDetails;
}
removeDetail("citiesLivedIn");
removeDetail("hometown");
removeDetail("favoriteBasketballTeam");
console.log(instructorData);
