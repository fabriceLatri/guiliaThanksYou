import {by, device, expect, element} from 'detox';

import {Helpers} from '@e2e/helpers';

describe('Home e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await Helpers.loggin();
  });

  // getPictures CallAPI Test
  it('should display a list of picturesView', async () => {
    // Assert
    await expect(element(by.id('home-screen-text'))).toExist();
  });
});
