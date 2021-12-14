{
    //Задача 1

    // In this kata you will create a function
    // that takes a list of non - negative integers and strings
    // and returns a new list with the strings filtered out.

// function filter_list(values) { 
//     const onlyNumber = values.filter(value => typeof value === 'number');
//     return onlyNumber;
// }



// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// console.log(filter_list([1,2,'aasf','1','123',123]));
}

{
    //Задача 2

    // Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].


//     function deleteNth(arr, n) {
       
//         const result = [];

//         const total = {};
        
//         for (const number of arr) {
//             total[number] = total[number] ? total[number] + 1 : 1;
//             // console.log(total);
//             if (total[number] <= n) result.push(number);
//             // console.log(result);
//         } 

//         return result;
// }


// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
// console.log(deleteNth ([20,37,20,21],1));

}

{
    //Задача 3

    // You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.


    function longestConsec(strarr, k) {
       
        let longestWord = [];
        var longest = 0;

        for (let i = 0; i < strarr.length; i++){
            if (longest< strarr[i].length) {
                // longestWord.push(strarr[i]);
                longest = strarr[i];
                // longestWord.splice(i, 0, strarr[k]);
                console.log(longest);
                // return longestWord.join("");
            }
        }
        

}


    // console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
    // console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
    // console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));


}