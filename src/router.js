const express   = require('express'); 
const router    = express.Router();
const { saveFiles } = require('./useCases');

router.post('/upload', saveFiles);

module.exports = router;