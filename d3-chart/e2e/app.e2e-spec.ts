import { Ngd3Page } from './app.po';

describe('ngd3 App', function() {
  let page: Ngd3Page;

  beforeEach(() => {
    page = new Ngd3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
