import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    { message : "type your image",
        name : "url" }
  ])
  .then((answers) => {
    const url = answers.url;
    const qrSvg = qr.image(url);
    qrSvg.pipe(fs.createWriteStream("qr-image.png"));
    fs.writeFile("message.txt",url,(err) => {
        if(err) throw err
        console.log("the file have been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Inquirer could not display the prompt in this terminal.");
      console.error("Please run the program in a normal terminal like PowerShell or Command Prompt.");
    } else {
      console.error("Something went wrong:", error.message);
    }
  });
