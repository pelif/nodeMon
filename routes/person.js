var express = require('express'); 
var router = express.Router(); 
var Person = require('./../models/person'); 

//find all
router.get('/', (req, res) => {
    Person.find({}, function(err, people) {
        if(err) {
            return; 
        }
        res.send(people); 
    }); 
}); 

//findOne
router.get('/:id', (req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if(err) {
            return; 
        }
        res.send(person); 
    }); 
    
    // Person.findOne({
    //     _id: req.params.id
    // }, (err, person) => {
    //     if(err) {
    //         return; 
    //     }
    //     res.send(person); 
    // }); 
}); 

module.exports = router; 