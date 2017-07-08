var express = require('express');

var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var ObjectID = require('mongodb').ObjectID;
  
var db = require('./../db').db();

var urls = require('../config');
 
var url = urls.url; 

var bcrypt = require('bcrypt');




// addmahal
router.post('/addmahal',function(req,res,next){
res.setHeader('Content-Type', 'application/json')
var task = req.body;
var mahalname = req.body['mahalname'];
var password = req.body['password'];
var email = req.body['email'];
var mahalcode = req.body['mahalcode'];
var address = req.body['address'];
var phone = req.body['phone'];
var pincode = req.body['pincode'];
var alternatenumber = req.body['alternatenumber'];
 var mahalstatus = req.body['mahalstatus'];


if((!task.mahalcode) || (!task.mahalname)|| (!task.pincode)|| (!task.phone)|| (!task.password)|| (!task.alternatenumber)||(!task.address))
{

res.status(400)
res.json({
    "error":"bad data"}


)
}else{


bcrypt.hash(password, 11, function (err, hash) {
                    
                  

db.collection('users').findOne({mahalcode: mahalcode}, function (err, user) {
            if(user) {
                res.send("Username is already taken", 422)
            }else{

  db.collection('users').save({mahalstatus:mahalstatus,mahalname: mahalname, password: hash , mahalcode : mahalcode,email:email,address:address,phone:phone,pincode:pincode,usertype:2,alternatenumber:alternatenumber} ,function (err, results) {
    if (err) throw err

    res.json(results);
    
  })
            }
})
  })

 }

});



// get mahal data
router.get('/getmahal',function(req,res,next){
    // find everything 
db.collection('users').find({usertype:2}).toArray(function (err, result) {
    if (err) throw err

    res.json(result);
      })
});



// single mahal data
router.get('/getmahal/:id',function(req,res,next){
    // find everything 




  db.collection('users').findOne({_id: ObjectID(req.params.id)} ,function (err, results) {
    if (err) throw err

    res.json(results);
    
  })


});

// update mahal

router.put('/updatemahal/:id',function(req,res,next){

var task = req.body;

var mahalname = req.body['mahalname'];
var password = req.body['password'];
var email = req.body['email'];
var mahalcode = req.body['mahalcode'];
var address = req.body['address'];
var phone = req.body['phone'];
var pincode = req.body['pincode'];
var alternatenumber = req.body['alternatenumber'];
var mahalstatus = req.body['mahalstatus'];

if((!task.mahalcode) || (!task.mahalname)|| (!task.pincode)|| (!task.phone)|| (!task.password)|| (!task.alternatenumber)||(!task.address))
{
res.status(400)
res.json({
"error":"Bad data"
}
)
}else{

bcrypt.hash(password, 11, function (err, hash) {


  db.collection('users').update({_id: ObjectID(req.params.id)},{$set:{mahalstatus:mahalstatus,mahalname: mahalname, password: hash , mahalcode : mahalcode,email:email,address:address,phone:phone,pincode:pincode,usertype:2,alternatenumber:alternatenumber}} ,function (err, results) {
    if (err) throw err

    res.json(results);
    
  })
})

}

});


// delete mahal
router.delete('/removemahal/:id',function(req,res,next){
    // find everything 




  db.collection('users').remove({_id: ObjectID(req.params.id)} ,function (err, results) {
    if (err) throw err

    res.json(results);
    
  })


});


// update password

router.put('/updatepassword',function(req,res,next){

var task = req.body;
var password = req.body['password'];
var oldpassword=req.body['oldpassword'];
var username = req.body['name'];
if( (!task.password)||(!task.oldpassword)||(!task.name))
{
res.status(400)
res.json({
"error":"Bad data"
}
)
}else{
 
       


bcrypt.hash(password, 11, function (err, hash) {

 db.collection('users').findOne({username: username}, function (err, userdata) {
        // if (err) throw err
    //  res.json(userdata);

    
     
     bcrypt.compare(oldpassword, userdata.password, function(err, respons) {
     
     if(respons){
     db.collection('users').update({username:username},{$set:{ password: hash}} ,function (err, results) {
     if (err) throw err
     res.status(200);
     res.json('{success : true}');
    
     
    
        })
     }else{
       res.status(400);
     res.json('{Error : invalid data}');
     }
     
})
  })

  })
}
});


module.exports = router;