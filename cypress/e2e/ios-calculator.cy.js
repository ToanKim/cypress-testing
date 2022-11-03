describe("iOS Calculator Testing", () => {
  Cypress.config("viewportHeight", 1696);
  Cypress.config("viewportWidth", 980);

  beforeEach(() => {
    cy.visit("https://ios-calculator-eight.vercel.app");
  });

  it("Click 1234567890", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="2"]').click();
    cy.get('.numbers[value="3"]').click();
    cy.get('.numbers[value="4"]').click();
    cy.get('.numbers[value="5"]').click();
    cy.get('.numbers[value="6"]').click();
    cy.get('.numbers[value="7"]').click();
    cy.get('.numbers[value="8"]').click();
    cy.get('.numbers[value="9"]').click();
    cy.get('.numbers[value="0"]').click();

    cy.get(".results").should("have.text", "1234567890");
  });

  it("Click 1.3", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="."]').click();
    cy.get('.numbers[value="."]').click();
    cy.get('.numbers[value="."]').click();
    cy.get('.numbers[value="3"]').click();

    cy.get(".results").should("have.text", "1.3");
  });

  it("Add 0.1 + 0.2", () => {
    cy.get('.numbers[value="0"]').click();
    cy.get('.numbers[value="."]').click();
    cy.get('.numbers[value="1"]').click();

    cy.get('.operators[value="+"]').click();

    cy.get('.numbers[value="0"]').click();
    cy.get('.numbers[value="."]').click();
    cy.get('.numbers[value="2"]').click();

    cy.get(".equal-sign").click();

    cy.get(".results").should("have.text", "0.3");
  });

  it("Add 123 + 456", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="2"]').click();
    cy.get('.numbers[value="3"]').click();

    cy.get('.operators[value="+"]').click();

    cy.get('.numbers[value="4"]').click();
    cy.get('.numbers[value="5"]').click();
    cy.get('.numbers[value="6"]').click();

    cy.get(".equal-sign").click();

    cy.get(".results").should("have.text", 123 + 456);
  });

  it("Subtract 123 - 456", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="2"]').click();
    cy.get('.numbers[value="3"]').click();

    cy.get('.operators[value="-"]').click();

    cy.get('.numbers[value="4"]').click();
    cy.get('.numbers[value="5"]').click();
    cy.get('.numbers[value="6"]').click();

    cy.get(".equal-sign").click();

    cy.get(".results").should("have.text", 123 - 456);
  });

  it("Multiply 123 * 456", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="2"]').click();
    cy.get('.numbers[value="3"]').click();

    cy.get('.operators[value="x"]').click();

    cy.get('.numbers[value="4"]').click();
    cy.get('.numbers[value="5"]').click();
    cy.get('.numbers[value="6"]').click();

    cy.get(".equal-sign").click();

    cy.get(".results").should("have.text", 123 * 456);
  });

  it("Divide 123 / 456", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="2"]').click();
    cy.get('.numbers[value="3"]').click();

    cy.get('.operators[value="/"]').click();

    cy.get('.numbers[value="4"]').click();
    cy.get('.numbers[value="5"]').click();
    cy.get('.numbers[value="6"]').click();

    cy.get(".equal-sign").click();

    cy.get(".results").should("have.text", 123 / 456);
  });

  it("(123 + 456 - 123) * 789", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="2"]').click();
    cy.get('.numbers[value="3"]').click();

    cy.get('.operators[value="+"]').click();

    cy.get('.numbers[value="4"]').click();
    cy.get('.numbers[value="5"]').click();
    cy.get('.numbers[value="6"]').click();

    cy.get(".equal-sign").click();
    cy.get(".results").should("have.text", 123 + 456);

    cy.get('.operators[value="-"]').click();

    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="2"]').click();
    cy.get('.numbers[value="3"]').click();

    cy.get(".equal-sign").click();
    cy.get(".results").should("have.text", 123 + 456 - 123);

    cy.get('.operators[value="x"]').click();

    cy.get('.numbers[value="7"]').click();
    cy.get('.numbers[value="8"]').click();
    cy.get('.numbers[value="9"]').click();

    cy.get(".equal-sign").click();
    cy.get(".results").should("have.text", (123 + 456 - 123) * 789);
  });

  it("Click negative (-10)", () => {
    cy.get('.numbers[value="0"]').click();
    cy.get(".results").should("have.text", 0);

    cy.get(".negative").click();
    cy.get(".results").should("have.text", 0);

    cy.get('.numbers[value="1"]').click();
    cy.get(".results").should("have.text", 1);

    cy.get('.numbers[value="0"]').click();
    cy.get(".negative").click();
    cy.get(".results").should("have.text", -10);
  });

  it("Click negative (-123 * -33)", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get(".results").should("have.text", 1);

    cy.get(".negative").click();
    cy.get(".results").should("have.text", -1);

    cy.get('.numbers[value="2"]').click();
    cy.get(".results").should("have.text", -12);

    cy.get(".negative").click();
    cy.get(".results").should("have.text", 12);

    cy.get('.numbers[value="3"]').click();
    cy.get(".results").should("have.text", 123);

    cy.get(".negative").click();
    cy.get('.operators[value="x"]').click();

    cy.get('.numbers[value="3"]').click();
    cy.get('.numbers[value="3"]').click();
    cy.get(".negative").click();
    cy.get(".results").should("have.text", -33);

    cy.get(".equal-sign").click();
    cy.get(".results").should("have.text", -123 * -33);
  });

  it("Click percentage 456%", () => {
    cy.get('.numbers[value="4"]').click();
    cy.get('.numbers[value="5"]').click();
    cy.get('.numbers[value="6"]').click();
    cy.get(".percent").click();
    cy.get(".results").should("have.text", 456 / 100);

    cy.get(".percent").click();
    cy.get(".results").should("have.text", 456 / 100 / 100);
  });

  it("Click Clear", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.numbers[value="1"]').click();
    cy.get(".percent").click();

    cy.get(".ac").click();
    cy.get(".results").should("have.text", 0);
  });

  it("Divide by 0", () => {
    cy.get('.numbers[value="1"]').click();
    cy.get('.operators[value="/"]').click();
    cy.get('.numbers[value="0"]').click();

    cy.get(".equal-sign").click();
    cy.get(".results").should("have.text", "Error");
  });
});
