const express = require('express');
const app = express();
const PORT = 3017;
const mysql = require('mysql');
const cors = require('cors');
const {encrypt, decrypt} = require('./Encryption');
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TheFlash17', 
    database: 'passwordwallet',
});

app.listen(PORT, () => {
    console.log('Server is Running Successfully');
})

app.post('/addpassword', (req, res) => {
    const { Password, Website } = req.body;
    const HashedPassword = encrypt(Password);
    db.query('INSERT INTO Passwords (Password, Website, IV) VALUES (?,?,?)',
        [HashedPassword.Password, Website, HashedPassword.IV],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Password added Successfully');
            }
        }
    );
});

app.post('/decryptpassword', (req, res) => {
    res.send(decrypt(req.body));
});

app.get('/showpasswords', (req, res) => {
    db.query('SELECT * FROM Passwords;', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
