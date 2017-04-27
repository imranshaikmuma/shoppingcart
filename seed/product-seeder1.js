Skip to content
This repository
Search
Pull requests
Issues
Gist
 @imranshaikmuma
 Sign out
 Unwatch 1
  Star 0
  Fork 0 imranshaikmuma/shoppingcart
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Pulse  Graphs  Settings
Branch: master Find file Copy pathshoppingcart/seed/product-seeder.js
955c994  36 minutes ago
@imranshaikmuma imranshaikmuma Update product-seeder.js
1 contributor
RawBlameHistory     
58 lines (50 sloc)  1.33 KB
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
		imagePath:'https://st.hzcdn.com/simgs/3f2116ff0e272b55_4-2390/contemporary-bedroom.jpg',
		title:'Master bed',
		description:'Awesome bed',
		price:2000
}),
	new Product({
		imagePath:'http://buyersguide.caranddriver.com/media/assets/submodel/7835.jpg',
		title:'BMW',
		description:'Awesome car',
		price:120000
}),
	new Product({
		imagePath:'http://i.ndtvimg.com/i/2015-08/biryani_625x350_61438754497.jpg',
		title:'Food',
		description:'Awesome biryani',
		price:35
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

Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
