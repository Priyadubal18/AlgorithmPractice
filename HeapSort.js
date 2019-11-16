function heapSort(arr) {
    // build the max heap
    // replace the element with last and reduced the size of array
    //do till size of array = 1
    let n = arr.length;
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i >= 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }

}

function heapify(arr, n, i) {
    let largerst = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < n && arr[left] > arr[largerst]) {
        largerst = left;
    }
    if (right < n && arr[right] > arr[largerst]) {
        largerst = right;
    }

    if (largerst != i) {
        let temp = arr[i];
        arr[i] = arr[largerst];
        arr[largerst] = temp;
        heapify(arr, n, largerst);
    }

}
let arr = [11, 12, 18, 20, 9];
heapSort(arr);
console.log(arr);