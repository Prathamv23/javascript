//task-6 Check for a palindrome (same when reversed, like "madam", "level"). Return true or false .

let p_str="madam";

let flag=false;

function palindrome(str){
    let split_str= str.split("");
    console.log(split_str);
    left=0;
    right=split_str.length-1;

    while(left<right){
        if(split_str[left]===split_str[right]){
            flag=true;
        }
        else{
            flag=false
        }
        right--;
        left++;
    }

    if(flag===true){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome(p_str))
