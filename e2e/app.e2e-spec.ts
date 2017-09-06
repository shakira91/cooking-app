import { CookingAppPage } from './app.po';

describe('cooking-app App', function() {
  let page: CookingAppPage;

  beforeEach(() => {
    page = new CookingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
