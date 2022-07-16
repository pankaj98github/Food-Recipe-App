import React, {useEffect, useState} from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import {MdFastfood} from "react-icons/md";

const Meal = () => {

    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
    }, [url]);

    const setIndex = (alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (evt) => {
      if(evt.key === "Enter"){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      }
    }

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1><span><MdFastfood/></span> Search Your <span>Food Recipe</span></h1>
          <h2>
          Beyond the boundaries of taste.
          </h2>
        </div>
        <div className="searchBox">
          <input
            type="search"
            placeholder="Search your favourite recipe..."
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>
        <br/>
        <div className="container">
          
          {
            show ? <MealItem data={item}/> : "Not Found" 
          }

        </div>

        <div className="indexContainer">
            <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)}/>
        </div>
      </div>
          <h3 className="love">Love The Food ❤️</h3>
        <footer>
        <span>Created by <a href="#">Pankaj Kumbhare</a> | <span class="far fa-copyright"></span> 2022 All rights resvered. </span>
    </footer>
    </>
  );
};

export default Meal;
