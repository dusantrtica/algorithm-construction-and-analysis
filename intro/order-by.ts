export const orderBy = <T>(input: Array<T>, pred: (x: T) => boolean) => {
    const n = input.length;
    let l = 0, r = n-1;
    let i = 0;

    const swap=(x: number, y: number) => {
        const tmp = input[x];
        input[x] = input[y];
        input[y] = tmp;
    }

    while(l < r) {
        if(pred(input[i])) {
            i++;
            l++;
        } else if (pred(input[r])) {
            swap(i,r);
        } else {
            r--;
        }        
    }    
    return input;
}