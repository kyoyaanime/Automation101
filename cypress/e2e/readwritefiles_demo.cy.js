

//we can use to create data
before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read Files using Fixture', function() {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email )

    })


    cy.fixture(this.test_data.name)
})

it('Read file using readfile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    }) 
})

it('Write file demo', function(){

})