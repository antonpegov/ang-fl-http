import { browser, element, by } from 'protractor';

export class AngularHttpPage {
  navigateTo() {
    return browser.get('/');
  }

  getLiText() {
    return element(by.tagName('li')).getText();
  }
}
