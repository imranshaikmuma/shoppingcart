var Product = require('../models/product');
var mongoose =require('mongoose');
var db;
var config = {
      "USER"    : "",           
      "PASS"    : "",
      "HOST"    : "ec2-34-209-113-86.us-west-2.compute.amazonaws.com",  
      "PORT"    : "27017", 
      "DATABASE" : "shopping"
    };
var dbPath  = "mongodb://"+config.USER + ":"+
    config.PASS + "@"+
    config.HOST + ":"+
    config.PORT + "/"+
    config.DATABASE;
var standardGreeting = 'Hello World!';

mongoose.connect(dbPath);
//mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath:'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-6s-colors.jpg',
		title:'I Phone 7 plus',
		description:'Awesome phone',
		price:700
}),
	new Product({
		imagePath:'http://68.media.tumblr.com/c29516f66e665ca492886713fefd3092/tumblr_n2xjc7W4A31qa6obyo2_1280.jpg',
		title:'The wolf of wall street',
		description:'Awesome movie',
		price:99
}),
	new Product({
		imagePath:'https://static.sportskeeda.com/wp-content/uploads/2016/07/cricket-1469195007.jpg',
		title:'Cricket',
		description:'Awesome game',
		price:150
})
];

var done=0;
for (var i=0;i< products.length;i++){
		products[i].save(function(err, result){
			done++;
			if (done==products.length){
				exit();
			}
		});
}



function exit(){
	mongoose.disconnect();
}

