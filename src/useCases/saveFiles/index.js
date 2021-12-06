const multer  = require('multer');
const storage = require('../../auth/auth');
const upload  = multer({ storage: storage });

exports.saveFiles = upload.single('file'), (request, response) => {
  try {
    response.status(200).json({ result: 'upload successful'});
  } catch (err) {
    console.error(err)
  }
};