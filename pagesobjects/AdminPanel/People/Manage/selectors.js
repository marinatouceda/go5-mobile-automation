const selectors = {
	
	manage :'.open .title .admin li:nth-child(1) a',
	pendingInvitations : '.title .admin li:nth-child(2) a',
	addUser : '.first label:first-child a ',
	btnSearch : '.btnsearch',
	inputSearch : '.search-input',
	people :'.title .admin li:first-child a ',
	peopleList : '.tables',
	editFirstRow : '.tables tbody tr:nth-child(1) td:nth-child(6) a',
	inputName : '.addpeople .primarydata label:first-child input',
	inputLastName :'.addpeople .primarydata label:nth-child(2) input',
 	firstName :'.tables tbody tr:nth-child(1) td:nth-child(2) a',
 	lastName :'.tables tbody tr:nth-child(10) td:nth-child(2) a',
 	saveEditUser : '.addpeople .primary'
}
export  default selectors ;
