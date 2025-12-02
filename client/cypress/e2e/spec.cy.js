describe("Portfolio E2E", () => {
    it("Loads the home page and navigates between sections", () => {
        cy.visit("/");

        // Home title
        cy.contains("Welcome to my Portfolio").should("be.visible");

        // Navigate to Projects using the navbar
        cy.contains("Projects").click();
        cy.url().should("include", "/projects");
        cy.contains("Projects").should("be.visible");

        // Navigate to Contact
        cy.contains("Contact").click();
        cy.url().should("include", "/contact");
        cy.contains("Contact Me").should("be.visible");
    });

    it("Submits the contact form and shows a toast on Home", () => {
        cy.visit("/contact");

        cy.get('input[name="firstName"]').type("Test");
        cy.get('input[name="lastName"]').type("User");
        cy.get('input[name="phone"]').type("1234567890");
        cy.get('input[name="email"]').type("test@example.com");
        cy.get('textarea[name="message"]').type("Hello from Cypress!");

        cy.contains("Send").click();

        // Navigates back to "/"
        cy.url().should("eq", `${Cypress.config().baseUrl}/`);

        cy.contains("Thanks!").should("be.visible");
    });
});  