const krypt = 'aaabbbcccdddeeefffaaabbbcccddd32'
const crypto = require('crypto');
const encrypt = (Password)=> {
    const IV = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv
    ('aes-256-ctr', Buffer.from(krypt), IV);
    const encryptedPassword = Buffer.concat
    ([cipher.update(Password), cipher.final()]);
    return {IV: IV.toString('hex'), 
    Password: encryptedPassword.toString('hex'),
    };
};

const decrypt = (Encryption)=> {
    const decipher = crypto.createDecipheriv
    ('aes-256-ctr', Buffer.from(krypt), 
    Buffer.from(Encryption.IV, 'hex'));
    const decryptedPassword = Buffer.concat
    ([decipher.update(Buffer.from(Encryption.Password, 'hex')),
    decipher.final(),
    ]);
    return decryptedPassword.toString()
};
module.exports = { encrypt, decrypt};