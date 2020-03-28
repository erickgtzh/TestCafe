import ExamplePage from "../page_model/example_model";

const page = new ExamplePage();

fixture`Example page tests`
  .page`https://devexpress.github.io/testcafe/example/`;

test("input name", async t => {
  await t
    .typeText(page.inputName, "Erick")
    .click(page.firstCheckBox)
    .click(page.secondCheckBox)
    .click(page.triedTestCafe)
    .typeText(
      page.comments,
      "Hi, this is an example comment for the March 28 class of Automation Testing UP"
    )
    .click(page.submitButton)
    .wait(4000);
});
