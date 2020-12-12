const fs = require("fs");

const convertInputToArray = (path: string): number[] => {
  return fs
    .readFileSync(__dirname + path, "utf8")
    .split("\n")
    .map((string: string) => parseInt(string));
};

const arr = convertInputToArray("/index.txt");
