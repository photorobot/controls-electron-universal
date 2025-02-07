"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha = void 0;
const fs = require("fs-extra");
const crypto = require("crypto");
const debug_1 = require("./debug");
const sha = async (filePath) => {
    (0, debug_1.d)('hashing', filePath);
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(hash);
    await new Promise((resolve, reject) => {
        fileStream.on('end', resolve);
        fileStream.on('error', (err) => reject(err));
    });
    return hash.read();
};
exports.sha = sha;
//# sourceMappingURL=sha.js.map