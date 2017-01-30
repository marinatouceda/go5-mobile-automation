const selectors = {
		
publicarContenido : '.actions .primary',
icon : '.icon',
date : '.posttex :nth-child(n) p time',
irAActividadSocial : '.content menu li:first-child a',
irAMiembros : '.content menu li:nth-child(2) a',

// postear, comentar, responder
textPost : '.postbox .at',
commentPost:'.posttext:nth-child(2) .commentsform fieldset label:nth-child(3) div',
textAreaPost : '.postbox fieldset:nth-child(1) label:nth-child(4) div', 
selectSpace : '.actions .optional em', // .at
viewMore : 'article .posttext:nth-child(2) button',

timefirstPost : '.posttext:nth-child(3) .socials p time',
clickReponseComment : '.posttext:nth-child(2) .comments .socials .link:nth-child(2)',
textResponseComment :'.posttext:nth-child(2) .commentsreplay label:nth-child(3) div',
showMoreComments : '.link showmore',

//Eliminar post

goToEliminarPost:'.posttext:nth-child(3) .btnoptions',
eliminarPost:'.posttext:nth-child(3) .active li:first-child a',

// Likes

likePost : '.posttext:nth-child(2) .socials .link:first-child',
likeFirstComment : '.posttext:nth-child(2) .commentsitem .socials .link:first-child',
likeReponseComment : '.posttext:nth-child(2) .commentsreplay .socials .link',
desplegarLikes : '.posttext:nth-child(3) .socials:nth-child(3) p a:nth-child(2)',
countsLikesFirstPost : '.posttext:nth-child(3) .socials p a',
countsLikesCommentFirstPost : '.posttext:nth-child(3) .commentsitem .socials a:nth-child(4)',
countsLikesResponseCommentFirstPost : '.posttext:nth-child(3) .commentsreplay .socials a:nth-child(3)',

// profiles
irAMuroEnPerfil : '.content menu li:first-child a',
irAlPerfilPost : '.posttext:nth-child(3) h2 a',
irAlPerfilWindowAside : '.likes li:first-child a:first-child',

// links
linkPost : '.igolink',
linkInputField : '.url input',
linkVerMas : '.posttext:nth-child(3) div:nth-child(2) .link',

// attachments

openloadFile : '.igoattach',
cameraOrPicturePost : '.igocamerawhite',
camera : '.igocamera',
subirFoto : '.postbox .menuoptions label:last-child',
abrirModalAdjuntarArchivo : '.igoattach',
selectImage :'.igopicturewhite',
loadImage : '.imgpost',

// Others
AB : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',

}

export default selectors;
