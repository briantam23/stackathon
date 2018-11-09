const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');


try {
    Object.assign(process.env, require('../.env'));
}
catch(ex) {
    console.log(ex);
}

app.use(require('body-parser').json());
app.engine('html', ejs.renderFile);
app.use('/public', express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.render(path.join(__dirname, '../public/index.html'), {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        AIR_QUALITY_INDEX_KEY: process.env.AIR_QUALITY_INDEX_KEY
    })
})



module.exports = app;