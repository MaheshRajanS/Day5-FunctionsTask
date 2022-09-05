//Anonymous function


//1. Printing odd numbers in an array

let oddArray=function(){
    let array=[]
    for(let i=1;i<100;i=i+2)
    {
        array.push(i)
    }
    console.log(array)
}

oddArray()


//2.Return all the strings to title case in a string array

let strArray=['potato','tomato','naruto','Amsterdam']

let uppercase=function(strArray){
    let result=[]
    for(let i in strArray)
    {
        result[i]=strArray[i].toUpperCase()
        
    }
    console.log(result)

}

uppercase(strArray)

//3.Sum of all numbers in an array

let arr=[36,59,395,275,38,238,47]

let sumArr=function(a){
    let result=0
    for(let x of arr)
    {
        result+=x
    }
    console.log(result)
}

sumArr(arr)

//4.Return all prime numbers in an array

let array4=[1,4,7,8,23,43,45,64,67,79,80,84,24,47]

let primeNo=function(a){
    for(let i of array4)
    { count=0
        for(let j=1;j<(i);j++)
        {
          if(i%j==0)
          count++
        }
        if(count<2)
        console.log(i)
    }
}

primeNo(array4)

//5. Return all aplindromes in an array

let array5=['mom', 'home', 'madam', 'kill', 'malayalam']

let palindrome=function(arr){
    
    for(let i of array5){
        let a=i.split('').reverse().join('')
        if(a===i)
        console.log(i)
    }
    
}

palindrome(array5)

//6.Remove duplicates from an array

let array6=[2,4,6,2,5,67,6,5,8,9,45,456,56]

let remDup=function(array6){
    for(let i=0;i<array6.length;i++){
        for(let j=i+1; j<array6.length;j++)
        {
            if(array6[j]==array6[i])
            array6.splice(j,1)
        }
    }
    console.log(array6)
}

remDup(array6)

//7. Rotating an array by k times
//let arr=[36,59,395,275,38,238,47]
let k=4
 let rotArray=function(k,arr){
    for(let i=1;i<=k;i++)
    {
        let temp=0
        temp=arr[0]
        arr.shift()
        arr.push(temp)
    }
    console.log(arr)
 }

 rotArray(k,arr)


 //Arrow functions
 //1.Prit odd numbers in an array

 let oddArray1=(a)=>{

    for(let i=0;i<a.length;i=i+1)
    {
        if(a[i]%2!=0)
        console.log(a[i])
    }
    
 }

oddArray1(arr)

//2. convert all strings to caps

let convertCaps=(a)=>{
    result=[]
    for(let i in a){
       result[i] =a[i].toUpperCase()
    }
    console.log(result)
}

convertCaps(strArray)

//3. Sum of all numbers in an array

let sumOfArray=(a)=>{
    let sum=0
    for(let i of a)
    sum+=i

    console.log(sum)
}

sumOfArray(arr)

//4. Return all prime numbers in an array

//let array4=[1,4,7,8,23,43,45,64,67,79,80,84,24,47]
let primeArray=(a)=>{
    for(let i of a)
    {   let count=0
        for(let j=1;j<=i;j++)
        {
            if(i%j==0)
            count++
        }
        if(count<=2)
        console.log(i)
    }
}

primeArray(array4)

//5. All palindromes ina array

//let array5=['mom', 'home', 'madam', 'kill', 'malayalam']

let pal=(a)=>{
    for(let i of a)
    {  let j=' '
        j=i.split('').reverse().join('')
        if(j===i)
        console.log(i)
    }
}

pal(array5)

