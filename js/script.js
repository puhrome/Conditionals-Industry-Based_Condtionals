/**
 * Conditionals Personal Created by Phirom Yim on 5/22/14.
 */

var memoryCard = 16;//define memory card gigs for DSLR
//user input how large the files are in gigs
var photos = Number (prompt ("How many photos have you taken?"));
//create a variable to calculate the amount left by the percentage of new files will take up in hard drive
//total storage is files divided by hard drive and multiplied by 100 to get percentage
if (photos){// if condition is true
    console.log ("You have taken " + photos);//print to console
}else if(photos < 1 || photos > 640){//if condition is false and number is between 1 and 50
    console.log("You entered an invalid number");//print to console
    alert("You entered a number less than 1 or greater than 640");//alert string
}
var photoRaw = 40 * memoryCard; // rough estimated number of RAW photos that a 16 gig memory card hold
var storageLeft = photoRaw - photos;//the storage needed is the raw photos minus user input amount file gigs
//create variable expression for calculating the storage percentage
//storage percent is calculated by the amount of needed storage by 16 gig times 100
var storagePercent = storageLeft / photoRaw * 100;
//create a variable to calculates how much storage is being used
//to find out how much storage is used from 16gig (100%) subtract storage percent by 100
var storageUsed = 100 - storagePercent;
//create a variable that calculates how much is left on the hard drive
//16 gig is 100 percent and subtract how many photos taken to get remaining photos left
var memSpace = 100 - storageUsed;
//create ternary to print if true or else statement if false
(memSpace >= storageUsed) ? console.log("You have enough memory for more photos"): console.log("Sorry you are at" + " " + storagePercent + "% total storage");
//create alert for statement of how much storage is left on memory card
alert("You have " + " " + storagePercent + "% total storage left");//alert how much space is left
