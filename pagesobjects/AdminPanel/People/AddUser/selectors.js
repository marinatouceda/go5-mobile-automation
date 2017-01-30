const selectors =  {

	estadoActivado : '.statedata label:nth-child(2) input:nth-child(1)',
	estadoDesactivado : '.statedata label:nth-child(2) input:nth-child(2)',
	bloquearAcceso : '.statedata label:nth-child(3) input',

	inputName : '.primarydata label:nth-child(1) input',
	inputLastname : '.primarydata label:nth-child(2) input',
	inputEmail : '.primarydata label:nth-child(3) input',
	selectRol : '.primarydata label:nth-child(4) select',

	desplegarCampos  : '.addpeople fieldset.last .link',
	saveUser : '.addpeople fieldset.last .primary',
	agregarPersonaSinInvitacion : '.addpeople fieldset.last .optional',


	personas : '.tables',
	groupsSelect  : '.groupsdata select',

	// Datos Laborales

	idEmpleado  : '.labordata label:nth-child(1) input',
	fechaIngreso  :  '.labordata label:nth-child(2) input',
	tipoEmpleo   : '.labordata label:nth-child(3) select',
	titulo   : '.labordata label:nth-child(4) select',
	abrirReportaA  : '.labordata label:nth-child(5) ',
	listaReportaA  : '.list li:nth-child(n)',
	telFijoLaboral : '.labordata label:nth-child(7) input',
	telMovilLaboral : '.labordata label:nth-child(8) input',
	direccionLaboral : '.labordata label:nth-child(9) input',

	// Datos Personales

	tipoDocumento  : '.personaldata label:nth-child(1) select',
	documento  : '.personaldata label:nth-child(2) input',
	fechaNacimiento  :'.personaldata label:nth-child(3) input',
	genero  :'.personaldata label:nth-child(4) select',
	estadoCivil : '.personaldata label:nth-child(5) select',
	mailPersonal : '.personaldata label:nth-child(6) input',
	telefonoFIjo : '.personaldata label:nth-child(7) input',
	telefonoMovil :  '.personaldata label:nth-child(8) input',
	direccionPersonal : '.personaldata label:nth-child(9) input',

	// Modales

	clickayudaEstadoPersona : 'basicdata label:nth-child(1) a',
	modalEstadoPersona : '#modal-container .modal:nth-child(4) h2',
	cerrarModal : '#modal-container .modal:nth-child(4) .close',
	clickmodalBloquearAcceso : '.basicdata label:nth-child(3) a',
	modalBloquearAcceso :  '#modal-container .modal:nth-child(6) h2',
	okEntendidoModal : '#modal-container .modal:nth-child(6) .primary',

}
export  default selectors ;
