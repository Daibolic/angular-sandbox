import { IchiPage } from './app.po';

describe('ichi App', () => {
  let page: IchiPage;

  beforeEach(() => {
    page = new IchiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
