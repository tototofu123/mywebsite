import fs from 'fs';
import pdf from 'pdf-parse';

async function main() {
    try {
        let dataBuffer = fs.readFileSync('cv/Lai_Man_To_CV_Business-Development.pdf');
        let data = await pdf(dataBuffer);
        console.log(data.text);
    } catch(err) {
        console.error(err);
    }
}
main();
