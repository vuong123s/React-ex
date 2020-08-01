import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

export default function ErrComponent() {
  return (
    <div className="background">
      <div className="err-content">
        <strong>
          4<GiMagnifyingGlass />4
        </strong>
        <h1>Oops! That page can't be found</h1>
      </div>
      <div className="search-page-err">
        <div className="err-search">
          <form action="">
            <input
              type="text"
              placeholder="Search ..."
              className="input-text"
            />
            <input type="submit" value="Search" className="input-submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
