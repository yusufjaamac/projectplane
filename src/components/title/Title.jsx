import { useState } from "react"
import "./title.css"
var content = require("./countrys.json");
//Yusuf J

const Title = () => {

    const outputSearch = (country) => {
        setValue(country);
        console.log("search",country); 
        

    };

    const [value, setValue] = useState('');

    

    const onChange = (event) => {
        setValue(event.target.value);
    };

   
  return (
    <div className="title">
        Search for flights
        <div className="searchmenu">
        <input type="radio" name="mybutton" value="button" /> One Way
        <input type="radio" name="mybutton"value="button" /> Round Trip
        <input type="radio" name="mybutton"  value="button"/> Multi Trip

      

        </div>

       
        <div className="searchbar">
            <div className="searchcontents">
            <div className="from"> </div> 
                
            

                <input type="text" placeholder="From" value={value} onChange={onChange}/>
                
                <input type="text" placeholder = "To" value={value} onChange={onChange}/>
                

                <input type="date" />
                <input type="text" placeholder="Departure Date"/>
                

                <input type="date" />

                <input type="text" placeholder="Return Date"/>
                <button searchbutton={() => outputSearch(value)}>Search Flights</button>

            </div>
            <div className="countrys"> {content.filter(member => { 
                    const isCountry = value.toLowerCase();
                    const country = member.Country.toLowerCase();

                    return isCountry && country.startsWith(isCountry)
                })
                .map((member)=> 
                
                <div searchbutton = {() =>outputSearch(member.Country)}className="contentsCountries">
                    {member.Country}
                    

                
                </div> )} 

                



            </div>

            

            


            
       
                
        </div>



        

            


      
    </div>
  )
}

export default Title