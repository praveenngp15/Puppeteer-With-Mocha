import { steps } from "mocha-steps";

import Page from "../builder";
import { expect } from "chai";
import LoginPage from "../Pages/LoginPage"

describe("Mocha", () => {
  let page;
  let loginpage

  before(async () => {
    page = await Page.build("Desktop");
    loginpage = await new LoginPage(page)
  });

  after(async () => {
    await page.close();
  });
  step("Should Load Home Page", async () => {
    await page.goto("http://zero.webappsecurity.com/");
    expect(await page.isElementVisible("#signin_button")).to.be.true;
  });

  step("Should Login Into Form", async () => {
    await page.waitAndClick("#signin_button");
    expect(await page.isElementVisible('#login_form')).to.be.true;
    expect(await page.isElementVisible("#signin_button")).to.be.false;
  });

  step("Should Login Into Application", async () => {
    await loginpage.login('username','password')
    expect(await page.isElementVisible(".nav.nav-tabs")).to.be.true;
  });

  step("Should have Six NavBar Links", async () => {
    expect(await page.getCount(".nav-tabs li a")).to.equal(6);
  });
  
});
