import {by, device, expect, element} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "Email" input', async () => {
    await expect(element(by.id('email-input'))).toBeVisible();
  });

  it('should have "Password" input', async () => {
    await expect(element(by.id('password-input'))).toBeVisible();
  });

  it('should have enabled "Connect" button', async () => {
    await expect(element(by.id('signIn-submit-btn'))).toExist();
  });

  it('should have signed in', async () => {
    // Arrange
    const emailInput: Detox.IndexableNativeElement = element(
      by.id('email-input'),
    );
    const passwordInput: Detox.IndexableNativeElement = element(
      by.id('password-input'),
    );
    const submitBtn: Detox.IndexableNativeElement = element(
      by.id('signIn-submit-btn'),
    );

    // Act

    await emailInput.typeText('admin@gmail.com');
    await passwordInput.typeText('1234');

    await submitBtn.tap();

    // Assert
    await expect(element(by.id('home-screen-text'))).toExist();
  });
});
