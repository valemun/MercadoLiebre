const express = require( "express" );
const path = require( "path" );

const app = express();

const publicPath = path.resolve( "public" );
app.use( express.static( publicPath ));

app.listen( process.env.PORT || 3000, () =>{
   console.log( "Servidor corriendo en puerto" );
});

app.get( "/", (req, res) => {
    res.sendFile( path.resolve( "views/index.html" ));
})

app.get( "/register", (req, res) => {
    res.sendFile( path.resolve( "views/register.html" ));
})

app.get( "/login", (req, res) => {
    res.sendFile( path.resolve( "views/login.html" ));
})