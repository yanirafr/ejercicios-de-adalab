const fs = require("fs");

const text = "Holi chiques";

const fileContent = JSON.stringify({
  originalContent: text,
  changedContent: text.toUpperCase(),
  textLenght: text.length,
});

console.log(fileContent);

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Saved!");
  }
};

fs.writeFile("./holi.txt", fileContent, handleWriteFile);
