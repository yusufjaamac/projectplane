import "./deslist.css"
/* Yusuf J*/

const Destlist = () => {
  return (

    
    <div className="Destlist">
        <div className="innerclass">
            <img src="https://www.planetware.com/photos-large/SAF/south-africa-cape-town.jpg" alt="" className="innerclass" />
            <div className="subdescription">
                <h1>South Africa</h1>
                <h2>Cape Town</h2>
                <h3>Tickets start from $600</h3>


            </div>
        </div>


        <div className="innerclass">
            <img src="https://www.planetware.com/photos-large/I/italy-venice-canals.jpg" alt="" className="innerclass" />
            <div className="subdescription">
                <h1>Italy</h1>
                <h2>The Grand Canal in Venice</h2>
                <h3>Tickets start from $400</h3>


            </div>
        </div>




        <div className="innerclass">
            <img src="https://www.ontarioaway.com/wp-content/uploads/2018/12/toronto-tourist-attractions-nathan-phillips-square.jpg" alt="" className="innerclass" />
            <div className="subdescription">
                <h1>Canada</h1>
                <h2>Downtown</h2>
                <h3>Tickets start from $800</h3>
                


            </div>
        </div>
        
    <div className="instructions">
        <p>To search for flight tickets follow the instructions below: For from enter the destination you will fly from and a list of countries will appear. For To enter the destination you will fly to and a list of countries will appear. Finally enter the departure and return dates</p>
    </div>
    </div>
    
  )
}

export default Destlist