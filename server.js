const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Express to use .html files as EJS templates
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));


// Route for the home page
app.get('/', (req, res) => {
    let courses = ['c/c++', "python", "java"]
    res.render('form.html',{courses});
    
    
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
