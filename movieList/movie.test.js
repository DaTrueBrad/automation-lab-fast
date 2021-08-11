const { Builder, Capabilities, By } = require('selenium-webdriver');
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => await driver.get('http://localhost:5500/movieList/index.html'));

test('testing, testing', async () => {
    let addMovie = await driver.findElement(By.xpath('//input'))
    let movie1 = 'inception'

    await addMovie.sendKeys(`${movie1}\n`)
    await driver.sleep(2000)

    await driver.findElement(By.xpath('/html/body/main/ul/li/span')).click()
    await driver.sleep(2000)

    await driver.findElement(By.id(`${movie1}`)).click()
    await driver.sleep(2000)
})

afterAll(async () => driver.quit());