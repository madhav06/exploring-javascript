/**
Payment processors (such as Stripe), often ask you to charge the amount in cents rather 
than in dollars to avoid decimal issues in programming languages (for example, to charge 1 
USD, you ask Stripe to withdraw 100 cents).

Update the class Payment to set an internal instance variable called _cents that reflects 
the cent value from the amount it receives. So, for example, creating a const payment = new Payment(1) or 
changing the amount with payment.amount = 10 should set an _cents instance variable to 100 (cent equivalent).

Note that we do check the value of _cents in the tests to make sure you've followed the requirements of the challenge.
*/

class Payment {
    /**
     * @param {number} amount
     */

    constructor(amount) {
        this.amount = amount;
    }

    get amount() {
        return this._cents;
    }

    set amount(value) {
        this._cents = value * 100;
    }
}

// Sample

const payment = new Payment(10);
console.log(payment.amount);

payment.amount = 7;
console.log(payment.amount);