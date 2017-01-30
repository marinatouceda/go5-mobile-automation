import Selectors from './selectors';
import BasePage from '../../../BasePage';
import {By} from 'selenium-webdriver';
import sleepPromise from '../../../../utils/sleep';
import randomEmail from '../../../../utils/getEmail'; 

class AddUser extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}	

	insertName (name) {
		return this.waitForDisplayed(Selectors.inputName,5000)
		.then(() => {
		return this.driver.findElement(By.css(Selectors.inputName)).sendKeys(name);
	});
	}
	insertLastName (name) {
		return this.waitForDisplayed(Selectors.inputLastname,5000)
		.then(() => {
		return this.driver.findElement(By.css(Selectors.inputLastname)).sendKeys(name);
	});
	}
	saveUser () {
		return this.clickear(Selectors.saveUser);
	}
	insertEmail (email) {
		return this.sendValue(Selectors.inputEmail, email)
		.then(() => {
				return sleepPromise(5000);
			});
	}
	selectRol () {
	 return this.driver.findElement(By.css('.primarydata label:nth-child(4) select')).sendKeys('Basic');
    }

	createUser () {
		let email = randomEmail(0,100);

		this.insertName ('Micho');
		this.insertLastName('Tito');
		this.insertEmail(email);
		this.selectRol();
		this.saveUser()
		.then(() => {
			 return sleepPromise(5000);
			})
		.then(() => {
			return email;
			});
	}
	
	
}

export default AddUser;

