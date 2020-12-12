var fs = require("fs");
var convertInputToArray = function (path) {
    return fs
        .readFileSync(__dirname + path, "utf8")
        .split("\n")
        .map(function (string) { return parseInt(string); });
};
console.log(convertInputToArray("/input.txt"));
