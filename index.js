////////////// BIENVENUE SUR UTERM-JS !
////////////// VOUS POUVEZ MODIFIER LE CODE, MAIS MERCI DE CITER MON NOM !


////////////////////////
// ## CONFIGURATION ##
////////////////////////






////////////////////////
// ## MODULES ##
// (a ne pas modifier de pref)
////////////////////////

const term = require( 'terminal-kit' ).terminal ;


/////////////////////////
// ## debut de la misère

/////////////////////////



function terminate() {
	term.grabInput( false ) ;
	setTimeout( function() { process.exit() } , 100 ) ;
}

term.grabInput( { mouse: 'button' } ) ;

term.on( 'key' , function( name , matches , data ) {

	if ( name === 'CTRL_C' ) { terminate() ; }
} ) ;
shellroot()
function shellroot() {
	term('\nshell>')
term.inputField( function( error , response)
	{
        if (!response) {
            term.red('\nSpecify a command or write help !')

			shellroot()
        } else if (response === "help") {
			term.brightBlue('\n┌─────────────────────────────────────────────────────────┐\n')
			term.brightBlue('│ whoisip <ip> | Informations about ip from ripe database │\n')
			term.brightBlue('│ SOON                                                    │')
			term.brightBlue('\n└─────────────────────────────────────────────────────────┘\n')
			shellroot()
		} else if (response === "whoisip") {
			console.log('%s', response)
			shellroot()
		}
		
		
		else {
			term.red('\nInvalid command ')

			shellroot()
		}
    }) ;
}