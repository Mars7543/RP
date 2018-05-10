const express = require('express'),
      app     = express();

// app config
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));

// route config
const indexRoutes = require('./routes');
const routineRoutes = require('./routes/routines/routine');

app.use('/', indexRoutes);
app.use('/', routineRoutes);

// run server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
