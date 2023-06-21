let fs = require('fs');

let currentPath = '/home/florian/Dokumente/Weiterbildung/NodeJS/';

fs.readdir(currentPath, dirRead);

function dirRead(err, files) {
    console.log('Verzeichnis ausgelesen:' + currentPath)
    console.log(files);
}

fs.mkdir(currentPath + '.txt', dirCreated);

function dirCreated() {
    console.log('Ordner wurde erstellt.');

    fs.rename(currentPath + 'test.txt', currentPath + '.txt/test.txt', copySuccess);
}

function copySuccess() {
    comsole.log('Die Datei wurde verschoben')
}