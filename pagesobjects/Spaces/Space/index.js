import Selectors from './selectors';
import BasePage from '../../BasePage';

class Space extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	goToHorizontalMenu () {
		return this.waitForDisplayed(Selectors.openMenu, 30000)
			.then(() => {
				return this.goTo('openMenu');
			});
	}

	goToLeaveSpace () {
		return this.waitForDisplayed(Selectors.leaveSpace, 10000)
			.then(() => {
				return this.goTo('leaveSpace');
			});
	}
	confirmLeaveSpace () {
		return this.waitForDisplayed(Selectors.confirmLeaveSpace, 20000)
			.then(() => {
				return this.goTo('confirmLeaveSpace');
			});
	}
}

export default Space;
