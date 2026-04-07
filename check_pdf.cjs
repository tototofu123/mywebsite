const fs = require('fs');
const pdf = require('pdf-parse');

async function main() {
    try {
        let dataBuffer = fs.readFileSync('cv/Lai_Man_To_CV_Business-Development.pdf');
        let parse = pdf.default || pdf;
        let data = await parse(dataBuffer);
        console.log("PDF TEXT:\n\n", data.text);
    } catch(err) {
        console.error(err);
    }
}
main();
