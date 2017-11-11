import React from 'react';

const NavBar = () => {
    return (
        <div>
          <form>
              <span>Search Albums/Products:</span><input type="search" />
              <input type="submit" />
          </form>   
        </div>
    );
};

export default NavBar;