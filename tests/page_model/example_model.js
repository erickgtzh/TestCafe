import { Selector, t } from "testcafe";

export default class ExamplePage {
  constructor() {
    this.inputName = Selector("#developer-name");
    this.firstCheckBox = Selector("input[name=remote]");
    this.secondCheckBox = Selector("input[name=re-using]");
    this.triedTestCafe = Selector("#tried-test-cafe");
    this.comments = Selector("#comments");
    this.submitButton = Selector("#submit-button");
  }
}
