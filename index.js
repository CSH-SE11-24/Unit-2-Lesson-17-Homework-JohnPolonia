const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let favRestaurant = {
  name: "Cipriani",
  cuisine: "Italian",
  rating: 10
}

// Console log the restaurant's name using the object
console.log(favRestaurant.name)


// Add a new key called location and add the restaurant's location
favRestaurant.location = "West Balcony Grand Central Terminal, 89 E 42nd St, New York, NY 10017"


// Change the rating of the restaurant to increase it by one
favRestaurant.rating = favRestaurant.rating + 1


// Add a new key called test and set the value to null
favRestaurant.test = null

// Delete the test key
delete favRestaurant.test


// Console log the object to see if the test key is gone
console.log(test)



// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

console.log("The name of the restaurant is " + favRestaurant.name)
console.log("The cuisine of the restaurant is " + favRestaurant.cuisine)
console.log("The rating I give this restaurant is " + favRestaurant.rating)
console.log("The location of this restaurant is " + favRestaurant.location)



