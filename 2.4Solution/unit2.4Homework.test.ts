import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
const bernice: By = By.name("employee1");
const marnie: By = By.name("employee2");
const phillip: By = By.name("employee3");
const nameDisplay: By = By.id("employeeTitle");
/*
I'm confused why nameDisplay is on this same line of code above as "employeeTitle"
Is that just stating that the identifyer of the nameDisplay is based on the value 
entered that's the equivalent of the employee's title that's entered? 
*/
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name("phoneEntry");
const titleInput: By = By.name("titleEntry");
const saveButton: By = By.id("saveBtn");
const cancelButton: By = By.name("cancel");
const errorCard: By = By.css(".errorCard");

describe("Employee Manager 1.2", () => {

    beforeEach(async () => {
        await driver.get(
        "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
        );
    });
    afterAll(async () => {
        await driver.quit();
    });
    describe("handles unsaved, canceled, and saved changes correctly", () => {
        test("An unsaved change doesn't persist", async () => {
        /*
        This test follows these steps:
        1. Open Bernice Ortiz
        2. Edit the name input
        3. Open Phillip Weaver
        4. Open Bernice Ortiz
        5. Verify the name field is the original name
        */
        await driver.findElement(bernice).click();
        /*
        we're entering bernice above vs nameInput because we are looking for the specific employee name entered that equals bernice.
        Would it matter if we entered berniceOrtiz vs simply bernice? 

        Also, how would we know if it's nameDisplay vs nameInput that we want to code? 
        I see nameInput listed above on the list of contants 
        but nameDisplay doesn't seem to be anywhere listed above or in the inspect area of employee manager.
        I see the names listed in the innerText and outerText in the Properties section under Elements (inspect page)
        as well as in the textContent area but I am not finding nameDisplay anywhere so am confused where/how that is pulling anyting.
         */
        await driver.wait(
            until.elementIsVisible(await driver.findElement(nameDisplay))
        );
        await driver.findElement(nameInput).clear();
        await driver.findElement(nameInput).sendKeys("Test Name");
        /*I'm assuming that "Test Name could be anything we wanted to add there correct? 
        as in, I could enter my own name there, just whatever text we want to test to make sure 
        Bernice remains when we navigate away without saving it?
        */
        await driver.findElement(phillip).click();

        await driver.wait(
            until.elementTextContains(
            await driver.findElement(nameDisplay),
            "Phillip"
            )
        );
        await driver.findElement(bernice).click();
        await driver.wait(
            until.elementTextContains(
            await driver.findElement(nameDisplay),
            "Bernice"
            )
        );
        expect(
            await (await driver.findElement(nameInput)).getAttribute("value")
        ).toBe("Bernice");
        /* 
        Why is "value" in parenthesis? With it in "" it makes me think that's what should be visible in the 
        text input field not an expect command type of prompt. I would think that simply leaving the () blank 
        with nothing between the () would get the same or expected result. *** I figured this out...notes below LOL. 
        */

        });

        test("A canceled change doesn't persist", async () => {
            /* Same question as with the "value" above. Is "A cancelled change doesn't persist" 
            just for the dev & QA's to know what's expected? And/or when is "" someting that's just a note within the code vs. 
            text that will be visible in the consol.log or in an output?

            Also, what does async () => mean/do?
            */


            /*
            This test follows these steps:
            1. Open Phillip Weaver
            2. Edit the name input
            3. Click cancel
            5. Verify the name field is the original name
            */
            await driver.findElement(nameInput).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameDisplay))
            );
            await driver.findElement(phillip).clear();
            await driver.findElement(phillip).sendKeys("Test Name");
            await driver.findElement(cancel).click();
            expect(
                await (await driver.findElement(nameInput)).getAttribute("")
                /*
                Ok so here it's just the "" without "value" included. I'm guessing this is where I was following along with Mars
                and that's why this is different vs. me entering the same info following the same thought process. 
                So, it's good to know that I'm tracking correctly! haha. The light bulb has gone off in my brain. woo hoo!!
                */
            ).toBe("Phillip Weaver");
        });

        test("A saved change persists", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Edit the name input
            3. Save the change
            4. Open Phillip Weaver
            5. Open Bernice Ortiz's old record
            5. Verify the name field is the edited name
            */
            await driver.findElement(nameInput).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameDisplay))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Jet's a rockstar");
            await driver.findElement(save).click();
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementTextContains(
                await driver.findElement(),
                "Phillip"
                )
            );
            await driver.findElement("Jet's a rockstar").click();
            expect(
                await (await driver.findElement()).getAttribute("value")
            ).toBe("Jet's a rockstar");
    });
});
/* 
woo hoo!! I think I'm totally getting this! Now if only I can rememeber that to make these 
comments it's the /* not */ (/* had to include this so it stays a comment haha) or 8? or ?* LOL 
I keep hitting the wrong keys! argh
*/
    describe("handles error messages correctly", () => {
        test("shows an error message for an empty name field", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Clear the name input
            3. Save the change
            4. Verify the error is present
            */
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            /* 
            Why is clearing the nameInput not enough? As in, why do we need to put a space in 
            and then delete the space before saving it? 
            */

            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
        });

        /* 
        Will all these lines of code basically allow regression testing to happen 
        for all previous bug fixes by simply re-running the npx...test from the terminal?
        */

        test("lets you cancel out of an error message", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Clear the name input
            3. Save the change
            4. Verify the error is present
            5. Cancel the change
            6. Verify the error is gone
            */
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameDisplay))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(save).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
/* 
The .getText().toBe() is confusing to me. Not sure what my question is, 
it just doesn't make sense why it's the way it is.
*/

            await driver.findElement(nameInput).sendKeys(Key.SPACE);
            await driver.findElement(cancelButton).click();
            driver.wait(() => true, 500);
            expect(await driver.findElements(errorCard)).toHaveLength(0);
            /*
            The => true, 500 and .toHaveLength(0) also makes no sense to me.
            Not sure what my actual question is, it's just confusing to me.
             */
        });
    });
});