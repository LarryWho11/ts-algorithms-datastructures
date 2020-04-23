export function mergeSort<T>(input: Array<T>) {
    _mergeSort(input, 0, input.length);
}

function _mergeSort<T>(input: Array<T>, p: number, r: number) {
    let q;
    if (p < r) {
        q = Math.ceil((p + r) / 2);
        _mergeSort(input, p, q);
        _mergeSort(input, q + 1, r);
        merge(input, p, q, r);
    }
}


/**
 *
 * @param input is Array containing n elements of type T with sorted subarray
 * @param p is the starting-index
 * @param q is the middle-index
 * @param r is the end-index
 */
export function merge<T>(input: Array<T>, p: number, q: number, r: number) {
    const index_n1: number = q - p;
    const index_n2: number = r - q;

    const arrays = divide(input, p, q, r);
    const array_left = arrays[0];
    const array_right = arrays[1];

    let i = 0;
    let j = 0;
    while (i < index_n1 && j < index_n2) {
        for (let k = p; k < r; k++) {
            if (array_left[i] <= array_right[j]) {
                input[k] = array_left[i];
                i++;
            } else {
                input[k] = array_right[j];
                j++;
            }
        }
    }

    for (;i < index_n1; i++) {
        input[index_n2+i] = array_left[i];
    }
    for (;j < index_n2; j++) {
        input[index_n1+j] = array_right[j];
    }
}

export function divide<T>(input: Array<T>, p: number, q: number, r: number) {
    const index_n1: number = q - p;
    const index_n2: number = r - q;

    let array_left: Array<T> = [];
    let array_right: Array<T> = [];

    for (let i = 0; i < index_n1; i++) {
        array_left[i] = input[p + i];
    }

    for (let j = 0; j < index_n2; j++) {
        array_right[j] = input[q + j];
    }
    return [array_left, array_right]
}