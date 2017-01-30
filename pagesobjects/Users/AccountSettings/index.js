import Selectors from './selectors';
import BasePage from '../../BasePage';

class AccountSettings extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}


	goToPassword () {
		return this.waitForDisplayed(Selectors.goToPassword,10000)
			.then(() => {
				return this.clickear(Selectors.goToPassword);
			})
	}
	insertPassword (password) {
		return this.waitForDisplayed(Selectors.cambiarPassword,10000)
			.then(() => {
				return this.sendValue(Selectors.cambiarPassword,password);
			})
	}
	confirmPassword (password) {		
		return this.sendValue(Selectors.confirmarPassword,password);			
	}
	savePassword () {
		return this.clickear(Selectors.save);
	}
	changePassword (password) {
		this.insertPassword (password);
		this.confirmPassword(password);
		this.savePassword();
		return this.waitForDisplayed(Selectors.cambiarPassword, 2000);
	}
	verifyErrorMessage () {
		return this.waitForDisplayed(Selectors.errorMessageFirstLabel,2000);
	}


}

export default AccountSettings;
