import Selectors from './selectors';
import BasePage from '../../BasePage';
import {By} from 'selenium-webdriver';

class User extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	goToMenu () {
		return this.goTo('menu');
	}

	goToMyProfile () {
		return this.waitForDisplayed(Selectors.myProfile, 10000)
			.then(() => {
				return this.goTo('myProfile');
			});
	}

	goToPeople () {
		return this.waitForDisplayed(Selectors.people, 10000)
			.then(() => {
				return this.goTo("people");
			});
	}

	goToSeeMore () {
		return this.waitForDisplayed(Selectors.seeMore, 10000)
			.then(() => {
				return this.goTo('seeMore');
			});
	}

	goToSpaceUmbrella () {
		return this.goTo(Selectors.umbrellaspace);
	}

	goToSpaceBike () {
		return this.goTo('bike');
		//.then (() => {
		//	this.waitForDisplayed(Selectors.postbox)
		//});
	}

	goToCreateSpace () {
		return this.waitForDisplayed(Selectors.createSpace, 10000)
			.then(() => {
				return this.goTo('createSpace');
			});
	}

	goToSpaceAdmin () {
		return this.waitForDisplayed(Selectors.spaceAdmin, 20000)
			.then(() => {
				return this.goTo('spaceAdmin');
			});
	}

	goToSpace (icon) {
		return this.driver.findElement(By.css(icon)).click();
	}

	countSpaces () {
		return Selectors.spacesList.length;
	}
}

export default User;
