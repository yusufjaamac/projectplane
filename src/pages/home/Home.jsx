import Destlist from "../../components/deslist/Destlist"
import Navbar from "../../components/navbar/Navbar"
import Title from "../../components/title/Title"
import "./home.css"

//Yusuf Jaamac

const Home = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <div className="destinations">
        <Destlist/>
        

      </div>
    </div>
  )
}

export default Home
