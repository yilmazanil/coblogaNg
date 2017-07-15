import { CoblogaPage } from './app.po';

describe('cobloga App', () => {
  let page: CoblogaPage;

  beforeEach(() => {
    page = new CoblogaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
