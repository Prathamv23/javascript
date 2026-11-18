//task-5 Reverse a string: "hello" becomes "olleh". 

let str="hello";

function reverse_str(str){

    let l_str=str.split("");

    left=0;
    right=l_str.length-1;

    while(left<right){
        temp=l_str[right];
        l_str[right]=l_str[left];
        l_str[left]=temp;

        left++;
        right--;
    }
     console.log(l_str)
    return l_str.join("");
}


console.log(reverse_str(str));
