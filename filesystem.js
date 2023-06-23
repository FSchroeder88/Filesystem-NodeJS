let fs = require('fs');
let path = require('path');

let currentPath = '/home/florian/Dokumente/Weiterbildung/NodeJS/';

fs.readdir(currentPath, dirRead);

function dirRead(err, files) {
    console.log('Verzeichnis ausgelesen:' + currentPath);
    console.log(files);

    // Wiedergabe aller Dateitypen
    files.forEach(processFile);
}

// Funktion zum auslesen des Dateityps
function processFile(file) {
    let extname = path.extname(file);
    console.log('Extname is' + extname);

    //Und erstellen eines neuen Ordners mit verschieben der dazugehörigen Dateien
    fs.mkdir(currentPath + extname, function() {
        console.log('Ordner wurde erstellt.');

        fs.rename(currentPath + file , currentPath + extname + '/' + file, copySuccess);
    })
}

fs.mkdir(currentPath + '.txt', dirCreated);

function copySuccess() {
    comsole.log('Die Dateien wurde verschoben');
}