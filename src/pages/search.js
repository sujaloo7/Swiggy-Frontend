import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const sampleData = [
  {
    name: "Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/utfuoomhsc1zqoaddl8e",
  },
  {
    name: "Burger",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ac6cd19ec0940e13058d1646e6837915",
  },
  {
    name: "Pasta",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/c6e849c820234ad9586ecd7498194ca9",
  },
  {
    name: "Aloo Samosa",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/jaakq2clci74qvu9mgye",
  },
  {
    name: "Momos",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/nhgnjey0san3xcx2mz9a",
  },
  {
    name: "Vada Pav",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/eb483a8c1588eed7f3c64b829c092578",
  },
];
const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (input) => {
    const filteredSuggestions = sampleData.filter((suggestion) =>
      suggestion?.name?.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleInputChange = async (event) => {
    const input = event.target.value;
    setQuery(input);
    if (input === "") {
      setSuggestions([]);
    } else {
      fetchSuggestions(input);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
  };
  return (
    <>
      <div class="nDVxx">
        <div class="rbcmH">
          <div class="_1JbgW _1jet9" data-testid="search-bar">
            <form>
              <div class="_1QBzC">
                <div class="_2O4-3">
                  <input
                    type="text"
                    class="_2FkHZ"
                    placeholder="Search for restaurants and food"
                    maxlength="200"
                    value={query}
                    onChange={handleInputChange}
                  />
                </div>
                <div class="_2p8XD">
                  <span class="icon-magnifier"></span>
                </div>
              </div>
              <input type="submit" hidden="" />
            </form>
          </div>
        </div>
        <div className="_2NSqs">
          <div className="_3X3Bt">
            <div className="_1VxLu">
              {suggestions.length > 0 &&
                suggestions.map((suggestion, index) => (
                  <button
                    className="_37IIF"
                    data-testid="autosuggest-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                    key={index}
                  >
                    <div className="_2f0cx">
                      <img
                        className="_2f0cx"
                        alt={suggestion.name}
                        src={suggestion.image}
                      />
                    </div>
                    <div className="_23LIV">
                      <div className="RNzoC">{suggestion.name}</div>
                      <div className="_1Z_E6">Dish</div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
