//
// Selenium-Webdriver
// Für die notwendige Ausführung muss man den driver von npmjs.com/package/selenium-webdriver installieren
// 

const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

let driver;

openGoogle();

async function openGoogle() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://www.google.com');
    await click('Ich stimme zu');

    //Findet das Element mit dem Namen 'q' = das Element ist die Sucheingabe von Google

    await driver.findElement(By.name('q')).sendKeys('web.de', Key.RETURN);
}

//Diese Funktion sucht im gesamten Element (in dem Fall auf der Seite von Google) den oben angegebenen Text ('Ich stimme zu'). Hierfür wird xpath benötigt

async function click(text) {
    await driver.findElement(By.xpath("//*[text()='" + text + "']")).click();
}