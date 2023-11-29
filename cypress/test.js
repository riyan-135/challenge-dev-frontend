describe('CRUD Operations', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080'); // Update with your actual Vue.js app URL
    });
  
    it('should add a new record', () => {
      cy.get('#addButton').click(); // Assuming there's a button with id 'addButton' to open the form
      cy.get('#namaInput').type('John Doe');
      cy.get('#emailInput').type('john.doe@example.com');
      cy.get('#phoneInput').type('1234567890');
      cy.get('#alamatInput').type('123 Main Street');
      cy.get('#saveButton').click(); // Assuming there's a button with id 'saveButton' to submit the form
      cy.contains('John Doe').should('exist'); // Assuming the newly added record is displayed on the page
    });
  
    it('should edit an existing record', () => {
      cy.get('.editButton').first().click(); // Assuming there's a button with class 'editButton' to edit a record
      cy.get('#namaInput').clear().type('Updated John Doe');
      cy.get('#saveButton').click();
      cy.contains('Updated John Doe').should('exist');
    });
  
    it('should delete a record', () => {
      cy.get('.deleteButton').first().click(); // Assuming there's a button with class 'deleteButton' to delete a record
      cy.contains('John Doe').should('not.exist'); // Assuming the deleted record is no longer displayed on the page
    });
  });
  