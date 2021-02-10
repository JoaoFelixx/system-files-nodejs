const path   = require('path');  
const multer = require('multer');


let storage = multer.diskStorage({
             
    	destination: (req, file, callback) => {
      		const destinationFolder = `uploads/`;
        	callback(null, destinationFolder);
    	},
           
    	filename: (req, file, callback) => {   
       		const fixedFileName = Date.now() + '-' + Math.round(Math.random() * 1E9);
      	 	callback(null, file.fieldname + '-' + fixedFileName);

    	},
  	
	
    	fileFilter: (req, file, callback) => {
        
        	const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find( acceptedFormat => acceptedFormat === file.mimetype);

       	 		if(isAccepted)
            		return callback(null, true);
       			else
            		return callback(null, false);
        }

});
    

module.exports = storage;