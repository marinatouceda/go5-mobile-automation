import Selectors from './selectors';
import BasePage from '../BasePage';
import {By} from 'selenium-webdriver';

class People extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}
	goToPeople () {
		this.driver.findElement(By.css(Selectors.people)).click()
		.then(() => {
			return this.waitForDisplayed(Selectors.peopleList,10000)
			});
	}

	clickFirstName () {
		this.waitForDisplayed(Selectors.firstName,10000)
		.then (() =>{
			 return this.driver.findElement(By.css(Selectors.firstName)).click();
		});
	}

	verifyFirstNameDisplayed () {
		return this.driver.findElement(By.css(Selectors.firstName)).isDisplayed();
	}
}
export default People;
