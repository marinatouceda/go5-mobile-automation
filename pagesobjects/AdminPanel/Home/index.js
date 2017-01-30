import Selectors from './selectors';
import BasePage from '../../BasePage';
import {By} from 'selenium-webdriver';

class Home extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}	

	
	openSidebar () {
		return this.goTo('menu');
	}

	goToCard (strCard) {
	switch(strCard) {
	case 'People':
		return this.driver.findElement(By.css(Selectors.cardPeople)).click();
	break;
	case 'Company':
		return this.driver.findElement(By.css(Selectors.cardCompany)).click();
	case 'GoSocial':
		return this.driver.findElement(By.css(Selectors.cardGoSocial)).click();
	case 'Apps':
		return this.driver.findElement(By.css(Selectors.cardGoSocial)).click();
	break;
	default:
    //if myVar does not satisfy any case, this is executed
	  //break; is unnecessary here as there are no cases following this
}

	}
	
	
}
export default Home;

  
