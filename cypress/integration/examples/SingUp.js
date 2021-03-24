describe('Sign_Up', () => {


    it('Sing Up', () => {



        cy.visit('https://dev.routetitan.com//')


        cy.xpath('//*[@id="__next"]/div[1]/div/div/div/a[7]').click()
        cy.wait(2000)


        //sign up 


        cy.get('[name="fullName"]').type('Test')

        cy.get('[name="companyName"]').type('Quality')




        cy.get('[name="email"]')
            .type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text + '@gmail.com';


        }


        cy.get('[name="password"]')
            .type("@test55")
            .should('have.value', '@test55');




        cy.get('.MuiButton-label').contains('Create account').click();


        cy.wait(3000)
        cy.get('[data-test-id="button-primary"]').click()
        cy.xpath('//*[@id="react-joyride-step-1"]/div/div/div[1]/button').click()
        cy.xpath('/html/body/div[5]/div[3]/div/div[3]/button[2]').click()



    })

    it('Billing Upgrade', () => {


        cy.xpath('/html/body/div[4]/div/div[2]/ul/div[6]/div[2]/span').click()
        cy.get('[data-cy=billing-plan] > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.xpath('/html/body/div[5]/div[2]/div/div/div[2]/div/div[2]/div[1]/a/button/span[1]').click()
        cy.xpath('/html/body/div[5]/div[2]/div/div/div[2]/div[2]/div/div/div[3]/button').click()

        //iframe
        cy.get('[name="address"]').type('Quality')
        cy.get('[name="city"]').type('Yerevan')
        cy.get('[name="region"]').type('Yerevan')
        cy.get('[name="zipcode"]').type('040')

        cy.get('[name="cardholderName"]').type('Quality')


        cy.get('Iframe').then(function ($iframe) {

            const $body = $iframe.contents().find('body')

            cy.wrap($body)
                .find('[name="cardnumber"]').first().type('4242 4242 4242 4242')
        });

        cy.get('Iframe').then(function ($iframe) {

            const $body = $iframe.contents().find('body')


            cy.wrap($body)
                .find('[name="exp-date"]').type('05/25')

        })
        cy.get('Iframe').then(function ($iframe) {

            const $body = $iframe.contents().find('body')




            cy.wrap($body)
                .find('[name="cvc"]').type('123')

        });



        cy.xpath('/html/body/div[5]/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/button').click()
        cy.wait(8000)

        cy.xpath('/html/body/div[5]/div[2]/div/div/div[3]/div/div/div[2]/div/p[1]', { timeout: 10000 }).contains('Thank you for subscribing to Routitan!')
        cy.xpath('/html/body/div[5]/div[2]/div/div/div[3]/div/div/div[3]/button/span[1]').contains('Done').click()
    });


})