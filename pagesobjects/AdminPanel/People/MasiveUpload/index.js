import Selectors from './selectors';
import BasePage from '../../../BasePage';
import path from 'path';
import {By} from 'selenium-webdriver';
import sleepPromise from '../../../../utils/sleep';

class MasiveUpload extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}
	goToBulk () {
		return this.driver.findElement(By.css(Selectors.goToBulk)).click()
		.then(() => {
			return this.waitForDisplayed(Selectors.export,3000)
			});
	}
	downloadTemplate () {
		return this.clickear(Selectors.downloadTemplate);
	}

	downloadTemplateWithUsers () {
		return this.clickear (Selectors.downloadTemplateWithUsers);
	}
	uploadFile () {
		let file = path.resolve("./resources/usersall.csv"); 
   
		return this.clickear(Selectors.export)
		.then (() => {
			return sleepPromise(3000)
		})
		.then (() => {			
		return this.driver.findElement(By.css(Selectors.inputFile)).sendKeys(file)
		})
		.then (() => {
			return sleepPromise(3000)
		})
		.then (() => {
				return this.clickear(Selectors.uploadFile)
		})
		.then(() => {
			return sleepPromise(4000);				
		})
	}	

	messageInvalidFile () {
		 return this.driver.findElement(Selectors.messageInvalidFile).getText();
	}

	uploadInvalidFile () {
		
		let file = path.resolve("./resources/users.csv"); 
   
		return this.clickear(Selectors.export)		
		.then (() => {
			return sleepPromise(3000)
		})
		.then (() => {			
		return this.driver.findElement(By.css(Selectors.inputFile)).sendKeys(file)
		})
		.then (() => {
			return sleepPromise(3000)
		})
		.then (() => {
				return this.clickear(Selectors.uploadFile)
		})		
		.then(() => {
			return sleepPromise(4000);				
		})
	}	
}
export default MasiveUpload;
