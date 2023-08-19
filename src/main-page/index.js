import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery'
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import houseContext from "../context/houseContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <houseContext.Provider value={allHouses}>

        <div className="container">
          <Header subtitle=" Provoding houses all over the world" /> 
          <HouseFilter />

          <Routes>
            <Route path="/searchresults/:country" element={<SearchResults />} ></Route>
            <Route path='/house/:id' element = {<HouseFromQuery  />}></Route>
            <Route path="/" element={<FeaturedHouse house={featuredHouse} />} ></Route>
          </Routes>

        </div>
      </houseContext.Provider>
    </Router>
  );
}

export default App;
