const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/UserModel');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/MERN');

app.post('/createUser', async(req, res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    res.json({
        data: user,
        status: res?.statusCode
    })
    await newUser.save(user);
})

app.get('/getAllUser', (req, res) => {
    UserModel.find({}).then((users) => {
            res.json({
                message: 'success',
                data: users,
                status: res?.statusCode
            })
        }
    )
})

const port = 3000;
app.listen(port, () => {
    console.log('server started on port ', port);
});