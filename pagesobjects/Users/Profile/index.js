import Selectors from './selectors';
import BasePage from '../../BasePage';
import {By} from 'selenium-webdriver';
import sleepPromise from '../../../utils/sleep';
import path from 'path';

class Profile extends BasePage {
	constructor (webdriver) {
		super(webdriver);
		this.navigationSelectors = Selectors;
	}

	editProfile () {
		this.waitForDisplayed(Selectors.editProfile,10000)
		.then(() => {
			return this.goTo('editProfile');
		})
	}
	verifyPhonesDisplayedAtHeader() {

		return this.driver.findElement(By.css('address a:first-child')).click();
	}
	loadPicture(){
					
		let file = path.resolve("./resources/galaxy.jpg");
		

		return this.driver.findElement(By.css(Selectors.openModalToLoadPicture)).click()
		.then(() => {
				return sleepPromise(3000);
		})
		.then(() => {
			
			return this.driver.findElement(By.id('sarasa')).sendKeys(file);
			//this.driver.findElement(By.id('sarasa')).click
		})
		.then(() => {
				return sleepPromise(4000);
			})
		.then(() => {
				return this.driver.findElement(By.css(Selectors.confirmar)).click();
		});
			
	}
			
	/*
	loadPictureOld()  {


	selectDate (date) {
	let calendar = this.driver.findElement(By.css(".pika-lendar"));
  	let rows = calendar.findElements(By.tagName("tr"));
  	let columns = calendar.findElements(By.tagName("td"));
  	let cell
  		rows.forEach((cols) => {
  			cols.forEach((cell) => {
  				return cell.findElement(By.css("button")).getText();
  			});
  		});
  		/*
  		for (WebElement cell: columns){
   		//Select 13th Date
   			if (cell.getText().equals("13")){
   			cell.findElement(By.linkText("13")).click();
   			break;
			}
		}*/
}
export default Profile;
