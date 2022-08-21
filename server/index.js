//https://fullstacksoup.blog/2021/11/04/next-js-upload-image-to-public-folder/
import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

var mv = require('mv');
export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm()

        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            let oldPath = files.file.filepath;
            let name = files.file.originalFilename;
            
            //https://www.programiz.com/javascript/examples/generate-random-strings#:~:text=random()%20method%20is%20used,a%20random%20character%20is%20generated.
            let rnd = "_" + Math.random().toString(36).substring(2,7);
            let parts = name.split(".");
            name = parts[0] + rnd + parts[1];

            let newPath = `./public/uploads/${name}`;
            mv(oldPath, newPath, (err) => {});
            res.status(200).json({status: "ok", filename: name})
        })
    })
}