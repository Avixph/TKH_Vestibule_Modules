//link to codepen:https://codepen.io/avixph/pen/bGpNzBX?editors=1112
{
    let grade = prompt("Find out your grade by entering your mark below:");

    {
        switch(true){
            case (grade > 95):
                console.log("A+");
                break;
            case (grade > 88 && grade <= 90):
                console.log("A");
                break;
            case (grade > 84 && grade <= 88):
                console.log("B+");
                break;  
            case (grade > 76 && grade <= 84):
                console.log("C+");
                break;  
            case (grade > 70 && grade <= 76):
                console.log("C");
                break;      
            case (grade > 67 && grade <= 70):
                console.log("D+");
                break;  
            case (grade > 64 && grade <= 67):
                console.log("D");
                break;  
            case (grade <= 64):
                console.log("F");
                break;                
            default:
                console.log("Please speak with your instructor.");
                break;
        }   
    }
    
}


//link to codepen:https://codepen.io/pen/?editors=1111
{
    let grade = prompt("Find out your grade by entering your mark below:");

    {
        if (grade > 95){
                console.log("A+");
        }
        else if (grade > 88 && grade <= 90){
            console.log("A");}
        else if (grade > 84 && grade <= 88){
            console.log("B+");} 
        else if (grade > 76 && grade <= 84){
            console.log("C+");}
        else if (grade > 70 && grade <= 76){
                console.log("C");}     
        else if (grade > 67 && grade <= 70){
                console.log("D+")}
        else if (grade > 64 && grade <= 67){
                console.log("D");}
        else if (grade <= 64){
            console.log("F");}               
        else {console.log("Please speak with your instructor.");}
    }
    
}