import { HOFCWebPage } from './app.po';

describe('hofcweb App', () => {
  let page: HOFCWebPage;

  beforeEach(() => {
    page = new HOFCWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
