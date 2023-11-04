console.log("good working");

let request=new XMLHttpRequest;
request.open("get","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    let data=request.response;
    let result=JSON.parse(data);
     console.log(result);
     //a.Get all the countries from Asia continent /region using Filter function
    let first_a=result.filter((a)=>{
        return a.continents=="Asia"
           
    });
    let countries=first_a.map((element)=>{return (element.name.common)})
       console.log(countries);
    //b.Get all the countries with a population of less than 2 lakhs using Filter function
    let first_b=result.filter((element)=>{return(element.population<200000)});
    let final=first_b.map((element)=>{return (element.name.common)})
   console.log(final);
    //c.Print the following details name, capital, flag, using forEach function
    result.forEach((c) => { console.log(`
    name:${c.name.common}
    captila:${c.capital}
    flag:${c.flag}`)
    });
    //d.Print the total population of countries using reduce function
    let pop=result.reduce((acc,cv)=>acc+cv.population,0)
    console.log("total population of countries:",pop);
     //e.Print the country that uses US dollars as currency.
     let doller=result.filter((e)=> e.currencies&&e.currencies.USD)
     let us=doller.map((u)=>{ return u.name.common})
     console.log(us)
    }

