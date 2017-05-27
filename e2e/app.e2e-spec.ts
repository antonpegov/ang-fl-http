import { AngularHttpPage } from './app.po';

describe('angular-http App', () => {
  let page: AngularHttpPage;

  beforeEach(() => {
    page = new AngularHttpPage();
  });

  it('should display list of vehicles', () => {
    page.navigateTo();
    expect(page.getLiText()).toEqual('Millennium Falcon');
  });
});
