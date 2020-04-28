var mongoose = require('mongoose'); 

var db = mongoose.connect('mongodb://172.17.0.3/study1', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}); 
return db; 


