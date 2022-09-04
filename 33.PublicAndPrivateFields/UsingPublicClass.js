/*Refactor the BookSale class to use public class fields.
Eventually, you should be able to get rid of the constructor().
*/

class BookSale {
    
        amount = 1000; // US cents
        currency = "usd";
        isStudent = false;
    

    applyStudentDiscount() {
        this.isStudent = true;
        this.amount = 800;
        return this;

    }

    setCurrency(currency) {
        this.currency = currency;
        return this;
    }

    applyPercentageDiscount(percent) {
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
}

// Sample usage - do not modify
const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency("eur").applyPercentageDiscount(5);