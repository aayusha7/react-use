




export default function SearchBar(){


      
        const handleSearch = () => {
          console.log('Searching for:');
          // Add search functionality here
        };
      
        return (
          <div className="search-container">
            <select className="search-dropdown">
              <option value="name">Alumni Name</option>
              {/* Add more options as needed */}
            </select>
            <input
              type="text"
              className="search-input"
              placeholder="Search by alumni name"
             
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        );
      };
