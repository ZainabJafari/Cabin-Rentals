import Wifi from "../Icons/Wifi";
import Deck from "../Icons/Deck";
import Washingmachine from "../Icons/WashingMachin";
import Parking from "../Icons/Parking";
import Lounge from "../Icons/Lounge";
import Bed from "../Icons/Bed";
import Charging from "../Icons/Charging";
import Kitchen from "../Icons/Kitchen";
import Pet from "../Icons/Pet";
import TV from "../Icons/TV";
import Towels from "../Icons/Towels";
import { useDateContext } from "../../Context/dateContext";
import { CabinsContext } from "../../Context/cabinContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HomeReview from '../HomeComponents/HomeReview'
const IconsDetail = () => {
  const { startDate, endDate, getFormattedDate } = useDateContext();
  const { cabinDetail } = useContext(CabinsContext);

  if (!cabinDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <p className="detail-facilities-text">Facilities</p>

      {/* Cabin Facilities */}
      <div className="facilities-list">
        {cabinDetail.property.map((description, index) => (
          <div key={index} className="facility-item">
            {description.Washingmachine && (
              <div className="facility">
                <Washingmachine />
                <p>{description.Washingmachine}</p>
              </div>
            )}
            {description.Privateparking && (
              <div className="facility">
                <Parking />
                <p>{description.Privateparking}</p>
              </div>
            )}
            {description.Kingsizebed && (
              <div className="facility">
                <Bed />
                <p>{description.Kingsizebed}</p>
              </div>
            )}
            {description.Privatedeck && (
              <div className="facility">
                <Deck />
                <p>{description.Privatedeck}</p>
              </div>
            )}
            {description.Towels && (
              <div className="facility">
                <Towels />
                <p>{description.Towels}</p>
              </div>
            )}
            {description.Lounge && (
              <div className="facility">
                <Lounge />
                <p>{description.Lounge}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="additional-facilities">
        <div className="facility-item">
          <Charging />
          <p>Charging</p>
        </div>
        <div className="facility-item">
          <Wifi />
          <p>Comfortable</p>
        </div>
        <div className="facility-item">
          <Kitchen />
          <p>Kitchen</p>
        </div>
        <div className="facility-item">
          <Pet />
          <p>Pet</p>
        </div>
        <div className="facility-item">
          <TV />
          <p>TV</p>
        </div>
        <div className="facility-item">
          <Wifi />
          <p>Free Wifi</p>
        </div>
      </div>

      <div className="included-container">
        <p className="included-text">Included in the package</p>
        {cabinDetail.included.map((includ, index) => (
          <li key={index} className="included-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#396A3C" />
            </svg>
            {includ.Included}
          </li>
        ))}
      </div>

      <HomeReview />

      <div className="reservation-container">
        <div className="reservation-info">
          <p>1 bedroom</p>
          <p>Check-in: {getFormattedDate(startDate)}</p>
        </div>
        <div className="reservation-info">
          <p className="persons">
            2x
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M7.68099 8.35365C9.80286 8.35365 11.5215 6.59596 11.5215 4.42585C11.5215 2.25574 9.80286 0.498047 7.68099 0.498047C5.55912 0.498047 3.84049 2.25574 3.84049 4.42585C3.84049 6.59596 5.55912 8.35365 7.68099 8.35365ZM7.68099 10.3176C5.11746 10.3176 0 11.6334 0 14.2454V16.2093H15.362V14.2454C15.362 11.6334 10.2445 10.3176 7.68099 10.3176Z"
                fill="#111111"
              />
            </svg>
          </p>
          <p>Check-out: {getFormattedDate(endDate)}</p>
        </div>
        <div className="reservation-info">
          <p>Total</p>
          <p>{cabinDetail.price} SEK</p>
        </div>
        <div>
          <Link to="/login" className="btn-link">
            <button className="reserve-button">Reserve</button>
          </Link>
        </div>
      </div>

      <div className="reviews-list"></div>
    </div>
  );
};

export default IconsDetail;
