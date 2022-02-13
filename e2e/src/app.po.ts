import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root .dx-drawer-contents .dx-card p:nth-child(2)')).getText();
  }
}
