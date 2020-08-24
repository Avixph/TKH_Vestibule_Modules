//link to codepen:https://codepen.io/avixph/pen/mdPyYmQ?editors=1112https://codepen.io/avixph/pen/mdPyYmQ?editors=1112
{  

    const wk_income = parseInt(prompt("What's your weekly income $:"))
    let food = parseInt(prompt("What's your food cost $:"))
    let housing = parseInt(prompt("What's your housing cost $:"))
    let transportation = parseInt(prompt("What's your transportation cost $:"))
    let other = parseInt(prompt("What are your other costs $:"))
    const yr_saving = parseInt(prompt("How much do you want to save in a year $:"));
    

    if ((wk_income == null || isNaN(wk_income)== true) && (food == null || isNaN(food)== true) && 
    (housing == null || isNaN(housing)== true) && (transportation == null || isNaN(transportation)== true) && 
    (other == null || isNaN(other)== true) && (yr_saving == null || isNaN(yr_saving)== true)) {

        console.log("Please enter a valid number.")

        const wk_income = parseInt(prompt("What's your weekly income $:"))
        let food = parseInt(prompt("What's your food cost $:"))
        let housing = parseInt(prompt("What's your housing cost $:"))
        let transportation = parseInt(prompt("What's your transportation cost $:"))
        let other = parseInt(prompt("What are your other costs $:"))
        const yr_saving = parseInt(prompt("How much do you want to save in a year $:"));

        console.log("weekly income is less than total cost ", {"weekly income": wk_income, "total cost": ttl_cost,});

    } else {

        let wk_saving = (yr_saving / 52)
        let ttl_cost = (food + housing + transportation + other)
        let revenue_expense = (wk_income - ttl_cost);

        if (wk_income < ttl_cost){ 
            console.log("weekly income is less than total cost ", {"weekly income": wk_income, "total cost": ttl_cost,});

        }
        else if (revenue_expense >= wk_saving) {

           console.log("Congratulations! You are on track to meet your goal.");  

        } else {

            let needed_saving = (wk_saving - (wk_saving - revenue_expense))

            console.log("Apologies, you need to save $ " + needed_saving + " to meet your goal.");
        }
    };

}


//link to codepen:https://codepen.io/avixph/pen/jOqyYvO?editors=1112
{

    const wk_income = parseInt(prompt("What's your weekly income $:"))
    let food = parseInt(prompt("What's your food cost $:"))
    let housing = parseInt(prompt("What's your housing cost $:"))
    let transportation = parseInt(prompt("What's your transportation cost $:"))
    let other = parseInt(prompt("What are your other costs $:"))
    const yr_saving_goal = parseInt(prompt("How much do you want to save in a year $:"));
    
    let wk_saving_goal = (yr_saving_goal / 52)
    let ttl_cost = (food + housing + transportation + other)
    let revenue_expense = (wk_income - ttl_cost);
    

    if ((wk_income == null || isNaN(wk_income)== true) || (food == null || isNaN(food)== true) || 
    (housing == null || isNaN(housing)== true) || (transportation == null || isNaN(transportation)== true) || 
    (other == null || isNaN(other)== true) || (yr_saving_goal == null || isNaN(yr_saving_goal)== true)) {

        console.log("Please enter a valid number.")

        const wk_income = parseInt(prompt("What's your weekly income $:"))
        let food = parseInt(prompt("What's your food cost $:"))
        let housing = parseInt(prompt("What's your housing cost $:"))
        let transportation = parseInt(prompt("What's your transportation cost $:"))
        let other = parseInt(prompt("What are your other costs $:"))
        const yr_saving_goal = parseInt(prompt("How much do you want to save in a year $:"));

        let wk_saving_goal = (yr_saving_goal / 52)
        let ttl_cost = (food + housing + transportation + other)
        let revenue_expense = (wk_income - ttl_cost);
        
    } else{

        if (wk_income < ttl_cost){ 
            console.log("weekly income is less than total cost ", {"weekly income": wk_income, "total cost": ttl_cost,});
    
        }
        else if (revenue_expense >= wk_saving_goal) {
    
            console.log("Congratulations! You are on track to meet your goal.");  
    
        } else {
    
            let needed_saving = (wk_saving_goal - revenue_expense)
    
            console.log("Apologies, you need to save $ " + needed_saving + " to meet your goal.");
        };

    }
    

}