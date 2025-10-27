const fs = require('fs/promises');
const path = require('path');

var fileCount;

const directory = path.join(__dirname, '../resources');

const numberOfFilesController = {
    numberOfFiles: async (req, res) => {
        if (fileCount == null) {
            console.log("Counting number of files for the first time");

            try {
                const entries = await fs.readdir(directory, { withFileTypes: true });

                fileCount = entries.filter(entry => entry.isFile()).length;

            } catch (err) {
                console.error(`Error reading directory: ${err.message}`);
                return res.status(500).json({ error: "Failed to read file directory." });
            }
        }

        res.json({ numberOfFiles: fileCount });
    }
}

module.exports = {
    nosController: numberOfFilesController
}