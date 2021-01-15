//week1 
var shopper = {
    firstName: "Crystal",
    lastName: " Sage",
    rewards: 80,
    rewardShopper: true,
    groceryCart: [ " Salmon", " Beef", " Chicken" ] ,
    listCartItems: function (){
        return shopper.firstName + shopper.lastName + " recently bought" + shopper.groceryCart + " and used her rewards points to save the dollar amount of " + this.rewards +"."
    }
}
console.log( shopper.listCartItems() );