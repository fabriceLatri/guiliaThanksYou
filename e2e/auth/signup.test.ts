import {by, device, expect, element} from 'detox';

describe('SignUp e2e Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();

    // On arrive par défaut sur l'écran de login...

    await element(by.id('signup-link')).tap();
  });

  it('should have "Email" input', async () => {
    await expect(element(by.id('email-input'))).toBeVisible();
  });

  it('should have "password" and "password confirmation" inputs', async () => {
    await expect(element(by.id('password-input'))).toBeVisible();

    await expect(element(by.id('confirm-password-input'))).toBeVisible();
  });

  it('should have signed up', async () => {
    // Arrange
    const emailInput: Detox.IndexableNativeElement = element(
      by.id('email-input'),
    );

    const passwordInput: Detox.IndexableNativeElement = element(
      by.id('password-input'),
    );

    const confirmPassword: Detox.IndexableNativeElement = element(
      by.id('confirm-password-input'),
    );

    const submitBtn: Detox.IndexableNativeElement = element(
      by.id('signup-submit-btn'),
    );

    // Act
    await emailInput.typeText('admin@gmail.com');
    await passwordInput.typeText('1234');
    await confirmPassword.typeText('1234');
    await submitBtn.tap();
    // Assert
    await expect(element(by.id('home-screen-text'))).toExist();
  });
});
