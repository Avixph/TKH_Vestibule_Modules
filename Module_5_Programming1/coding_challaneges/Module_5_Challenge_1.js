//link to codepen:https://codepen.io/avixph/pen/poyjxKo?editors=1111
{
   
    let full_name = ["Westly Snipes","Nicholas Cage","Nasir Jones","Sean Carter","Sean Combs","Michael Jordan","Patrick Ewing"]

    let first_name = []; 
    let last_name = []; 
   
    function nameSplit(arr1, arr2, arr3){

       for (let i = 0; i < arr1.length; i++){

            let names = arr1[i].split(" "); 

            arr2.push(names[0]);
            arr3.push(names[1]);
       }
    }
   
    nameSplit(full_name, first_name, last_name); 
    console.log(first_name); 
    console.log(last_name);

}