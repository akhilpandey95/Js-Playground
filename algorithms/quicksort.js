/* Quick Sort : 
 * It is the finest algorithm to sort large data sets 
 * and works on the divide and conquer algorithm that
 * breaks a list of data into succesively smaller sub
 * lists consisting of the smaller elements as well as
 * the larger elements.
 */
function quicksort(arr)
{
	if(arr.length == 0) {
		return [];
	}
	var leftarray = [];
	var rightarray = [];
	var pivot = arr[0]; // since the first element is choosen as pivot
	for(var i = 0; i<arr.length; i++)
	{
		console.log("The pivot element : " + pivot + "And curr element is " + arr[i] );
		if(arr[i] < pivot ) {
			console.log("Moving the element : " + arr[i] + "to the left " );
			leftarray.push(arr[i]);
		}
		else {
			console.log("Moving the element : " + arr[i] + "to the right" );
			rightarray.push(arr[i]);
		}
	}
	return quicksort(leftarray).concat(pivot , quicksort(rightarray));
}

// Either generate a random list or give a desired list of values

var store = [];

for(var i = 0; i < 20; i++){
	var a = Math.random()*200,
	b = Math.floor( a + 2 );
	store[i] = b;
}

console.log("The elements are ");
console.log(store);
quicksort(store);
