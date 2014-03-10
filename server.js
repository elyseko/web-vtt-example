var express = require( 'express' );
var app = express();

app.use( express.methodOverride() );
app.use( express.bodyParser() );
app.use( express.static( __dirname ) );
app.use( express.errorHandler( {
	dumpExceptions: true,
	showStack: true
} ) );
app.use( app.router );

app.get( '/', function( req, res ) {
	res.redirect( 'src/sindex.html' );
} );

app.listen( 3000 );