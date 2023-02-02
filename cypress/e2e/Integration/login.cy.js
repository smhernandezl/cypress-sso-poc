describe('example to-do app', () => {
    beforeEach(async () => {
      await cy.visit(('https://fomc-np.cloudapps.telus.com/it02/host/orders'),{timeout: 60000})
      //cy.visit('https://www.google.com/',{timeout: 60000})
    })

    it('should login successfully', async() => {
        await cy.get('[name="pf.username"]').type('x261445')
        await cy.get('[name="pf.pass"]').type('Passw0rd')
        await cy.get('[class="button button--primary"]').click()
        await cy.contains('Federated Order Management Console')
      })
})
