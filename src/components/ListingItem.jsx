import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg";
import { FaRupeeSign } from "react-icons/fa";
// import { FaLaptopCode } from "react-icons/fa";

const ListingItem = ({ listing, id, onDelete, onEdit }) => {
  console.log(listing);
  return (
    <div>
      <li className="categoryListing">
        <Link
          to={`/category/${listing.type}/${id}`}
          className="categoryListingLink"
        >
          <img
            src={listing.imgUrls[0]}
            alt={listing.name}
            className="categoryListingImg"
          />
          <div className="categoryListingDetails">
            <p className="categoryListingLocation">{listing.location}</p>
            <p className="categoryListingName">{listing.name}</p>
            {/* <p className="categoryListingPrice">
              {listing.offer
                ? listing.discountedPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : listing.regularPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              {listing.type === "rent" && "/Month"}
            </p> */}

            <div className="categoryListingInfoDiv">
              {/* <img src={bedIcon} alt="bed" /> */}
              <FaRupeeSign />
              <p className="categoryListingInfoText">
                {/* {listing.bedrooms > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : `1 Bedroom`} */}
                {listing.stipend}
              </p>

              {/* { <p className="categoryListingInfoText">
                <FaLaptopCode />
                {listing.skills}
              </p> } */}
            </div>
          </div>
        </Link>

        {onDelete && (
          <DeleteIcon
            className="removeIcon"
            fill="rgb(231, 76, 60)"
            onClick={() => onDelete(listing.id, listing.name)}
          />
        )}

        {onEdit && <EditIcon className="editIcon" onClick={() => onEdit(id)} />}
      </li>
    </div>
  );
};

export default ListingItem;
