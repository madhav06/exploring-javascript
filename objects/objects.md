<h2>Objects in JavaScript</h2>

<pre>
Objects, in JavaScript is its most importantdata-type and forms the building blocks for modern JavaScript.
</pre>

* Objects are complex in the sense that they may contain primitive data-types as well as reference data-types. 

* Variable that are assigned a reference value are given a pointer to that value.

* That pointer points to the location in the memory where the object is stored.

* In short, We can say: objects in JavaScript may be defined as an unordered collection of related data, of reference types, in the form of "key: value" paiers.

* An object can be created with figure brackets {...} with an optional list of properties.

<pre>
//Example

letschool = {
    name: "H.B.Kapadia Higher Sec School",
    location: "Ahmedabad",
    established: "1993"
}
</pre>

* An object in JavaScript may also have a function as a member, in which case it will be known as method of that object.

<pre>
//Example

letschool = {
    name: "H.B.Kapadia Higher Sec School",
    location: "Ahmedabad",
    established: "1993",
    displayInfo: function() {
        console.log(`${school.name}` was established in ${school.established} at ${school.location}`)
    }
}
school.displayInfo();
</pre>

* Inherited Properties

<pre>
Properties which have been inherited from the object's prototype. To verify if a property is an object Own property, we can use the hasOwnProperty method.
</pre>
* Property Attributes

<pre>
value: property value

writable: property value can be changed.

enumerable: property can be iterated over by "for-in" enumeration. otherwise said non-enumerable.

configurable: If false, attempts to delete the property, change the property to be an access-or property, or change its attributes or changing will fail.
</pre>

<pre>
//Example

const object1 = new Object();
object1.property1 = 42;
console.log(object1.hasOwnProperty('property1'));
</pre>

<h4>Creating Objects</h4>

* Using Object literal syntax

<pre>
Object literal syntax: {....} notation to initialize an object and its method/properties directly.

//Example

var obj {
    member1: value1,
    member2: value2,
};

These members cab be - strings, numbers, functions, arrays or objects. 
</pre>

* Using Constructors syntax

<pre>
Object constructor syntax: Object constructor create an object wrapper for the given value. Used with new keyword and allow us to initialize new objects.

//Example

const school = new Object();
school.name = 'Vivekanada school';
school.location = 'Delhi';
school.established = 1971;

school.displayInfo = function(){
	console.log(`${school.name} was established
		in ${school.established} at ${school.location}`);
}

school.displayInfo();

</pre>

<pre>
// Constructor example

function Vehicle(name, maker) {
this.name = name;
this.maker = maker;
}

let car1 = new Vehicle('Fiesta', 'Ford');
let car2 = new Vehicle('Santa Fe', 'Hyundai')

console.log(car1.name); // Output: Fiesta
console.log(car2.name); // Output: Santa Fe

// NOTE: Having more than one function in a class with the name of constructor() results in an error.

</pre>

* Using Prototypes syntax

<pre>
Another way to create objects involves using prototypes. Every JavaScript function has a prototype object property by default(it is empty by default). Methods or properties may be attached to this property.
</pre>

* SYNTAX

<pre>
let obj = Object.create(prototype_object, propertiesObject[optional]);
</pre>

* Example

<pre>
let footballers = {
	position: "Striker"
}

let footballer1 = Object.create(footballers);

// Output : Striker	
console.log(footballer1.position);

</pre>

<h4>Accessing Object Members </h4>

<pre>
Using dot notation: 

(objectName.memberName)
</pre>

<pre>
//Example

let school = {
	name : "Vivekanada",
	location : "Delhi",
	established : 1971,
	20 : 1000,
	displayinfo : function() {
		console.log(`${school.name} was established
		in ${school.established} at ${school.location}`);
	}

}

console.log(school.name);

console.log(school.established);

</pre>

<pre>
Using Bracket notation: 

objectName["memberName"]

</pre>

<pre>

//Example

let school = {
	name : "Vivekanada School",
	location : "Delhi",
	established : 1995,
	20 : 1000,
	displayinfo : function() {
		document.write(`${school.name} was established
		in ${school.established} at ${school.location}`);
	}
}

// Output : Vivekanada School
console.log(school['name']);

// Output: 1000
console.log(school['20']);

</pre>

<h4>Iterate all keys of an Object </h4>


<pre>
To iterate over all existing enumerable keys of an object, we may use the for...in construct. 
It is worth noting that this allows us to access only those properties of an object which are enumerable.
</pre>

<pre>
// Example

let person = {
	gender : "male"
}

var person1 = Object.create(person);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Australian";

for (let key in person1) {
// Output : name, age, nationality
// and gender
	console.log(key);
}		
</pre>

<h4>Deleting Properties</h4>

<pre>
To Delete a property of an object we can make use of the delete operator. An example of its usage has been listed below:
</pre>

<pre>
// Example

let obj1 = {
	propfirst : "Name"
}

// Output : Name
console.log(obj1.propfirst);
delete obj1.propfirst

// Output : undefined
console.log(obj1.propfirst);		
</pre>

<pre>
// NOTE: It is important to note that we can not delete inherited properties or non-configurable properties in this manner.

// Example

let obj1 = {
	propfirst : "Name"
}
// Output : Name
console.log(obj1.propfirst)
let obj2 = Object.create(obj1);

// Output : Name
console.log(obj2.propfirst);
	
// Output : true.
console.log(delete obj2.propfirst);

	// Surprisingly Note that this will return true
	// regardless of whether the deletion was successful

	// Output : Name	
	console.log(obj2.propfirst);


</pre>


