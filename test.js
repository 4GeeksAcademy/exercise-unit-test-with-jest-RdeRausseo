const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test ('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23)
})

//Test de FromEurtoToDollar
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

//FromDollarToYen
test('One dollars should be 152.95 yen', () =>{
    const yen = fromDollarToYen(1);
    const expected = 1  * 152.95;
    expect(yen).toBe(expected);
})

//fromYenToPound
test('one pound should be 197.84 yen ', () => {
    const pound = fromYenToPound(1); 
    expect(pound).toBe(197.84);
})