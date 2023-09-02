export class Helpers {
  public static async loggin(): Promise<void> {
    const emailInput: Detox.IndexableNativeElement = element(by.id('email-input'));

    const passwordInput: Detox.IndexableNativeElement = element(by.id('password-input'));

    const submitBtn: Detox.IndexableNativeElement = element(by.id('signIn-submit-btn'));

    await emailInput.typeText('admin@gmail.com');
    await passwordInput.typeText('1234');

    await submitBtn.tap();
  }
}
