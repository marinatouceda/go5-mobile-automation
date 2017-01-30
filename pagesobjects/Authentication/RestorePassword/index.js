import Selectors from './selectors';
import BasePage from '../../BasePage';

import {By, until} from 'selenium-webdriver';


class RestorePassword extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}
 	
 	sendPassword (password) {
 		return this.driver.findElement(By.id(Selectors.inputPassword)).sendKeys(password);
 	} 	

 	pressRestore () {
 		return this.clickear(Selectors.restore)
 		//this.driver.findElement(By.css(Selectors.restore)).click();
 	}

 	clickGo () {
      	return this.waitForDisplayed(Selectors.goLink,5000)
			.then(() => {
				return this.clickear (Selectors.goLink);
			})      	
    }
    restablishPassword (password) {
    	 this.sendPassword(password);
    	 this.pressRestore();
    	 this.clickGo();
    }
 	  
}
export default RestorePassword;
