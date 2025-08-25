import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("SwagLabs UI Test", () => {
  it("Verify sorting Name A → Z and change to Z → A", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");
    loginPage.isLoginSuccessful();

    inventoryPage.verifyProductOrder('asc');

    inventoryPage.sortProducts('za');
    inventoryPage.verifyProductOrder('desc');
  });
});
