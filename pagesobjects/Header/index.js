import Selectors from './selectors';
import BasePage from '../BasePage';
import {switch} from 'selenium-webdriver';


class Header extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	goToHome () {
		return this.goTo(Selectors.home);
	}
	goToUserMenu (){
		//return this.driver.findElement(By.css(Selectors.userMenu)).click();
		this.clickear(Selectors.userMenu)
		.then (() => {
			 return this.waitForDisplayed (Selectors.nameUser,2000)
			});
	}
	goToAccountSettings () {
		this.waitForDisplayed(Selectors.accountSettings,10000)
		.then(() => {
			return this.clickear(Selectors.accountSettings);
		})
	}
	goToConfiguration () {
		this.waitForDisplayed(Selectors.configuration,10000)
		.then(() => {
			return this.clickear(Selectors.configuration);
		})
		.then(() => {
			 this.driver.getAllWindowHandles()
			.then ((allhandles) => {        		
        		return this.driver.switchTo().window(allhandles[1]);        		

    		});
		});
	}

	logout () {
		this.clickear(Selectors.userMenu)
			.then(() => {
				this.clickear(Selectors.logout)
			});
	}
}

export default Header;