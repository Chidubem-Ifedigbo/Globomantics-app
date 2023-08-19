import SearchResultRow from "./search-results-row";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import houseContext from "../context/houseContext";



const SearchResults = () => {
    const { country } = useParams();
    const allHouses = useContext(houseContext)
    const filteredHouse = allHouses.filter((h) => h.country === country );
    return ( 
        <div className="mt-2">
            <h4>Results for {country}:</h4>
            <table className="table table-hover">
                <tbody>
                    {filteredHouse.map((h) => (
                        <SearchResultRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default SearchResults;