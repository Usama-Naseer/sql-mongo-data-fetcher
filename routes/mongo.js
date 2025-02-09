const express = require('express');
const router = express.Router();
// var MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require("mongodb");
const client = require("../utils/mongo_con");


 router.get('/users', async (req,res,next) => {
    try {
        
       console.log(req.query);
        const database = client.db('fyp');
        const colletion = database.collection('users');
        const findResult = await colletion.find({}).limit(parseInt(
        req.query['limit'])).toArray();
        res.send(findResult);
        client.close;
      }catch(err){
        console.log(err.message);
      }
    }

);
router.get('/orders', async (req,res,next) => {
  try {

      
      const database = client.db('fyp');
      const colletion = database.collection('orders');
      const findResult = await colletion.find({}).limit(
        parseInt(
          req.query['limit'])
      ).toArray();
      res.send(findResult);
    } catch(err){
      console.log(err.message);
    } 
  }

);
router.get('/menu', async (req,res,next) => {
  try {
      
      const database = client.db('fyp');
      const colletion = database.collection('menu');
      const findResult = await colletion.find({}).limit(
        parseInt(
          req.query['limit'])
      ).toArray();
      res.send(findResult);
    } catch(err){
      console.log(err.message);
    } 
  }

);
router.get('/food', async (req,res,next) => {
  try {
      
      const database = client.db('fyp');
      const colletion = database.collection('food');
      const findResult = await colletion.find({}).limit(
        parseInt(
          req.query['limit'])

      ).toArray();
      res.send(findResult);
    } catch(err){
      console.log(err.message);
    } 
  }

);
router.get('/test',(req,res,next)=>{

  res.send({
   "hello":"MONGO"
  });

});
router.get('/restaurant', async (req,res,next) => {
  try {
      
      const database = client.db('fyp');
      const colletion = database.collection('restaurant');
      const findResult = await colletion.find({}).limit(
        parseInt(
          req.query['limit'])

      ).toArray();
      res.send(findResult);
    } catch(err){
      console.log(err.message);
    } 
  }

);

router.get('/search/:table', async (req,res,next) => {
  try {
      console.log(req.params.table);
      const database = client.db('fyp');
      const collection = database.collection(req.params.table);
      const findResult = await collection.find(req.params.table=='orders'?{
        "id": parseInt(req.query['id'])
      } :req.query).toArray();
      res.send(findResult);
    } catch(err){
      console.log(err.message);
    } 
  }

);
router.post('/addUser', async (req,res,next) => {
  try {
      console.log(req.params.table);
      const database = client.db('fyp');
      const users = database.collection('users');
       await users.insertMany([
        {
          "id": req.body['_id'],
          "user_id": req.body['_id'],
          "name": req.body['name'],
          "email": req.body['email'],
          "password": "NKz0fWDh!5",
          "Age": 25,
          "Gender": req.body['Gender'],
          "Marital Status": "Single",
          "Occupation": "Student",
          "Monthly Income": "No Income",
          "Educational Qualifications": "Post Graduate",
          "Family size": req.body['Family size']
      },
      ])
      res.statusCode=200;
      res.send({
        'success': true
      });
    }catch(err){
      res.statusCode=200;
      res.send({
        'success': false,
        "error":err.message,
      });
    } 
  }

);


module.exports = router;