import Selectors from './selectors';
import BasePage from '../BasePage';
import {By,Key} from 'selenium-webdriver';
import path from 'path';
import sleepPromise from '../../utils/sleep';

class Social extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	goToHome () {
		return this.goTo(Selectors.home);
	}

	goToUserMenu (){
		//return this.driver.findElement(By.css(Selectors.userMenu)).click();
		return this.clickear(Selectors.userMenu)
		.then (() => {
			 return this.waitForDisplayed (Selectors.nameUser,2000)
			});
	}

	goToSocial () {
		return this.clickear(Selectors.irAActividadSocial)
	}

	goToSelectSpace () {
		return this.clickear(Selectors.selectSpace)
	}

	goToViewMore () {
		return this.clickear(Selectors.viewMore)
	}

	goToPublicar () {
		return this.clickear(Selectors.publicarContenido)
	}

	textContent (strTextPost){
		return this.goTo('textPost')
		.then (() => {		
			return this.sendValue(Selectors.textPost,strTextPost)
		})
	}

	postText (strTextPost){
		return this.goTo('textPost')
		.then (() => {		
			return this.sendValue(Selectors.textPost,strTextPost)
		})
			.then (() => {	  	
				return this.goTo('publicarContenido')
	 		 });
	}

	likePost () {
		return this.clickear(Selectors.likePost);
	}

	commentPost(strTextComment){				
			return this.sendValue(Selectors.commentPost,strTextComment)		
			.then (() => {			
				return this.driver.findElement(By.css(Selectors.commentPost)).sendKeys(Key.ENTER);
			});
	}
	
	likeComment () {
		return this.clickear(Selectors.likeFirstComment);
	}

	likeResponseComment () {
		return this.clickear(Selectors.likeResponseComment);
	}

	responseComment (strTextResponseComment) {
		return this.driver.findElement(By.css('.posttext:nth-child(2) .comments .socials .link:nth-child(2)')).click()
			.then (() => {
				return this.driver.findElement(By.css('.posttext:nth-child(2) .commentsreplay label:nth-child(3) div')).sendKeys(strTextResponseComment)	
			})		
				.then (() => {			
			 		return this.driver.findElement(By.css('.posttext:nth-child(2) .commentsreplay label:nth-child(3) div')).sendKeys(Key.ENTER);
				});			
	}

	postLink (strLink) {
		
		return this.goTo('textPost')
		.then (() => {		
			return this.goTo('linkPost')
		})
		.then (() => {		
			return this.sendValue(Selectors.linkInputField,strLink)
		})
		.then(() => {
			return sleepPromise(2000);				
		})
		.then (() => {	  	
			return this.goTo('publicarContenido')
 		 });
	}

	postImage () {

		let file = path.resolve('./resources/flor.jpeg');		

		return this.goTo('textPost')
		.then (() => {

			return this.driver.executeScript(`$('input[type="file"]').get(0).style.display = 'block';`)
			.then(() => {
				return this.driver.executeScript(`return $('input[type="file"]').get(0)`);
			})
		})	
			.then ((inputFile) => {	
				return inputFile.sendKeys(file);
			})
				.then(() => {
					return sleepPromise(6000);				
				})
					.then (() => {	  	
						return this.goTo('publicarContenido');
	 				})
	 					.then(() => {
							return sleepPromise(6000);				
						});
	}

	postFile () {
		let file = path.resolve('./resources/test.pdf');
		
		return this.goTo('textPost')
			.then (() => {
			return this.driver.executeScript(`$('input[type="file"]').get(1).style.display = 'block';`)
			.then(() => {
				return this.driver.executeScript(`return $('input[type="file"]').get(1)`);
			})
		})	
			.then ((inputFile) => {	
				return inputFile.sendKeys(file);
			})
			.then(() => {
				return sleepPromise(6000);				
			})
			.then (() => {	  	
				return this.goTo('publicarContenido')
				.then(() => {
				return sleepPromise(8000);				
			})
			});

			
	}		

	post () {	
		return this.driver.findElement(Selectors.publicarContenido).click();		
	}

	postMention (strMention) {
		return this.goTo('textPost')
		.then (() => {		
			return this.sendValue(Selectors.textPost,strMention)
		})
		.then(() => {
				return sleepPromise(8000);				
			})/*
			.then (() => {	  	
				return this.goTo('publicarContenido')
	 		 });*/
	//}
	}

	deletePost () {
		return this.waitForDisplayed(Selectors.goToEliminarPost,5000)
		.then (() => {
			 return this.clickear(Selectors.goToEliminarPost)
			 })
				.then(() => {
					return sleepPromise(4000);				
				})
					.then (() => {
						return this.clickear(Selectors.eliminarPost);
					});
	}
		
	}
	
export default Social;
