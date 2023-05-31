import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        
        header: By = By.css('.titleText')
        //header: By = By.xpath('(//input[@class= "titleText"])')
        //header: By = By.name('titleText')
        //addEmployee: By = By.css('.addEmployee')
        addEmployee: By = By.xpath('//li[@name="addEmployee"]')
        //addEmployee: By = By.name('addEmployee')
        newEmployee: By = By.css('[name="employee11"]')
        //newEmployee: By = By.xpath('(//li[@name="empoloyee11"]')
        //newEmployee: By = By.name('employee11')
        //nameInput: By = By.css('.nameEntry')
        //nameInput: By = By.xpath('//input[@name="nameEntry"]')
        nameInput: By = By.name('nameEntry')
        //phoneInput: By = By.css('.phoneEntry')
        //phoneInput: By = By.xpath('(//input[@name="phoneEntry"]')
        phoneInput: By = By.name('phoneEntry')
        //titleInput: By = By.css('.titleEntry')
        //titleInput: By = By.xpath('(//input[@name="titleEntry"]')
        titleInput: By = By.name('titleEntry')
        saveBtn: By = By.id('saveBtn')
        //saveBtn: By = By.css('.saveBtn')
        //saveBtn: By = By.xpath('(//button[@name=save])')

        /* 
        When/why do we have to use By.id vs By.name or By.css or By.xpath?

        */

        //CONSTRUCTOR
        constructor(driver: WebDriver) {
            this.driver = driver
        }
        //METHODS
        async navigate() {
            await this.driver.get(this.url)
            await this.driver.wait(until.elementLocated(this.header))
        }
        async click(elementBy: By) {
            await this.driver.wait(until.elementLocated(elementBy))
            return (await this.driver.findElement(elementBy)).click()
        }
        async sendKeys(elementBy: By, keys) {
            await this.driver.wait(until.elementLocated(elementBy))
            return this.driver.findElement(elementBy).sendKeys(keys)
        }
  }
const emmPage = new employeePage(driver)
  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emmPage.navigate();
      })
      afterAll(async () => {
          await emmPage.driver.quit()
      })
      test("adding an employee", async () => {
        
          await emmPage.click(emmPage.addEmployee)
          await emmPage.click(emmPage.newEmployee)
          await emmPage.click(emmPage.nameInput)
          await driver.findElement(emmPage.nameInput).clear()
          await emmPage.sendKeys(emmPage.nameInput, "Change This")
          await emmPage.click(emmPage.phoneInput)
          await driver.findElement(emmPage.phoneInput).clear()
          await emmPage.sendKeys(emmPage.phoneInput, "Change This")
          await emmPage.click(emmPage.titleInput)
          await driver.findElement(emmPage.titleInput).clear()
          await emmPage.sendKeys(emmPage.titleInput, "Change This")
          await emmPage.click(emmPage.saveBtn)
  })
  })
  /* test git commit*/
  