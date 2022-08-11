## Gem Run Game Project

This project showcases some advanced patterns in Object-Oriented Programming with inheritance. You will most likely not stumble upon these patterns in front-end web development. Nevertheless, we wanted you to see how powerful it can get!

You're building the logic behind a theoretical game called Gem Run. In this game, the player can collect <b> Coins </b> and <b> Gems. </b>

You can simulate collecting a coin or a gem by clicking on the respective buttons.

Every collected coin is worth a score of 10, and, every gem collected is worth a score of 50.

So, let's say you've got 10 coins and 2 gems, your score will be 10 _ 10 + 2 _ 50 = 200.

While you are able to implement this logic in several ways, you have to follow the below requirements to pass the tests. This is to showcase an advanced example of inheritance.

## Requirements

Every step has a set of hints that you can read by clicking on the get a hint button. They are labeled based on the section and sub-section number. For example, A.1. for the first task below.

## A. Collectible class

In <b> collectible.js, </b> we've defined a class Collectible. This is going to be a parent class that other classes (Coin and Gem) will inherit from.

The reason we have this parent class is because Coin and Gem have a lot of shared behavior/functionality. They are both "collectible" during a game, and, they both affect the score (though, they both have a different "worth").

The Collectible class should have a constructor and receive the name and the worth. An example of name is "coin". And, an example of worth is 10. So, later on, we'll say that a Coin is a Collectible with name = "coin" and worth = 10. Also, a Gem is a Collectible with name = "gem" and worth = 50.

Once you define the constructor, you should capture the 2 parameters and save them.

Also, you should define a new instance variable that holds the count and set it to 0. Later on, when the player collects a coin, for example, we'll increment this counter.

#### Implement the collect() method. This method will increase the variable of the count instance variable by 1 (always, because you can only collect 1 collectible at a time).

#### Implement the getScore() method. This method should return a number representing the score value of this collectible. So, if the user has collected 5 coins, it should return the result of 5 _ 10 (since coins have a worth of 10). Another example, if the user has collected 2 gems, it should return 100 (since gems have a worth of 50, so that's the result of 2 _ 50).

#### Implement the getCollectedMessage() method. This method will return a string that looks like this: X Ys collected where X is replaced by the count collected and Y replaced by the name of the collectible. So, for example, if the user collected 5 gems, it would return: 5 gems collected.

<strong> Note: for all the methods above, you should not use if conditions. That's because you've got the instance variables this.name and this.worth. </strong>

## B. Coin and Gem classes

A Coin is a type of Collectible. So is a Gem. So, you should update the 2 classes so that they inherit from Collectible.
This will allow an instance of the Coin class to have methods such as collect(), getCollectedMessage(), and getScore() (because they get inherited).

Take a look at the code under USAGE OF CLASSES in the index.js. The coin is instantiated as const coin = new Coin() and the same for the gem: const gem = new Gem(). So, you need to update the constructor() for the Coin and Gem classes such as it calls the parent's constructor and specifies the name and the worth.
As a reminder, the Coin has a name of "coin" and worth of 10. And, the Gem has a name of "gem" and worth of 50.

Make sure to try collecting some Gems/Coins in the browser tab.

## C. GameScore class

The goal of the GameScore class is to show the score of the player. The code for this class has to go in the game-score.js file.

Start by taking a look again at the code under USAGE OF CLASSES in index.js. Notice how we create a new instance of GameScore and then we call gameScore.addCollectible(coin) and gameScore.addCollectible(gem). We're telling gameScore that we're dealing with these 2 kinds of collectibles.

#### Define the constructor() of GameScore. The constructor() receives no parameters. However, it should create an instance variable called collectibles and set it to an empty array. This array will later hold the collectibles once we call gameScore.addCollectible(coin).

#### Implement the addCollectible(collectible) method. This method receives a collectible (an instance of a class that inherits from Collectible, for example, a coin or a gem). It should add the collectible it receives to the collectibles instance variable. So, every time you call this function, it adds the collectible to the existing collectibles.

#### Last but not least, you should implement the getTotalScore() method. This method should go through every collectible, call the getScore() method on that collectible and then return the sum of all of these numbers. So, in our example, we have 2 collectibles. It should go through both of these collectibles, call getScore() on both of them and return the sum of these 2 numbers. This will be the score that shows up in the navbar.

Closing notes
This is an advanced project. It's also the result of writing code that has a lot of duplication and then realizing that it has a lot of duplication. So, we first wrote the Coin class and the Gem class (without Collectible). Then, we realized that these 2 classes share a lot of code which is when we refactored it into a Collectible class.
The code might seem over-complicated for the current game, however, should you need to add a 3rd or 4th type of collectible (for example a Trophy worth 100 points), it'll be as easy as defining a new class and adding that instance to the collectibles.
