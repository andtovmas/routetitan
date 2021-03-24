describe('Sign In', () => {


    it('Sign In', () => {



        cy.visit('https://dev.routetitan.com//')


        cy.xpath('//*[@id="__next"]/div[1]/div/div/div/a[6]').click()
        cy.wait(2000)



        cy.get('[name="email"]').type('aaa@gmail.com')

        cy.get('[name="password"]').type('123456')
        cy.xpath('/html/body/div[2]/div[3]/div/div/form/div[4]/button/span[1]').click()
        cy.wait(3000)
    })


    it('Add Drivers', () => {



        cy.xpath('/html/body/div[4]/div/div[2]/ul/div[3]/div[2]/span').click()
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div[3]/div/div[1]/div/button/span[1]').click()

        //upload file 
        const filePath = 'sample-drivers.xlsx'

        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[3]/div/div/div[2]/div[2]/div/div[1]').attachFile(filePath, { subjectType: 'drag-n-drop' })
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[3]/div/div/div[2]/div/div[2]/button[2]').click()



    })






})