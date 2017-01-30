const selectors = {
	goToBulk :'.open .title .admin li:nth-child(3) a',
	inputFile : '.active .inside.massive input',
	export :'.export',
	downloadTemplate :'.importone',
	uploadFile : '.active .primary',
	downloadTemplateWithUsers:'.importall',
	nameFileLoaded:'.tables tbody tr:nth-child(1) td:nth-child(3)',
	messageInvalidFile :'.tables tbody tr:nth-child(1) td:nth-child(6)',
}
export  default selectors ;
