/*Refactor book sale II
Let's improve the BookSale class by making the three instance variables private.

This allows you to prevent these instance variables 
from being changed from the outside. They can only be 
changed from inside the class. In this example, the applyStudentDiscount, setCurrency, and applyPercentageDiscount methods.
*/

class BookSale {
    #amount = 1000; // US cents
    #currency = "usd";
    #isStudent = false;

    applyStudentDiscount() {
        this.#isStudent = true;
        this.#amount = 800;
        return this;
    }

    setCurrency(currency) {
        this.#currency = currency;
        return this;
    }

    applyPercentageDiscount(percent) {
        this.#amount = this.#amount - this.#amount * percent / 100;
        return this;
    }
    
    getAmount() {
        return this.#amount;
    }
}

// Sample usage - do not modify
const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency("eur").applyPercentageDiscount(5);