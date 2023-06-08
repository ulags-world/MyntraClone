import React, { useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/CreateProfile";
import { setUserWithToken } from "../../Redux/userSlice";
import { useSelector } from "react-redux";

function Profile({ dropDownRef }) {
  const name = useSelector((state) => state.isNewUser.name);
  const phoneNumber = localStorage.getItem("ouiytrewdfcghjkl,jbvvjhfgdcg")
  useEffect(() => {
    fetchProfile();
  }, []);

  const listOne = [
    {
      name: "Orders",
      id: "1",
    },
    {
      name: "Wishlist",
      id: "2",
    },
    {
      name: "Gift Cards",
      id: "3",
    },
    {
      name: "Contact Us",
      id: "4",
    },
    {
      name: "Myntra Insider",
      id: "5",
      feature: "New",
    },
  ];
  const listTwo = [
    {
      name: "Myntra Credit",
      id: "1",
    },
    {
      name: "Coupons",
      id: "",
    },
    {
      name: "Saved Cards",
      id: "3",
    },
    {
      name: "Saved VPA",
      id: "4",
    },
    {
      name: "Saved Addresses",
      id: "5",
    },
  ];
  const navigate = useNavigate();

  const fetchProfile = async () => {
    if (localStorage.getItem("token")) {
      console.log("rendering always")
      // const res = await getProfile();
      // dispatch(setUserWithToken(res.data.profile))
    }
  };

  return (
    <div
      className="profile"
      ref={dropDownRef}
      onMouseLeave={() => {
        dropDownRef.current.style = "display:none";
      }}
    >
      <div className="profile__card">
        {localStorage.getItem("token") ? (
          <div>
            <p className="profile__card__hello">Hello {name}</p>
            <p className="profile__card__mobilenumber">{phoneNumber}</p>
          </div>
        ) : (
          <div className="profile__card__welcome">
            <div className="profile__card__welcome__textone">
              <h1>Welcome</h1>
            </div>
            <div className="profile__card__welcome__texttwo">
              <p>To access account and manage orders</p>
            </div>
            <div className="profile__card__welcome__login">
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="profile__card__welcome__button"
              >
                LOGIN / SIGNUP
              </button>
            </div>
          </div>
        )}
        <div className="profile__card__linebreak"></div>
        <div className="profile__card__listone">
          {listOne.map((element) => (
            <a
              key={element.id}
              className="profile__card__listone__link"
              href="www.google.com"
            >
              {element.name}
            </a>
          ))}
        </div>
        <div className="profile__card__linebreak"></div>
        <div className="profile__card__listone">
          {listTwo.map((element) => (
            <a
              key={element.id}
              className="profile__card__listone__link"
              href="www.google.com"
            >
              {element.name}
            </a>
          ))}
        </div>
        <div className="profile__card__linebreak"></div>
        {
          localStorage.getItem('token')
          ?
          (
            <div className="profile__card__listone">
              <a
                className="profile__card__listone__link"
              >
                Edit Profile
              </a>
              <a className="profile__card__listone__link">
                Logout
              </a>
            </div>
          )
          :
          ''
        }
      </div>
    </div>
  );
}

export default Profile;
