//BUBBLE SORT
let arr=[29,10,14,37,14]
function bubblesort(a){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length-i-1;j++)
        {
            if(a[j+1]<a[j])
            {
                [a[j+1],a[j]]=[a[j],a[j+1]]
            }
        }
    }
    return a
}

//SEECTION SORT
function selectionsort(a){
    for(let i=0;i<a.length;i++)
    {let min=i
        for(let j=i+1;j<a.length;j++)
        {
            if(a[j]<a[min])
            {
                min=j
            }

        }
        if(min!=i){
            [a[min],a[i]]=[a[i],a[min]]
        }
    }
    return a
}

//INSERTION SORT
function insert(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }
    return arr
}

//MERGE sort
function mergesort(arr){
    if(arr.length<=1){return arr}
    let mid=Math.floor(arr.length/2)
    let left=mergesort(arr.slice(0,mid))
    let right=mergesort(arr.slice(mid))
    return merge(left,right)

}
function merge(left,right){
    let sorted=[]
    while(left.length && right.length){
        if(left[0]<right[0]){sorted.push(left.shift())}
        else{sorted.push(right.shift())}
    }
    return [...sorted,...left,...right]
}



//QUICK SORT
function quick(arr){
    if(arr.length<=1){return arr}
    let pivot=arr[0]
    let left=[];let right=[];
    for(let i=0;i<arr.length;i++){
       if(arr[i]<pivot){left.push(arr[i])}
       else{right.push(arr[i])}
    }
    return [...left,pivot,...right]
 }
 console.log(quick(arr))