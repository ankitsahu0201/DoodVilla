import Skeleton from "./Skeleton";
import BodyCard from "./BodyCard";

import { useState, useEffect } from "react";

const Body = () => {
  //State variable for search box
  const [searchValue, setSearchValue] = useState("");

  //State variable for address
  const [address, setAddress] = useState("Fetching Location Details...");

  //State variable for apiData
  const [dynamicData, setDynamicData] = useState([]);

  //State variable for filtered Data
  const [filteredData, setFilteredData] = useState([]);

  //Regular Async Function to fetch API Data
  const fetchSwiggyAPI = async (latitude, longitude) => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
          latitude +
          "&lng=" +
          longitude +
          "&page_type=DESKTOP_WEB_LISTING"
      );
      const dataJSON = await response.json();

      setDynamicData(dataJSON?.data?.cards[2]?.data?.data?.cards);
      setFilteredData(dataJSON?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Regular Async Function to fetch Address Details
  const fetchAddressDetails = async (latitude, longitude) => {
    console.log(latitude, longitude);
    const add = await fetch(
      "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
        latitude +
        "&lon=" +
        longitude
    );
    const addressDetail = await add.json();
    console.log(addressDetail);
    setAddress(addressDetail.display_name);
  };

  //Regular Function to fetch GeoLocation
  const fetchLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetchAddressDetails(latitude, longitude);
      fetchSwiggyAPI(latitude, longitude);
    });
  };

  //UseEffect Hook to fetch API data once
  useEffect(() => {
    fetchLocation();
  }, []);

  //React Element for search bar
  const BodySearchBar = (
    <input
      type="text"
      placeholder="Search"
      className="body-serachBar"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
        setFilteredData(
          dynamicData.filter((restaurant) =>
            restaurant.data.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
        );
      }}
    ></input>
  );

  //React Element for address
  const Address = (
    <input
      type="text"
      className="body-serachBar"
      value={address}
      readOnly
    ></input>
  );

  if (dynamicData.length === 0)
    return (
      <div className="body-container">
        {BodySearchBar}
        {Address}
        <div className="mainContent">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
            <Skeleton key={"skeletonBlock" + index} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="body-container">
      {BodySearchBar}
      {Address}
      <div className="mainContent">
        {filteredData.map((restaurant) => {
          return (
            <BodyCard
              restaurantData={restaurant.data}
              key={restaurant.data.uuid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
