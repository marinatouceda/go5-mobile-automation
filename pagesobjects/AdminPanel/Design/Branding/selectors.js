const selectors = {
	
	header  :  'header h1',
	resetInterface : '.restores.link',
	goToRestablecerInterfaz  :  '.design fieldset:nth-child(5) a',
	confirmarInterfaz  :  '.active .primary',
	cancelarInterfaz  :  '.active .optional',
	save  :  '.design fieldset:nth-child(5) .primary',

	// Platform Logo

	logo :'logoFileDrop',
	loadLogoPicture : 'logoFilePicker',	

	confimar  :  '.active .mconfirmation .primary',

	// Platform Colors

	colorPicker  :  '#designColorPicker',
	colorPlataformaRojo :  '.design .colorpicker .red',
	colorRojoHexa :  'rgba(255, 51, 51, 1)',
	colorPlataformaVerde  :  '.design .colorpicker .green',
	colorPlataformaYellow  :  '.design .colorpicker .yellow',

	// Text Contrast Colors

	sample  :  '.design fieldset:nth-child(3) .sample',
	colorNegroContraste  :  '.design fieldset:nth-child(3) .black',
	colorNegroHexa :  'rgba(0, 0, 0, 1)',
	getColorNegro  :  '.design fieldset:nth-child(3) .colorpicker .black a',
	colorBlancoContraste  :  '.design fieldset:nth-child(3) .white',

	// Background Image

	backgroundPicture :  'loginBgFilePicker',

}
export default selectors;