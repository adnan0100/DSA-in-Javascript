// Array Basics

// let arr=[2,4,6,8,10];
// console.log(arr)
// for (let i= 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// Length of Array

// let fruits=["Apple","Banana","Orange","Grapes"]
// console.log(fruits.length)

// Sum of array

// let arr1=[12,10,2,4,6]
// let sum=0;
// for(i=0;i<arr1.length;i++)
// {
//     sum+=arr1[i]
// }
// console.log(sum)


// Largest Element in Array
// let array=[15,5,10,22,17,19]
// let largest=array[0]
// for(i=0;i<array.length;i++)
// {
//   if(array[i]>largest)
//   {
//     largest=array[i]
//   }
// }
// console.log(largest)

// Reverse Array

// let arr2=[12,34,14,35,67]
// arr2.reverse()
// console.log(arr2)

//First and last Element of Array
// let arr=[10,13,19,23,5]
// console.log("First Element of array is " + arr[0])
// console.log("Last Element of array is " + arr[arr.length-1])

// Check if specific Element exists in array
// let array1=[12,34,20,78,37]
// let elementtofind=36
// let result=false
// for (let i = 0; i < array1.length; i++) {
    
//     if(array1[i]===elementtofind){
//        result= true
//     break;
//     }
// }
//console.log(result)

// Length of array

// let arr=[23,12,45,6,8,9]
// console.log(arr.length)

// Smallest element of array

// let array=[15,5,10,22,17,19]
// let smallest=array[0]
// for(i=1;i<array.length;i++)
// {
//   if(array[i]<smallest)
//   {
//     smallest=array[i]
//   }
// }
// console.log(smallest)

// count even odd in array

// let arr=[23,12,24,57,10,25,18]
// let evencount=0;
// let oddcount=0;
// for (let i= 0; i < arr.length; i++) {
    
//     if(arr[i]%2==0)
//     {
//         evencount++
//     }
//     else 
//     {
//        oddcount++
//     }

// }

// console.log("Total number of even numbers are: " + evencount);
// console.log("Total number of odd numbers are: " + oddcount);

// Find numbers greater than specific value

// let array1=[23,17,34,46,22,5]
// let value=20
// console.log("The values greater than " + value + "are")
// for (let i = 0; i < array1.length; i++) {
    
//     if(array1[i]>value)
//     {
//         console.log(array1[i])
//     }
// }
   
// Specific Element Appears in an Array

// let arr2=[20,17,25,10,55,25,10]
// let target=10
// let count=0
// for (let i= 0; i < arr2.length; i++) {
//     if(arr2[i]==target)
//     {
//         count++
//     }
// }
// console.log("The element " + target + " appears " + count + " times.");

//Sum of odd numbers in array

// let arr3=[23,12,24,17,45,96]
// let sum=0
// for (let i = 0; i< arr3.length; i++) {
//     if(arr3[i]%2!=0)
//     {
//         sum+=arr3[i]
//     }
    
// }
// console.log("The sum of odd numbers in array are " + sum )
    
// checks if all numbers in array are positive
// let arr = [23, 13, 88, 54, 12];
// let allPositive = true; 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//         allPositive = false; 
//         break; 
//     }
// }

// if (allPositive) {
//     console.log("All numbers in the array are positive.");
// } else {
//     console.log("Not all numbers in the array are positive.");
// }

// Index of a Target Element
let arr=[12,23,17,44,56,29,48]
let target=17
let found=false
for (let i = 0; i < arr.length; i++) { 
    if(target==arr[i])
    {
        console.log("The target element " + target + " is at index: " + i);
        found=true
        break;
    }
}
if(!found)
{
    console.log("The element does not found")
}
