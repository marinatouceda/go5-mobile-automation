import Selectors from './selectors';
import BasePage from '../../BasePage';

class Recommended extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	goToRecommended () {
		this.waitForDisplayed(Selectors.goToRecommended,10000)
		.then(() => {
			return this.goTo('goToRecommended');
		});
	}

	goToMySpaces () {
		return this.goTo('goToMySpaces');
	}
	testTableLength () {
		 this.waitForDisplayed(Selectors.listSpaces,3000)
		 .then (() => {
		 	return console.log ('test',Selectors.listSpaces.length);
		 	});
	}

	searchSpace () {
		for(var i = 0; i < Selectors.listSpaces.length;i++){
        	return console.log('Print algo',Selectors.listSpaces.length);
  		}
  	}

  	printSpace (message) {
      return console.log('Print algo');
  	}

	joinSpace () {
		// search for a space
		this.waitForDisplayed(Selectors.joinFirstSpace,10000)
			.then(() => {
				return this.goTo('joinFirstSpace');
			});
	}
}
export default Recommended;
