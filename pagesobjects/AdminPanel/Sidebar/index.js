import Selectors from './selectors';
import BasePage from '../../BasePage';
import {By} from 'selenium-webdriver';

class Sidebar extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}	

	goToDesign () {
		return this.waitForDisplayed(Selectors.design, 3000)
			.then(() => {				
				return this.driver.findElement(By.css(Selectors.design)).click();
			});
	}
	clickMenu(){
		return this.goTo('menu');
	}
		
	goToList () {
		return this.waitForDisplayed(Selectors.peopleList, 3000)
			.then(() => {
				return this.goTo('peopleList');
			});
	}	
}

export default Sidebar;
