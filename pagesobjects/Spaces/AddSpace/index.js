import Selectors from './selectors';
import BasePage from '../../BasePage';
import {By, until} from 'selenium-webdriver';
import sleepPromise from '../../../utils/sleep';

class AddSpace extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	fillNameSpace (value) {

		return this.waitForDisplayed(Selectors.nombreEspacio,10000)
			.then(() => {
				return this.goTo('nombreEspacio');
			})
			.then(() => {
				 return this.driver.findElement(By.css(Selectors.nombreEspacio)).sendKeys(value);
				 //return this.sendValue(nombreEspacio,value);
			});
	}

	fillDescriptionSpace () {
		return this.sendValue(Selectors.descripcionEspacio,'Descripcion del espacio');
	}
	saveSpace () {
		return this.clickear(Selectors.grabarEspacio);
	}

	createSpace () {
		return this.fillNameSpace('Create Space to be left later')
			.then(() => {
				return this.fillDescriptionSpace();
			})
				.then(() => {
				return this.saveSpace();
				})
					.then (() => {
					return this.driver.wait(until.elementLocated(By.css(Selectors.spaceCreated)),30000);
					});
	}

 }
export default AddSpace;
