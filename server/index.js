const PORT = process.env.PORT || 3000;

require('./app').listen(PORT, () => console.log(`


    Listening on PORT ${PORT}!
    http://localhost:${PORT}/


`))