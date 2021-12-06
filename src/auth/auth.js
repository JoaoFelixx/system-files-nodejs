const { join, extname } = require('path')
const { randomUUID }  = require('crypto')
const multer = require('multer');

const storage = multer.diskStorage({

	destination: (req, file, callback) => {
		const destinationFolder = join(__dirname, '..', `uploads`);
		callback(null, destinationFolder);
	},

	filename: (req, file, callback) => {
		const fixedFileName = Date.now() + '-' + randomUUID();
		callback(null, file.fieldname + '-' + fixedFileName + extname(file.originalname));
	},

	fileFilter: (req, file, callback) => {

		const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(acceptedFormat => acceptedFormat === file.mimetype);

		if (isAccepted)
			return callback(null, true);
		
		return callback(null, false);
	}

});


module.exports = storage;