import { CompenentsAppPage } from './app.po';

describe('compenents-app App', () => {
  let page: CompenentsAppPage;

  beforeEach(() => {
    page = new CompenentsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
