import Selectors from './selectors';
import BasePage from '../../../BasePage';
import {By} from 'selenium-webdriver';
import sleepPromise from '../../../../utils/sleep';
import path from 'path';
import {assert} from 'chai';

class Branding extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	loadLogo () {
		let file = path.resolve("./resources/galaxy.jpg"); 
   
		return this.driver.executeScript('document.getElementById("logoFilePicker").style.display="block"')
		.then (() => {			
		return this.driver.findElement(By.id(Selectors.loadLogoPicture)).sendKeys(file)
		})
		.then (() => {
			return sleepPromise(3000)
		})
		.then (() => {
				return this.driver.findElement(By.css('.active .mconfirmation .primary')).click()
		})
		.then(() => {
			return sleepPromise(4000)				
		})
		return this.driver.executeScript('window.scrollBy(0,250)', "")	
		.then(() => {
				return sleepPromise(4000)				
		})			
		return this.driver.findElement(By.css(Selectors.save)).click()
		.then(() => {
				return sleepPromise(4000);
				
		})
	}	

	loadBackgroundPicture () {
		let file = path.resolve("./resources/galaxy.jpg"); 
   
		return this.driver.executeScript('document.getElementById("loginBgFilePicker").style.display="block"')
		.then (() => {			
		return this.driver.findElement(By.id(Selectors.backgroundPicture)).sendKeys(file)
		})
		.then (() => {
			return sleepPromise(3000)
		})
		.then (() => {
				return this.driver.findElement(By.css('.active .mconfirmation .primary')).click()
		})
		.then(() => {
			return sleepPromise(4000);				
		})
		return this.driver.executeScript('window.scrollBy(0,250)', "")
		.then(() => {
				return sleepPromise(4000);								
		})			
		return this.driver.findElement(By.css(Selectors.save)).click()		
		.then(() => {
				return sleepPromise(4000);
				
		})
	}
	changeColorPlatform () {		
		return this.clickear(Selectors.colorPlataformaRojo)		
			.then(() => {
				return sleepPromise(4000);
			});					
	}

	verifyColorHeader () {
		this.changetoSecondWindow()
			.then(() => {
				return this.driver.findElement(By.tagName('header'));				
			})
				.then((element) => { 
					return element.getCssValue('background-color');
			})
					.then ((color) =>{			
					return assert.equal(color,'rgba(255, 51, 51, 1)', 'the color in the header is red');
					});

	}
	resetInterface(){
		return this.clickear(Selectors.resetInterface);

	}	
}
export default Branding;
