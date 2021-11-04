var users = [
    {
        username: "larry",
        email: "larry@foo.com",
        yearsExperience: 22.1,
        favoriteLanguages: ["Perl", "Java", "C++"],
        favoriteEditor: "Vim",
        hobbies: ["Fishing", "Sailing", "Hiking"],
        hometown: {
            city: "San Francisco",
            state: "CA",
        },
    },
    {
        username: "jane",
        email: "jane@test.com",
        yearsExperience: 33.9,
        favoriteLanguages: ["Haskell", "Clojure", "PHP"],
        favoriteEditor: "Emacs",
        hobbies: ["Swimming", "Biking", "Hiking"],
        hometown: {
            city: "New York",
            state: "NY",
        },
    },
    {
        username: "sam",
        email: "sam@test.com",
        yearsExperience: 8.2,
        favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
        favoriteEditor: "Atom",
        hobbies: ["Golf", "Cooking", "Archery"],
        hometown: {
            city: "Fargo",
            state: "SD",
        },
    },
    {
        username: "anne",
        email: "anne@test.com",
        yearsExperience: 4,
        favoriteLanguages: ["C#", "C++", "F#"],
        favoriteEditor: "Visual Studio Code",
        hobbies: ["Tennis", "Biking", "Archery"],
        hometown: {
            city: "Albany",
            state: "NY",
        },
    },
    {
        username: "david",
        email: "david@test.com",
        yearsExperience: 12.5,
        favoriteLanguages: ["JavaScript", "C#", "Swift"],
        favoriteEditor: "VS Code",
        hobbies: ["Volunteering", "Biking", "Coding"],
        hometown: {
            city: "Los Angeles",
            state: "CA",
        },
    },
];

function printEmails() {
    users.forEach(function (val) {
        // console.log(val);
        console.log(val.email);
    });
    // console.log(returnArr);
}
// * SOLVED
// printEmails();
// larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com
function printHobbies() {
    users.forEach(function (val) {
        let hobbie = val.hobbies;
        hobbie.forEach(function (val) {
            console.log(val);
        });
        // val.hobbies.
        // console.log(val.hobbies[val]);
    });
    // console.log(returnArr);
}
// * SOLVED
// printHobbies();

function findHometownByState(st) {
    let arr = [];
    users.filter(function (val) {
        if (st === val.hometown.state) {
            // console.log(users[2]);
            // console.log(users.indexOf(val));
            return val;
        }
    });
    console.log(arr[0]);
}
// * PARTIAL SOLVED
// findHometownByState("CA");
// function printHobbies() {
//     users.forEach(function (val) {
//         let hobbie = val.hometown;
//         hobbie.forEach(function (val) {
//             console.log(val);
//         });
//         // val.hobbies.
//         // console.log(val.hobbies[val]);
//     });
//     // console.log(returnArr);
// }
// console.log(users.hometown);

function allLanguages(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        newArr.push(val.favoriteLanguages);
    });
    let newArr2 = [];
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            if (newArr2.includes(newArr[i][j])) {
                continue;
            } else {
                newArr2.push(newArr[i][j]);
            }

            // console.log(newArr[i][j]);
        }
    }
    console.log(newArr2);
}
// ! SOLVED with FOR LOOPS NOT ITERATORS
// allLanguages(users);
function vowelCount(str) {
    let stri = [];
    for (let i = 0; i < str.length; i++) {
        stri.push(str[i]);
    }
    stri.reduce(function (acc, next) {
        if (next.includes("a", "e", "i", "o", "u")) {
            acc[next] = next;
        }
        console.log(acc);
        console.log(next);
    }, {});
}
vowelCount("incredible");
// {i:2, e: 2}
vowelCount("awesome");
// {a:1, e:2, o:1}
