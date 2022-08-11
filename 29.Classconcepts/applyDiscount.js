/**
We've created a class Discount that has an instance method isValid() which has a chance of returning true 50% of the time. 
When we call the instance method applyDiscount(), it checks if the discount isValid() and then applies the discount.

However, we recently realized that we need to call the isValid() method without having a class instance. 
You can see that in the first line of the sample usage which is currently failing.

Update the isValid() method to make it possible to be called without an instance variable.
Update the applyDiscount() implementation which will break after you implement the task above.
 */

class Discount {
    constructor() {
        this.amount = 1000;
    }

    applyDiscount() {
        if(Discount.isValid()) {
            this.amount = 500;
        }
    }

    static isValid() {
        return Math.random() <= 0.5;
    }
}

console.log(Discount.isValid());
const discount = new Discount;
discount.applyDiscount();

console.log(discount.amount);