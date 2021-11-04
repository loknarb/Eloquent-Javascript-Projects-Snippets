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
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function displayCities() {
    let cityArr = instructorData.additionalData.moreDetails.citiesLivedIn;
    for (let i = 0; i < cityArr.length; i++) {
        console.log(cityArr[i]);
    }
}


displayCities();