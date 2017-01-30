import Selectors from './selectors';
import BasePage from '../../../BasePage';
import {By} from 'selenium-webdriver';
import sleepPromise from '../../../../utils/sleep';

class Manage extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}
	goToManage () {
		return this.waitForDisplayed(Selectors.manage,5000)
		.then(() => {
		return this.clickear(Selectors.manage);
		});
	}
	goToPendingInvitations () {
		return this.waitForDisplayed(Selectors.pendingInvitations,5000)
		.then(() => {
		return this.clickear(Selectors.pendingInvitations);
		});
	}
	
	searchPeople (name) {
		return this.clickear(Selectors.btnSearch)
		.then(() => {
			return this.driver.findElement(By.css(Selectors.inputSearch)).sendKeys(name)
			//return this.sendValue(Selectors.inputSearch,name);
			})
		.then(() => {
			 return sleepPromise(3000);
			});
	}	

	pressEditPeople () {
		return this.waitForDisplayed(Selectors.editFirstRow,5000)
		.then(() => {
		return this.clickear(Selectors.editFirstRow);
		});
	}
	changeName (name) {
		return this.waitForDisplayed(Selectors.inputName,5000)
		.then(() => {
		return this.driver.findElement(By.css(Selectors.inputName)).sendKeys(name);
	});
	}
	changeLastName (name) {
		return this.driver.findElement(By.css(Selectors.inputLastName)).sendKeys(name);
	}
	saveEditUser () {
		return this.clickear(Selectors.saveEditUser);
	}

	editUserLoaded (name) {
		this.pressEditPeople();
		this.changeName (name);
		this.changeLastName (name);
		this.saveEditUser()
		.then(() => {
			 return sleepPromise(5000);
			});
	}
	addUser () {
		return this.clickear(Selectors.addUser);
	}
}

export default Manage;

