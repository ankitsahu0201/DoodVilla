import { imageCloudinaryURL } from "../config.js";

const BodyCard = (props) => {
  return (
    <>
      <div className="card">
        <img
          className="card-restaurant-image"
          src={imageCloudinaryURL + props.restaurantData.cloudinaryImageId}
        />
        <h2>{props.restaurantData.name}</h2>
        <h3>{props.restaurantData.cuisines.join(", ")}</h3>
        <h4> {props.restaurantData.avgRating + " Rating"}</h4>
        <h5> {props.restaurantData.costForTwoString}</h5>
      </div>
    </>
  );
};

export default BodyCard;
