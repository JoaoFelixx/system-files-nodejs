const multer  = require('multer');
const storage = require('../auth/auth');
const upload  = multer({ storage: storage });

exports.renderIndex = (req, res) => res.render('../views/index');

exports.sendFile = upload.single('file'), (req, res) =>  res.send('sucesso no upload');