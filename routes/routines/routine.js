const express  = require('express'),
      router   = express.Router();

router.get('/routines', (req, res) => {
   res.render('routines/index.ejs');
});

module.exports = router;
