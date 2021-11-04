const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const $ = require("jquery")(window);

// $(document).ready(function () {
//     var mainElement = document.getElementById("main"); // THIS IS NOT GREAT!
// });
// $(document).ready(function () {
//     var $mainElement = $("#main"); // THIS IS MUCH BETTER!
// });
console.log(jQuery === $);
