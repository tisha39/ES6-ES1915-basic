let arrowFunction = (a,b,c) => a*b*c ;
// console.log(arrowFunction(2,3,6)) ;


let result = `I am a web developer .
I love to code .
I love to eat biriyani .
`
// console.log(result)

let arrFunc = (a=10,b=20) => a+b ;
// console.log(arrFunc(5))

let friends = [ 'tamu', 'momo', 'tua', 'kuri' ] ;

let evenFriendChecker = (array) => {
    let evenFriends = [] ;
    for(let friend of array){
    if(friend.length % 2 === 0){
        evenFriends.push(friend) ;
    }
    } 
    return evenFriends ;
}
// console.log(evenFriendChecker(friends)) ;


let squareAvarage = (array) => {
    let sqrArrSum = 0 ;
for(let arr of array){
    let sqr = arr*arr ;
    sqrArrSum = sqrArrSum + sqr ;
    console.log(sqrArrSum)
}
let avrg = sqrArrSum / array.length ;
return avrg ;
}

// console.log(squareAvarage([1,2,2,3]))


let arr1 = [20,36,10,12,24]
let arr2 = [29,33,15,22,34]

let arrayMax = (array1,array2) => {
    let newArray = [...array1,...array2] ;
    console.log(newArray) ;
    let max = Math.max(...newArray) ;
    return max ;
}
console.log(arrayMax(arr1,arr2))