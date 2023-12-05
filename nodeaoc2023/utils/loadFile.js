"use strict";
exports.__esModule = true;
var fs = require("fs");
var loadFile = function (path) {
    console.log('Loading file:', path);
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err) {
                console.error('Error:', err);
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};
exports["default"] = loadFile;
