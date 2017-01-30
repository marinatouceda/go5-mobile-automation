import Selectors from './selectors';
import BasePage from '../../../BasePage';
import {By} from 'selenium-webdriver';

class Invitations extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	clickFirstName () {
		return this.waitForDisplayed(Selectors.firstName,10000)
		.then (() =>{
			 return this.driver.findElement(By.css(Selectors.firstName)).click();
		});
	}

	verifyFirstNameDisplayed () {
		return this.driver.findElement(By.css(Selectors.firstName)).isDisplayed();
	}
	/*
	countInvitations() {
		
		htmltable = this.driver.findElement(By.cssSelector(".tables tbody"));

		 rows = htmltable.findElements(By.tagName("tr"));
		
			return	rows.size();
	}*/

	runScriptGetToken  () {	
		this.driver.executeScript("$(document).ajaxComplete(function( event, xhr, settings ) {  if(settings.url.indexOf('http://api.qa.go5.gointegro.net/invitations') != -1 && settings.type == 'PATCH') { localStorage.setItem('invitationUrl', '/registration/invitation/'+$.parseJSON(xhr.responseText).data.id); } });");
	}
	runScriptOpenToken () {
		this.driver.executeScript("window.location = localStorage.getItem('invitationUrl');");

	}

	resendInvite () {
		return this.waitForDisplayed(Selectors.resend,5000)
		.then (() => {
		 return this.clickear(Selectors.resend)
		 })
		.then (() => {
		return this.waitForDisplayed(Selectors.resendModal,5000)
		})		
		.then (() => {
			 return this.clickear(Selectors.resendModal);
		});
	}		
		
}
export default Invitations;
