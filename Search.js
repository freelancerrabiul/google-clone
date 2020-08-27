import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false }) {
  const[{}, dispatch] =useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault(); 
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })
    //now do something with those input words...
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />        
          <img className="search__micIcon" src="https://seeklogo.com/images/G/google-mic-logo-EF440C9A6F-seeklogo.com.png" alt="svg"/>
        
      </div>
      {!hideButtons ? (
        <div className="search__Buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'am Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__Buttons">
          <Button
            className="search__ButtonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__ButtonsHidden" variant="outlined">
            I'am Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
