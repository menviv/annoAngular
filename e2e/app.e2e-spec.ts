import { AnnoPage } from './app.po';

describe('anno App', () => {
  let page: AnnoPage;

  beforeEach(() => {
    page = new AnnoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
