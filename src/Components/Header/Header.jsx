import React, { useEffect, useRef, useState } from "react";
import myntraLogo from "../../assets/MyntraFavIcon.png";
import searchLogo from "../../assets/search.png";
import "./Header.css";
import { nav, user } from "../HeaderData";
import Profile from "../Profile/Profile";
import HoverBox from "../HoverBox/HoverBox";
import { useDispatch, useSelector } from "react-redux";
import { getHoverData, hoverDataSlice } from "../../Redux/hoverDataSlice";

function Header({ isRendered, noProfile }) {
  const dropDownBox = useRef();
  const dropDownRef = useRef();
  const focusRef = useRef();
  const searchRef = useRef();
  const [hover, onHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const [arr,setArr] = useState(useSelector((state) => state.hoverData));
  //   classList
  useEffect(() => {
    if (focus) {
      searchRef.current.style.backgroundColor = "white";
      searchRef.current.style.borderStyle = "solid";
      searchRef.current.style.borderWidth = "1px";
      searchRef.current.style.borderLeftColor = "#f5f5f6";
      searchRef.current.style.borderTopColor = "#f5f5f6";
      searchRef.current.style.borderRightColor = "white";
      searchRef.current.style.borderBottomColor = "#f5f5f6";
      searchRef.current.style.pointerEvents = "box-only";
    } else {
      searchRef.current.style.borderStyle = "none";
      searchRef.current.style.backgroundColor = "#f5f5f6";
    }
  }, [focus]);

  return (
    <div>
      <div className="header">
        <div>
          <a >
            <img className="header__logo" src={myntraLogo} alt="none" />
          </a>
        </div>
        <div className="header__list">
          <ul className="header__list__ul">
            {nav.map((element) => {
              if (element.type === "BEAUTY" && isRendered) {
              } else {
                const hoverStyle = {
                  borderWidth: "3px",
                  borderBottomColor: hover ? `${element.color}` : "black",
                };
                return (
                  <div
                    key={element.id}
                    className="header__list__ul__contents"
                    style={hoverStyle}
                    
                    onMouseEnter={() => {
                      if(element.type !== 'STUDIO')
                      {
                        setArr(dispatch(getHoverData(element.data)))
                        dropDownBox.current.style = "display : block"
                      }
                      else{
                        setArr([]);
                        dropDownBox.current.style = "display : none"

                      }
                      onHover(true);
                    }}
                    onMouseLeave={() => {
                      if(element.type === 'STUDIO')
                      {
                        setArr([])
                        dropDownBox.current.style = "display : none"
                      }
                      else{
                        setArr([]);
                        dropDownBox.current.style = "display : none"

                      }
                        onHover(false);
                    }
                  }
                    
                  > 
                    <a  >{element.type}</a>
                    <span className="new">{element?.feature}</span>
                  </div>  
                );
              }
            })}
          </ul>
          {/* <HoverBox dropDownBox = {dropDownBox}/> */}
        </div>
        <div
          className={noProfile ? "header__search__no__profile" : "header__search"}
        >
          <div className="header__search__content">
            <div ref={searchRef} className="header__search__content__div">
              <a href="www.google.com">
                <img
                  alt="search_bar"
                  className="header__search__logo"
                  src={searchLogo}
                ></img>
              </a>
            </div>
            <div>
              <input
                ref={focusRef}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                type="text"
                className="header__search__input"
                placeholder="Search for products, brands and more"
              ></input>
            </div>
          </div>
        </div>
        {
          <div className="header__user">
            {user.map((element) => {
              return (
                <div
                  ref={dropDownRef}
                  key={element.id}
                  className={
                    element.description === "Profile"
                      ? "header__user__details"
                      : "header__user__detail"
                  }
                  onMouseEnter={() => {
                    element.description === "Profile"
                      ? (dropDownRef.current.style = "display : block")
                      : (dropDownRef.current.style = "display : none");
                  }}
                >
                    {element.description === "Profile" ? (
                    <div
                      className={
                        noProfile
                          ? "header__user__details__profile__no"
                          : "header__user__details__profile"
                      }
                    >
                      <img
                        alt="none"
                        className="header__user__details__logo"
                        src={element.image_link}
                      ></img>
                      <span className="header__user__details__description">
                        {element.description}
                      </span>
                    </div>
                  ) : (
                    <div className="header__user__details__others">
                      <img
                        alt="none"
                        className="header__user__details__logo"
                        src={element.image_link}
                      ></img>
                      <span className="header__user__details__description">
                        {element.description}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        }
        <Profile dropDownRef = {dropDownRef} />
      </div>
    {/* {console.log(arr)} */}
      <HoverBox data = {arr.payload} dropDownBox = {dropDownBox}/>

    </div>

  );
}

export default Header;
