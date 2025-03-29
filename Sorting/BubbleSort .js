

function bubbleSortRecursive(arr , n){
    // If the array size is one or less, no sorting is needed
    
    if(n == 1 ) return ;

    for(let i=0 ;i < n-1 ; i++){
        if(arr[i]>arr[i + 1]){
            let temp =arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
        }
    }
    bubbleSortRecursive(arr , n - 1)


}
let array = [5,3,2,8,1,9,6,4,7]
console.log('Orginal arr',array)
bubbleSortRecursive(array , array.length)
console.log( 'Sorted arr' , array)


//If the size of the array is one or less, it does not return recursively because it does not need to be sorted.

//On each pass, the largest element is moved to the end of the array.

//The function is then called recursively for the rest of the array to sort the remaining elements.