export class LoginPage{

    //LOGIN URL CONFIGURATION
    login_env = 'test'

    //BUREAU Credentials
    bureauUsername = 'camille.vinluan@adec-innovations.com'
    bureauPassword = '12345'

    //Supplier Credentials
    supplierUsername = 'allanYan_supplier@mail.com'
    supplierPassword = '12345'

    //Brand Credentials
    brandUsername = 'walmart_brand@mail.com'
    brandPassword = '12345'


    
    
    username_textbox = '#UserNameInput'
    password_textbox = '#PasswordInput'
    Login_button = '#LoginButton'
    


    enterLoginURL(){
        // cy.visit('https://'+this.login_env+'.my-aip.com/zdhcgateway/') //old link
        cy.visit('https://'+this.login_env+'.my-aip.com/ZDHCLogin/') //refactored link
    }

    enterUserName(username){
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
        cy.wait(2000)
    }

    clickLogin(){
        cy.get(this.Login_button).click()
    }

    enterBureauUsername(){
        cy.get(this.username_textbox).type(this.bureauUsername)
    }

    enterBureauPassword(){
        cy.get(this.password_textbox).type(this.bureauPassword)

    }


    enterSupplierUserName(){
        cy.get(this.username_textbox).type(this.supplierUsername)
    }

    enterSupplierPassword(){
        cy.get(this.password_textbox).type(this.supplierPassword)
        cy.wait(2000)
    }

    enterBrandUsername(){
        cy.get(this.username_textbox).type(this.brandUsername)
    }

    enterBrandPassword(){
        cy.get(this.password_textbox).type(this.brandPassword)
    }


    navigationBureau(){
        this.navigateSearchExist()
        this.navigateDashboardExist()
        this.navigateUsersExist()
        this.navigateOrganisationsExist()
        this.navigateInvitesExist()
        this.navigateProductsExist()
        this.navigateIncheckExist()
        this.navigateConnectionsExist()
        this.navigateWaterdataExist()
        this.navigateVerificationExist()
        this.navigateTransactionsExist()
        this.navigateSubsciptionsExist()
        this.navigateConfigurationExist()
        this.navigateDataHubExist()
        this.navigateAdminToolsExist()
    }

    navigationSupplierAccountAdmin(){
        this.navigateSearchExist()
        this.navigateDashboardNotExist()
        this.navigateUsersExist()
        this.navigateOrganisationsNotExist()
        this.navigateInvitesExist()
        this.navigateProductsExist()
        this.navigateIncheckExist()
        this.navigateConnectionsExist()
        this.navigateWaterdataExist()
        this.navigateVerificationExist()
        this.navigateTransactionsExist()
        this.navigateSubsciptionsExist()
        this.navigateConfigurationExist()
        this.navigateDataHubExist()
        this.navigateAdminToolsExist()
    }

    navigateZDHCIcon(){
        cy.get('#wt57_wtMenu_wt1_wt148_wt2 > img')
            .should('have.attr','src','/ZDHCGateway/img/ZDHCGatewayUpdated.png?13801') // image path on Test ENV
            // .should('have.attr','src','/ZDHCGateway/img/ZDHCGatewayUpdated.png?13638') // image path on BETA ENV
    }

    navigateSearchExist() {
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt486_block_wtMenuItem_wtSearch')
            .should('exist') 
            .should('have.attr', 'href', '/ZDHCGateway/Search.aspx') // Assert href attribute
            .parent()
            .find('.MenuIcon')
            .should('exist') // Assert presence of MenuIcon class
            .find('.fa.fa-fw.fa-search')
            .should('exist') // Assert presence of search icon
            .parent() // Move back to the parent <a> element
            .next() // Move to the next sibling div (MenuText)
            .should('have.class', 'MenuText') // Assert presence of MenuText class
            .and('contain', 'Search') // Assert text content
    }

    navigateDashboardExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt322_block_wtMenuItem_wtDashboards').should('exist') 
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-dashboard')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Dashboards') // Assert text content
                .parent()
                .find('.angleIcon.Float_right.OSInline')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-angle-right')
    
    }

    navigateDashboardNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt322_block_wtMenuItem_wtDashboards').should('not.exist') 
    }

    navigateUsersExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt68_block_wtMenuItem_wtUsers').should('exist') 
                .should('have.attr', 'href', '/ZDHCProfile/UserList.aspx') // Assert href attribute
                .parent()
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-user')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Users') // Assert text content
    }

    navigateUsersNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt68_block_wtMenuItem_wtUsers').should('not.exist') 
    }

    navigateOrganisationsExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt133_block_wtMenuItem_wtAccount').should('exist') 
                .should('have.attr', 'href', '/ZDHCProfile/AccountList.aspx') // Assert href attribute
                .parent()
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-suitcase')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Organisations') // Assert text content
    }

    navigateOrganisationsNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt133_block_wtMenuItem_wtAccount').should('not.exist') 
    }

    navigateInvitesExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt358_block_wtMenuItem_wtInvite').should('exist') 
                .should('have.attr', 'href', '/ZDHCProfile/InviteLog.aspx') // Assert href attribute
                .parent()
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-sign-in')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Invites') // Assert text content
    }

    navigateInvitesNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt358_block_wtMenuItem_wtInvite').should('not.exist') 
    }

    navigateProductsExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt36_block_wtMenuItem_wtProduct').should('exist') 
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-flask')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Products') // Assert text content
                .parent()
                .find('.angleIcon.Float_right.OSInline')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-angle-right')
    
    }

    navigateProductsNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt36_block_wtMenuItem_wtProduct').should('not.exist') 
    }

    navigateIncheckExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt121_block_wtMenuItem_wtIncheck2').should('exist') 
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-check-square')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'InCheck') // Assert text content
                .parent()
                .find('.angleIcon.Float_right.OSInline')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-angle-right')
    
    }

    navigateIncheckNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt121_block_wtMenuItem_wtIncheck2').should('not.exist') 
    }

 

    navigateConnectionsExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt72_block_wtMenuItem_wtConnection3').should('exist') 
                .should('have.attr', 'href', '/ZDHCGateway/Connections.aspx') // Assert href attribute
                .parent()
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-link')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Connections') // Assert text content
    }

    navigateConnectionsNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt72_block_wtMenuItem_wtConnection3').should('not.exist') 
    }

    navigateWaterdataExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt565_block_wtMenuItem_wtWaterdataWithSubMenu').should('exist') 
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-tint')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Waterdata') // Assert text content
                .parent()
                .find('.angleIcon.Float_right')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-angle-right')
    
    }

    navigateWaterdataNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt565_block_wtMenuItem_wtWaterdataWithSubMenu').should('not.exist') 
    }

    navigateVerificationExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt220_block_wtMenuItem_wtVerifs').should('exist') 
                .should('have.attr', 'href', '/ZDHCCatalogue/VerificationCertificate.aspx') // Assert href attribute
                .parent()
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-file-text')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Verification') // Assert text content
    }

    navigateVerificationNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt220_block_wtMenuItem_wtVerifs').should('not.exist') 
    }

    navigateTransactionsExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt203_block_wtMenuItem_wtTransactions').should('exist') 
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-credit-card')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Transactions') // Assert text content
                .parent()
                .find('.angleIcon.Float_right.OSInline')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-angle-right')
    
    }

    navigateTransactionsNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt203_block_wtMenuItem_wtTransactions').should('not.exist') 
    }

    navigateSubsciptionsExist(){
        cy.get('#wt57_wtMenu_wt1_wt574_wtMenuItem_wtSubs').should('exist') 
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-dollar')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Subscriptions') // Assert text content
                .parent()
                .find('.angleIcon.Float_right.OSInline')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-angle-right')
    
    }

    navigateSubscriptionsNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_wt574_wtMenuItem_wtSubs').should('not.exist') 
    }

    navigateConfigurationExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt374_block_wtMenuItem_wtConfig2').should('exist') 
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-gear')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Configuration') // Assert text content
                .parent()
                .find('.angleIcon.Float_right.OSInline')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-angle-right')
    
    }

    navigateConfigurationNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt374_block_wtMenuItem_wtConfig2').should('not.exist') 
    }

    navigateDataHubExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt299_block_wtMenuItem_wtDownloadHub').should('exist') 
                .should('have.attr', 'href', '/ZDHCGateway/DataHub.aspx?Tabs=1') // Assert href attribute
                .parent()
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-arrow-circle-down')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Data Hub') // Assert text content
    }

    navigateDataHubNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt299_block_wtMenuItem_wtDownloadHub').should('not.exist') 
    }

    navigateAdminToolsExist(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt8_block_wtMenuItem_wtAdminTools').should('exist') 
                .find('.MenuIcon')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-wrench')
                .should('exist') // Assert presence of search icon
                .parent() // Move back to the parent <a> element
                .next() // Move to the next sibling div (MenuText)
                .should('have.class', 'MenuText') // Assert presence of MenuText class
                .and('contain', 'Admin Tools') // Assert text content
                .parent()
                .find('.angleIcon.Float_right.OSInline')
                .should('exist') // Assert presence of MenuIcon class
                .find('.fa.fa-fw.fa-angle-right')
    
    }

    navigateAdminToolsNotExist(){
        // Assert the presence of the child link within the div element
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt8_block_wtMenuItem_wtAdminTools').should('not.exist') 
    }

    navigateProfile(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt571_block_wtMenuItem_wtProfile')
                    .should('have.attr','href','/ZDHCProfile/ProfileLanding.aspx')
                    .find('span')
                    .should('have.class','fa fa-fw fa-newspaper-o')
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt571_block_wtMenuItem_wtProfile')
                    .find('div.MenuText')
                    .should('contain.text', 'Profile')
    }

    navigateUsers(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt68_block_wtMenuItem_wtUsers')
                    .should('have.attr','href','/ZDHCProfile/UserList.aspx')
                    .find('span')
                    .should('have.class','fa fa-fw fa-user')
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt68_block_wtMenuItem_wtUsers')
                    .find('div.MenuText')
                    .should('contain.text', 'Users')   
    }

    navigateInvites(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt358_block_wtMenuItem_wtInvite')
            .should('have.attr','href','/ZDHCProfile/InviteLog.aspx')
            .find('span')
            .should('have.class','fa fa-fw fa-sign-in')
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt358_block_wtMenuItem_wtInvite')
            .find('div.MenuText')
            .should('contain.text', 'Invites') 
    }

    navigateInCheck(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt121_block_wtMenuItem_wtIncheck2')
        .find('span')
        .should('have.class','fa fa-fw fa-check-square')
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt121_block_wtMenuItem_wtIncheck2')
        .find('div.MenuText')
        .should('contain.text', 'InCheck')
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt121_block_wtMenuItem_wtIncheck2')
        .find('span')
        .should('have.class','fa fa-fw fa-angle-right')
    }

    navigateConnections(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt72_block_wtMenuItem_wtConnection2')
                    .find('span')
                    .should('have.class','fa fa-fw fa-link')
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt72_block_wtMenuItem_wtConnection2')
                    .find('div.MenuText')
                    .should('contain.text', 'Connections')
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt72_block_wtMenuItem_wtConnection2')
                    .find('span')
                    .should('have.class','fa fa-fw fa-angle-right')
    }

    navigateWaterdata(){
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt572_block_wtMenuItem_wtWaterdata')
                    .should('have.attr','href','/ZDHCWaterdata/WaterData.aspx')
                    .find('span')
                    .should('have.class','fa fa-fw fa-tint')
        cy.get('#wt57_wtMenu_wt1_RichWidgets_wt572_block_wtMenuItem_wtWaterdata')
                    .find('div.MenuText')
                    .should('contain.text', 'Waterdata')
    }

    blackPathHeader(){
        cy.get('#wt57_wt14_WebPatterns_wt56_block_wtActionsLeft_wtBreadcrumbs_wtBreadcrumbs_WebPatterns_wt99_block_wtLevel1')
                    .should('have.text','Search')
        cy.get('#wt57_wt14_WebPatterns_wt56_block_wtActionsRight_wtLocaleClick')
                    .find('span')
                    .should('have.class', 'fa fa-fw fa-globe')
        cy.get('#wt57_wt14_WebPatterns_wt56_block_wtActionsRight_wtLanguageCode').should('contain.text','US')
        cy.get('#wt57_wt14_WebPatterns_wt56_block_wtActionsRight_wt162')
                    .should('have.attr','href','https://knowledge-base.roadmaptozero.com/hc/en-gb/categories/360003870658-Gateway')
                    .find('span')
                    .should('have.class','fa fa-fw fa-question-circle')
        cy.get('#wt57_wt14_WebPatterns_wt56_block_wtActionsRight_wt162')
                    .should('contain.text', 'Help & Support')
        cy.get('#wt57_wt14_WebPatterns_wt56_block_wtActionsRight_wticonbadgecontainer > .OSInline')
                    .find('span')
                    .should('have.class','fa fa-fw fa-bell')
        cy.get('#wt57_wt14_WebPatterns_wt56_block_wtActionsRight_wtusercontainer > .header-icons > span')
                     .should('have.class','fa fa-fw fa-user')
    }

    tabBrowseBySubsctrate(){
         // -- START OF TAB ASSERTION --
    cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtTab1')
       .should('have.class','Tabs__tab PH active') //to know that this is the active tab = Tabs__tab PH active
       .should('contain.text','BROWSE BY SUBSTRATE')
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtTab2')
       .should('not.have.class','Tabs__tab PH active') //assertion for inactive tab = does not contain active in Class
       .should('contain.text','BROWSE BY ORGANISATION TYPE')
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtTab3')
       .should('not.have.class','Tabs__tab PH active') //assertion for inactive tab = does not contain active in Class
       .should('contain.text','BROWSE BY CERTIFICATION')
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtTab4')
       .should('not.have.class','Tabs__tab PH active') //assertion for inactive tab = does not contain active in Class
       .should('contain.text','BROWSE BY  BRAND')
   // -- END OF TAB ASSERTION --

   // -- BROWSE BY SUBSTRATE --
   // Leather
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtContent1_wtListRecords1_ctl00_wt109')
       .find('img')
       .should('have.attr','src','/ZDHCGateway/_image.aspx/CmxhtqJQ7EmMqypNSGmRo3tsbIHO_QmIk3O568Oep7s=/')
       .and('have.css','height','90px')
       .and('have.css','width','90px')
   cy.get('div.category-text.OSInline')
       // Assert that the element exists
       .should('exist')
       .should('have.css', 'margin-top', '0px')
       .should('contain.text', 'Leather')
   // Synthetic
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtContent1_wtListRecords1_ctl02_wt109')
       .find('img')
       .should('have.attr','src','/ZDHCGateway/_image.aspx/CmxhtqJQ7EmMqypNSGmRoxFT1gj6zKtXSPjPC33HRQ8=/')
       .and('have.css','height','90px')
       .and('have.css','width','90px')
   cy.get('div.category-text.OSInline')
       .should('exist')
       .should('have.css', 'margin-top', '0px')
       .should('contain.text', 'Synthetic')
   // Textile
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtContent1_wtListRecords1_ctl04_wt109')
       .find('img')
       .should('have.attr','src','/ZDHCGateway/_image.aspx/CmxhtqJQ7EmMqypNSGmRozGW8eOqE5Fe_ptAowh4Vq4=/')
       .and('have.css','height','90px')
       .and('have.css','width','90px')
   cy.get('div.category-text.OSInline')
       .should('exist')
       .should('have.css', 'margin-top', '0px')
       .should('contain.text', 'Textile')
   // Adhesives
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtContent1_wtListRecords1_ctl06_wt109')
       .find('img')
       .should('have.attr','src','/ZDHCGateway/_image.aspx/CmxhtqJQ7EmMqypNSGmRo1tkoYEnXo0-PjvthzQbOyg=/')
       .and('have.css','height','90px')
       .and('have.css','width','90px')
   cy.get('div.category-text.OSInline')
       .should('exist')
       .should('have.css', 'margin-top', '0px')
       .should('contain.text', 'Adhesives')
   // Foams
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtContent1_wtListRecords1_ctl08_wt109')
       .find('img')
       .should('have.attr','src','/ZDHCGateway/_image.aspx/CmxhtqJQ7EmMqypNSGmRo3t5SlqKWdgODOEl8I1lsio=/')
       .and('have.css','height','90px')
       .and('have.css','width','90px')
   cy.get('div.category-text.OSInline')
       .should('exist')
       .should('have.css', 'margin-top', '0px')
       .should('contain.text', 'Foams')
   // Rubber
   cy.get('#wt57_wtMainContent_WebPatterns_wt47_block_wtContent1_wtListRecords1_ctl10_wt109')
       .find('img')
       .should('have.attr','src','/ZDHCGateway/_image.aspx/CmxhtqJQ7EmMqypNSGmRo9yZcr1z51_YQBiJX0eiVcQ=/')
       .and('have.css','height','90px')
       .and('have.css','width','90px')
   cy.get('div.category-text.OSInline')
       .should('exist')
       .should('have.css', 'margin-top', '0px')
       .should('contain.text', 'Rubber')


    }

    yellowSurveyBanner() {
        cy.get('div[style="height: 46px; padding: 14px 0px 0px 0px;background: #ffb300;color:#0D0D0D;"]')
        .should('exist')

    // Assert the presence of the child link within the div element
    cy.get('div[style="height: 46px; padding: 14px 0px 0px 0px;background: #ffb300;color:#0D0D0D;"]')
        .find('a')
        .should('have.attr', 'href', 'https://forms.gle/3ZL2giZ8gaeSBSZ48') // Assert href attribute
        .and('have.attr', 'target', '_blank') // Assert target attribute
        .and('have.attr', 'tabindex', '143') // Assert tabindex attribute
        .and('have.attr', 'style', 'color: inherit; text-decoration: none;') // Assert style attribute
        .find('span')
        .should('have.css', 'font-size', '17px') // Assert CSS style
        .and('have.css', 'color', 'rgb(13, 13, 13)') // Assert CSS color
        .and('have.text', 'Participate in our quick ZDHC Gateway user survey! We value your feedback.');  
  
    }


    searchBarDefault(){
        cy.get('.Header1').should('contain.text','A Solution for the Entire Industry')
        cy.get('input[name="wt57$wtMainContent$wt15$wtLabelField"]')
             .should('have.attr', 'placeholder', 'SEARCH');
        cy.get('#wt57_wtMainContent_wt15_wt24').should('be.visible')
    }

    
}