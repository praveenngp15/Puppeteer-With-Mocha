import Builder from "../builder";

export default class LoginPage extends Builder {
  consturctor(page) {
    this.page = page;
  }
  async login(username, password) {
    await this.page.waitAndType("#user_login", username);
    await this.page.waitAndType("#user_password", password);
    await this.page.click('[type="submit"]');
  }
}
