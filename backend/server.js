const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000; 
const mongoose = require('mongoose');
const Players2 = require('./players.model');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')))
app.use(express.static('../client'));

mongoose.connect('mongodb://localhost/smastmain', {useNewUrlParser: true})

//alternative for connection code, would handle promise from connect method to console.log success message.
// .then(res => console.log('connected to MongoDB'))
// .catch(err => console.log('couldnt connect to Database senpai .-.'));



const connection = mongoose.connection;
connection.once('open', function(){
    console.log('connected successfuly to MongoDB :)')
})

// let string = path.resolve(__dirname, '../client/index.html')

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
    // res.send(path.resolve(__dirname, '../client/index.html'))
})


//create Router to handle localhost3000/smast requests
const smastRoutes = express.Router();
app.use('/smastmain', smastRoutes);

//get by id 
smastRoutes.get('/:name', (req, res) => {
    //grab name from params
    let query = req.params.name;
    Players2.findOne({name: query}, (err, doc) => {
        if (err) console.log('Internal error');
        else if (!doc) console.log('Semimase, we cant find what you re looking for :/');
        else res.json(doc);
    })
});

// smastRoutes.post('/add', (req, res) => {
//     let player = new Players2(req.body);
//     player.save()
//           .then(player => {
//               res.status(200).json({'player': 'player added successfuly'});
//           })
//           .catch(err => res.status(400).send('FAIL: could not add player'));
// });

smastRoutes.post('/add', (req, res) => {
    let newName = req.body.name
    Players2.create({
        name: newName
    }, (err, doc) => {
        if (err) res.status(418).send('internal Database error, did not add player')
        else res.json(doc);
    })
});

smastRoutes.delete('/delete/:name', (req, res) => {
    let query = {name: req.params.name}; 
    Players2.findOneAndDelete(query, (err, doc) => {
        if (err) res.status(403).send('Internal Database error, could not delete player')
        else if (!doc) res.status(403).send('Could not find player in Database');
        else res.status(200).send(`player ${query} deleted`);
    });
});


    
app.listen(PORT, function(){
    console.log('.-. server listening to PORT ', PORT);
})
