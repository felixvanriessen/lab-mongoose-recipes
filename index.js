const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// Recipe
//   .create()
//   .then(lalala=>{
//     console.log('created database')
//   })
//   .catch(err=>{console.log(err)})

// Recipe
//   .insertMany(data)
//   .then(arr=>{
//     for (let i=0; i<arr.length; i++){
//       console.log(arr[i].title)
//     }
//   })
//   .catch(err=>{console.log(err)})

// Recipe
//   .findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration:100})
//   .then(mmm=>{
//     console.log('Update Succesful!')
//   })
//   .catch(err=>{console.log(err)})

// Recipe
//   .remove({title:'Carrot Cake'})
//   .then(beepbop=>{
//     console.log('Deletion Succesful!')
//   })
//   .catch(err=>{console.log(err)})

mongoose
  .connection.close()
  .then(beepbop=>{
    console.log('Connection CLOSED!')
  })
  .catch(err=>{console.log(err)})