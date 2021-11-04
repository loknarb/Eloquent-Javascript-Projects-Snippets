let myModule = require("./data");
let songs = myModule.songs;
// console.log(songs);

function listNames(arr) {
    arr.forEach(function (val) {
        console.log(val.name);
    });
}
// * SOLVED
// listNames(songs);

function listSongDetails(arr) {
    arr.forEach(function (val) {
        console.log(
            val.name + "," + val.artist + " " + "(" + val.duration + ")"
        );
    });
}
// * SOLVED
// listSongDetails(songs);
function summerJamCount(arr) {
    let count = 0;
    arr.forEach(function (val) {
        let bob = val.month;
        // console.log(val.month);
        if (bob.indexOf(6)) {
            ++count;
        }
    });
    console.log(count);
}
// ! FAILED solution was conditiononal if (song.month >= 6 && song.month <= 8) {
// ! summerJamCount(songs);
function getDurations(arr) {
    return arr.map(function (val) {
        return val.duration;
    });
}
// * SOLVED
// console.log(getDurations(songs));
function getDurations(arr) {
    return arr.map(function (val) {
        let a = val.duration.split(":");
        let b = a[0] + a[1];
        return b * 0.6;
    });
}
// * SOLVED using split(":")
// console.log(getDurations(songs));
function getMainArtists(arr) {
    return arr.map(function (val) {
        if (val.artist.includes("featuring")) {
            return val.artist.split("featuring", 1)[0];
        } else {
            return val.artist;
        }
    });
}
// * SOLVED with help of val.artist.split("featuring", 1)[0];
// console.log(getMainArtists(songs));
// my_string = "hello python world , i'm a beginner ";
// console.log(my_string.split("world", 1)[0]);
function getBigHits(arr) {
    return arr.filter(function (val) {
        return val.weeksAtNumberOne > 10;
    });
}
// * SOLVED
// console.log(getBigHits(songs));
function getShortSongs(arr) {
    return arr.filter(function (val) {
        return val.duration[0] < 3;
    });
}
//  ! YOUVE BEEN DOING IT THE WRONG WAY IT SHOULD RETURN WITH NO IFS OR IF NOTS
// * SOLVED
// console.log(getShortSongs(songs));

function getSongsByArtist(arr, str) {
    return arr.filter(function (val) {
        return val.artist.includes(str);
    });
}
// * MUCH BETTER
// * SOLVED
// console.log(getSongsByArtist(songs, "Mariah Carey"));
function reduceSummerJamCount(arr) {
    return arr.reduce(function (count, song) {
        if (song.month >= 6 && song.month <= 8) {
            count++;
        }
        return count;
    }, 0);
}
// ! FAILED didn't use return arr.reduce and didn't think to use count in substitute for acc
// console.log(reduceSummerJamCount(songs));
function getTotalDurationInSeconds(arr) {
    return arr.reduce(function (count, song) {
        let splitTime = song.duration.split(":");
        let timeSeconds = (splitTime[0] + splitTime[1]) * 0.6;
        return count + timeSeconds;
    }, 0);
}
// * SOLVED WE RETURNED ARRAY THEN ADDED IT TO ITSELF
// console.log(getTotalDurationInSeconds(songs));

function getSongCountByArtist(arr) {
    return arr.reduce(function (count, song) {
        if (count[song.artist]) {
            count[song.artist]++;
        } else {
            count[song.artist] = 1;
        }
        return count;
    }, {});
}
// ! FAILED DIDN'T USE RETURN// DIDN'T KNOW THAT COUNT[SONG.ARTIST] WOULD SEARCH OBJ//
// ! DIDN'T KNOW SETTING INITIAL VALUE THEN ++ ON OBJECT WOULD COUNT TO VALUE AND NOT OBJECT
// console.log(getSongCountByArtist(songs));
function averageWeeksAtNumberOne(arr) {
    let count = 1;
    let total = 0;
    return (
        arr.reduce(function (avg, song) {
            // console.log(song.weeksAtNumberOne);
            // console.log(count);
            // console.log(avg);
            // console.log(song.weeksAtNumberOne);
            // total += song.weeksAtNumberOne;
            // count++;
            // if (arr.length == count) {
            //     return total / count++;
            // }
            return avg + song.weeksAtNumberOne;
        }, 0) / arr.length
    );
}
// !FAILED, FORGOT RETURN ARRAY AGAIN OVERCOMPLICATED FUNCTION WITH SIMPLY SOLUTION
// ! ALL I NEEDED TO DO WAS TO ALLOW REDUCE FUNCTION TO FINISH ADDING, THEN FINALLY DIVIDE THE FUNCTIONS STRING BY THE LENGTH OF THE ARRAY :\ UPSET ABOUT THIS
// console.log(averageWeeksAtNumberOne(songs));
