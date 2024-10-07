import { createServer } from 'node:http';
import getpage from './Pages/getpage.js';
import { IncomingForm } from 'formidable';
import { log } from 'node:console';
import { dataHtml } from './Pages/userdata/UserData.js';
import { copyFile, rm, existsSync, mkdir } from 'node:fs';
import { join } from 'node:path';

createServer((req, res) => {
    if (req.method === "POST") {
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.end(dataHtml("Error"));
            } else {
                log("Fields:", fields);
                log("File:", files.userfile[0].originalFilename);

                const fileSrcName = files.userfile[0].originalFilename; // File name
                const tempFilePath = files.userfile[0].filepath; // Temp file path
                const uploadDir = 'upload';
                const destinationPath = join(uploadDir, fileSrcName); // Correct path for saving

                // Ensure 'upload' folder exists, then handle the file
                if (!existsSync(uploadDir)) {
                    log("Folder not found, creating...");
                    mkdir(uploadDir, { recursive: true }, (mkdirErr) => {
                        if (mkdirErr) {
                            log("Error creating folder:", mkdirErr);
                            res.end(dataHtml("Folder creation failed"));
                            return;
                        }
                        handleFileUpload(tempFilePath, destinationPath, res);
                    });
                } else {
                    handleFileUpload(tempFilePath, destinationPath, res);
                }
            }
        });
    } else if (req.method === "GET") {
        res.end(getpage());
    }
}).listen(4000, () => {
    console.log("Server is running on port 4000");
});

// Function to handle file upload
function handleFileUpload(tempFilePath, destinationPath, res) {
    // Copy the file to the 'upload' directory
    copyFile(tempFilePath, destinationPath, (copyErr) => {
        if (copyErr) {
            log("Error copying file:", copyErr);
            res.end(dataHtml("File upload failed"));
        } else {
            log(`File uploaded successfully to: ${destinationPath}`);

            // Remove the temp file after copying
            rm(tempFilePath, (rmErr) => {
                if (rmErr) {
                    log("Error deleting temp file:", rmErr);
                } else {
                    log("Temp file deleted");
                }
            });

            res.end(dataHtml("ok"));
        }
    });
}
