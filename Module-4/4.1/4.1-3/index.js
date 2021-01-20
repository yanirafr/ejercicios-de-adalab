const fs = require("fs");

const readFile = (originName, callback) => {
  fs.readFile(originName, "utf8", (err, data) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (outputName, outputContent, callback) => {
  fs.writeFile(outputName, outputContent, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      callback();
    }
  });
};

readFile("input-file.txt", (fileContent) => {
  console.log(fileContent);
  const newContent = JSON.stringify({
    originalContent: fileContent,
    changedContent: fileContent.toUpperCase(),
    textLenght: fileContent.length,
  });
  console.log(newContent);
  writeFile("./output-file.json", newContent, () => {
    console.log("Copied!");
  });
});
