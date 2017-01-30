
 const selectors = {

	//   Define Space
	createSpace:'.igospaces a',
	general  : '.igoconfigurationwhite',
	nombreEspacio  : '.first label:nth-child(1) input',
	descripcionEspacio  : '.first label:nth-child(2) input',
	// Admins
	admins  : '.igoadminwhite',
	listaAdmin  : '.open .list',
	// Personas
	personas  : '.igouserwhite',
	addPersona :'.btnaction',
	searchPersona :'.active .search input',
	primerPersonaLista :'.active li:first-child a',
	listaPersonas  : '.open .list',
	// Grupos
	grupos  : '.igousergroupwhite',
	listaGrupos  : '.open .list',
	// Space type
	espacioPublico  : '.type label:nth-child(3) input',
	espacioPrivado  : '.type label:nth-child(4) input',
	espacioEmpresa  : '.type label:nth-child(2) input',
	activarEspacio  : '.config label:nth-child(2) .active',
	activadadSocial  : '.config label:nth-child(3) span',
	// Icons
	cambiarIcono  : '.igopuzzle',
	iconoOso  : '.igospacebear',
	iconoBasket  : '.igospacebasket',
	iconoBanana  : '.igospacebanana',
	grabarIcono  : '.active .mconfirmation .primary',
	// Save Space
	grabarEspacio  : '.spacecreate .primary',
	grabarEspacioEmpresaInactivo  : '.active .mconfirmation .optional',
	//Space already created
	spaceCreated:'.postbox'
}
export default selectors;
