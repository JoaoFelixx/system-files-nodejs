const express 		= require('express'); 
const router  	    = express.Router();
const controllers   = require('../controllers/controllers');

router.get('/', 		controllers.renderIndex);
router.get('/success',  controllers.sucessUpload);
router.post('/upload',  controllers.sendFile);

module.exports = router;