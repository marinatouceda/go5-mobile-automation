import Selectors from './selectors';
import BasePage from '../BasePage';
import {By,Key} from 'selenium-webdriver';
import path from 'path';
import sleepPromise from '../../utils/sleep';

class Aside extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	goToAsideSpace () {
		return this.clickear(Selectors.oneSpace)
	}

}

export default Aside;