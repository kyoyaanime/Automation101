/// <reference types="cypress" />

import { LoginPage } from "./pages/LoginPage"

const loginPage = new LoginPage()

describe('All Login Tests', function() {

    it('TC-Login-001 | Login Page Verification', function() {
        loginPage.enterLoginURL()
        cy.get('img').should('be.visible')
        cy.get('#b1-Username').should('exist')
            .find('.body-text-xs.font-color-neutral-8')
            .should('have.text','Username')
        loginPage.enterUserName('camille.vinluan@adec-innovations.com')
        cy.get('#b1-Password').should('exist')
            .find('.body-text-xs.font-color-neutral-8')
            .should('have.text','Password')
        loginPage.enterPassword('12345')
        cy.get('#ForgotPassword')
            .should('exist')
            .should('have.attr', 'href', '/ZDHCGateway/ForgotPassword.aspx?isForgotPassword=True')
            .should('have.text','Forgot Password?')
        cy.get('#ForgotUsername')
            .should('exist')
            .should('have.attr', 'href', '/ZDHCGateway/ForgotPassword.aspx?isForgotPassword=False') 
            .should('have.text','Forgot Username?')
        // cy.get('#launcher').should('be.visible')

    })

    it('TC-Login-002 | Login Page Success', function() {
        loginPage.enterLoginURL()
        loginPage.enterUserName('camille.vinluan@adec-innovations.com')
        loginPage.enterPassword('12345')
        loginPage.clickLogin()
        cy.contains('A Solution for the Entire Industry').should('contain','A Solution for the Entire Industry')
    })

    it('TC-Login-003 | Login Page Invalid Password', function() {
        loginPage.enterLoginURL()
        loginPage.enterUserName('camille.vinluan@adec-innovations.com')
        loginPage.enterPassword('0')
        loginPage.clickLogin()
        cy.get('.feedback-message.feedback-message-error').should('be.visible')
            .find('.feedback-message-text')
            .should('have.text','Invalid Password.')
    })

    it('TC-Login-004 | Login Page Invalid Username', function() {
        loginPage.enterLoginURL()
        loginPage.enterUserName('username')
        loginPage.enterPassword('12345')
        loginPage.clickLogin()
        cy.get('.feedback-message.feedback-message-error').should('be.visible')
            .find('.feedback-message-text')
            .should('have.text','User does not exist.')
    })

    it('TC-Login-005 | Invalid Login using Spacebar', function() {
        loginPage.enterLoginURL()
        loginPage.enterUserName(' ')
        loginPage.enterPassword(' ')
        loginPage.clickLogin()
        cy.get('.feedback-message.feedback-message-error').should('be.visible')
            .find('.feedback-message-text')
            .should('have.text','Invalid Password.')
    })

    it('TC-Login-006 | Invalid Login using Special Characters', function() {
        loginPage.enterLoginURL()
        loginPage.enterUserName('@%&*')
        loginPage.enterPassword('@%&*')
        loginPage.clickLogin()
        cy.get('.feedback-message.feedback-message-error').should('be.visible')
            .find('.feedback-message-text')
            .should('have.text','User does not exist.')
    })

    it('TC-Login-002 | Login Page Success as a Supplier', function() {
        loginPage.enterLoginURL()
        loginPage.enterSupplierUserName()
        loginPage.enterSupplierPassword()
        loginPage.clickLogin()
        cy.contains('A Solution for the Entire Industry').should('contain','A Solution for the Entire Industry')
    })

    
    it('TC-Login-002 | Login Page Success as a Brand', function() {
        loginPage.enterLoginURL()
        loginPage.enterBrandUsername()
        loginPage.enterBrandPassword()
        loginPage.clickLogin()
        cy.contains('A Solution for the Entire Industry').should('contain','A Solution for the Entire Industry')
    })

    // it('TC-Login-007 | Login Forgot Password Page Verification', function() {
    //     loginPage.enterLoginURL()
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotPassword > .Underline').should('have.text','Forgot Password?')
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotPassword > .Underline').click()
    //     //https://test.my-aip.com/ZDHCGateway/ForgotPassword.aspx?isForgotPassword=True
    //     cy.get('img').should('be.visible')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotPasswordTextBox').should('be.visible')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt8').should('have.value','Retrieve my Password')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt17').should('have.value','Back to Login')
    //     cy.get('div.loginfootertext').should('be.visible')

    //     // cy.get('div.loginfootertext') // Replace 'my-class' with the actual class name or other selector
    //     //         .should('contain', 'If you can\'t identify your account, please send an email to gateway@zdhc.org') // Ensure that the div contains the expected text
    //     //         .and('have.attr', 'gateway@zdhc.org', 'gateway@zdhc.org'); 
  

    //     // <a id="WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt25" tabindex="7" class="Link" href="mailto:appsupport@adec-innovations.com">gateway@zdhc.org</a>
 
    // })

    // it('TC-Login-008 | Login Forgot Password using not existing user', function() {
    //     loginPage.enterLoginURL()
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotPassword > .Underline').should('have.text','Forgot Password?')
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotPassword > .Underline').click()
    //     //https://test.my-aip.com/ZDHCGateway/ForgotPassword.aspx?isForgotPassword=True
    //     cy.get('img').should('be.visible')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotPasswordTextBox').type('random')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt8').click()
    //     cy.get('#ValidationMessage_WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotPasswordTextBox')
    //     .should('have.text','Username or Email does not exist!')
   
    // })

    // it('TC-Login-009 | Login Forgot Password using valid User', function() {
    //     loginPage.enterLoginURL()
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotPassword > .Underline').should('have.text','Forgot Password?')
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotPassword > .Underline').click()
    //     //https://test.my-aip.com/ZDHCGateway/ForgotPassword.aspx?isForgotPassword=True
    //     cy.get('img').should('be.visible')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotPasswordTextBox').type('camille.vinluan@adec-innovations.com')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt8').click()
    //     cy.wait(2000)
    //     cy.get('.ThemeGrid_Width10').should('have.text','An email has been sent containing the details you need. Please check your email, if it does not show please also check your junk folders or spam filter.')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt10').click()
    //     cy.wait(2000)
    //     cy.get('#WebPatterns_wt16_block_wtUsername > div > .Login_Text').should('have.text','USERNAME')
    // })

    // it('TC-Login-010 | Login Forgot Password click back to Login', function() {
    //     loginPage.enterLoginURL()
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotPassword > .Underline').should('have.text','Forgot Password?')
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotPassword > .Underline').click()
    //     //https://test.my-aip.com/ZDHCGateway/ForgotPassword.aspx?isForgotPassword=True
    //     cy.get('img').should('be.visible')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt17').click()
    //     cy.wait(2000)
    //     cy.get('#WebPatterns_wt16_block_wtUsername > div > .Login_Text').should('have.text','USERNAME')
    // })

    // it('TC-Login-011 | Login Forgot Username Verification', function() {
    //     loginPage.enterLoginURL()
    //     cy.get('img').should('be.visible')
    //     cy.get('[style="font-size: 12px;"]').should('be.visible')
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotUsername > .Underline').click()
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotUserTextbox').should('be.visible')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt20').should('have.value','Retrieve my User Name')
    //     //issue: Correct value was Retrieve my User Name
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt17').should('be.value','Back to Login')
    //     cy.get('.loginfootertext').should('be.visible')
    // })

    // it('TC-Login-012 | Login Forgot Username using non-existing email', function() {
    //     loginPage.enterLoginURL()
    //     cy.get('img').should('be.visible')
    //     cy.get('[style="font-size: 12px;"]').should('be.visible')
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotUsername > .Underline').click()
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotUserTextbox').type('non-existing')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt20').click()
    //     cy.get('#ValidationMessage_WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotUserTextbox')
    //         .should('have.text','Invalid email!')
    // })

    // it('TC-Login-013 | Login Forgot Username using valid email', function() {
    //     loginPage.enterLoginURL()
    //     cy.get('img').should('be.visible')
    //     cy.get('[style="font-size: 12px;"]').should('be.visible')
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotUsername > .Underline').click()
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotUserTextbox').type('allanYan_supplier@mail.com')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt20').click()
    //     cy.wait(2000)
    //     cy.get('.ThemeGrid_Width10')
    //         .should('have.text','An email has been sent containing the details you need. Please check your email, if it does not show please also check your junk folders or spam filter.')
    //     cy.wait(2000)
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt10').click()
    //     cy.wait(2000)
    //     cy.get('#WebPatterns_wt16_block_wtUsername > div > .Login_Text').should('have.text','USERNAME') 
    // })

    // it('TC-Login-014 | Login Forgot Username > Back to Login button', function() {
    //     loginPage.enterLoginURL()
    //     cy.get('img').should('be.visible')
    //     cy.get('[style="font-size: 12px;"]').should('be.visible')
    //     cy.get('#WebPatterns_wt16_block_wtAction_wtForgotUsername > .Underline').click()
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wtForgotUserTextbox').should('be.visible')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt17').should('be.value','Back to Login')
    //     cy.get('#WebPatterns_wt8_block_wtUsername_AIPUsersandSecurityManager_wt5_block_wt17').click()
    //     cy.wait(2000)
    //     cy.get('#WebPatterns_wt16_block_wtUsername > div > .Login_Text').should('have.text','USERNAME') 
    // })



    // it('TC-Login-015 | Login Page as a Bureau Verification', function() {
    //     loginPage.enterLoginURL()
    //     loginPage.enterBureauUsername()
    //     loginPage.enterBureauPassword()
    //     loginPage.clickLogin()
    //     loginPage.navigationBureau()
    //     loginPage.blackPathHeader()
    //     loginPage.searchBarDefault()
    //     loginPage.tabBrowseBySubsctrate()

    // })

    // it.skip('TC-Login-016 | Login Page as a Supplier Verification', function() {
    //     loginPage.enterLoginURL()
    //     loginPage.enterSupplierUserName()
    //     loginPage.enterSupplierPassword()
    //     loginPage.clickLogin()
    //     loginPage.navigationSupplierAccountAdmin()

    //     // loginPage.completeNavigateSearch() // Validating Navigations
    //     // loginPage.blackPathHeader()
    //     // loginPage.yellowSurveyBanner() 
    //     // loginPage.searchBarDefault()
    //     // loginPage.tabBrowseBySubsctrate()

    // })


})



