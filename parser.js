const nightmare = require('nightmare')();
const args = process.argv.slice(2);
const checkPrice = args[0];

async function checkValue() {
    const val = await nightmare.goto('https://articulo.mercadolibre.com.ar/MLA-779978391-zapatillas-nike-sb-check-solarsoft-hombre-nike-sb-_JM')
                                .wait('.price-tag-fraction')
                                .evaluate(() => document.getElementsByClassName('price-tag-fraction')[0].textContent)
                                .end();

    const nikeSbShoePrice = parseFloat(val)

    if (nikeSbShoePrice > 8000) {
    console.log('Uff paso los 8 mil pesos');  
    } else {
        console.log('todavia cuestan menos de 8 mil');
    }
    if (10 < checkPrice) {
       console.log('tu num es mayor que 10');
    } else {
        console.log('no es mayor que 10');
    }
}
checkValue();