/*

PROJECT REQUIREMENTS
---------------------
1. Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account.

2. After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

*/


/*  TO DO LIST

Calculate total price of an X number of phones
  (20 euros) -> 20 euros
  (20 euros + 20 euros) -> 20 euros

When you run out of money you can't purchase more phones
 (20euros > 10 euros) -> true
 (10 euros < 30 euros) -> false

Calculate tax of the whole purchase and return it with the right divisa

*/

describe("Application", function () {
  let totalPrice;
  let phonePrice;
  let tax;
  let savedMoney;

  function addPhones(totalPrice,phonePrice) {
    return totalPrice += phonePrice
  }


  function compareWithSavedMoney(savedMoney, totalPrice) {
    if(savedMoney > totalPrice) {
      return true
    }
    return false
  }

  function calculateTax(totalPrice, tax) {
    const taxedPrice = totalPrice * tax
    return `${taxedPrice}€`
  }



  it("allows to add phone price", function () {
   expect(addPhones(0, 10)).toBe(10)
 });

 it("shows when you can't add more phones", function () {
  expect(compareWithSavedMoney(20, 10)).toBe(true)
  expect(compareWithSavedMoney(0, 10)).toBe(false)
});


 it("calculates the tax of the whole purchase", function () {
  expect(calculateTax(0.21, 100)).toBe('21€')
});


});
