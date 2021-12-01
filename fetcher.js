const request = require("request");
const fs = require("fs");
// get args from terminal
let terminalArgs = process.argv.slice(2);
const url = terminalArgs[0];
const filePath = terminalArgs[1];

let htmlBody;
const requestHtml = function(url){
  request(url, (error, Response, body) => {
    console.log("error:", error);
    console.log("statusCode:", Response && Response.statusCode);
    htmlBody = body;
    //console.log(htmlBody)
    if (error !== null){
      console.log("Error html page could not be found");
      console.log("Writeing canceled due to error");
      process.exit();
    }
    writeHtml(filePath, htmlBody);
  });

}
requestHtml(url);

const writeHtml = function(filePath,html){
  
  fs.writeFile(filePath, html, err =>{
    if (err){
      console.error(err);
      return;
    }
    const bytes = html.length;
    console.log(`Downloaded and saved ${bytes} bytes to ${filePath}`);
  });
  
 
}






