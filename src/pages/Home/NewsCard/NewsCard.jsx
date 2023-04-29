import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, author, details, rating, total_view, image_url } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center py-2">
          <Image
            style={{ height: "50px", width: "50px", margin: "7px" }}
            src={author?.img}
            roundedCircle
          />
          <div className="ps-3 flex-grow-1">
            <h5 className="mb-1 mt-1">{author?.name}</h5>
            <p>{moment(author?.published_date).format("YYYY-MM-DD")}</p>
          </div>
          <div className="me-3">
            <FaRegBookmark className="fs-3 me-3" />
            <FaShareAlt className="fs-3" />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="mb-4 fs-3">{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="my-4">
            {details.length < 260 ? details : details.slice(0, 260)}
            <>
              ...
              <Link
                to={`/news/${_id}`}
                className="text-primary text-decoration-none"
              >
                Read More
              </Link>
            </>
          </Card.Text>
          <hr />
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <Rating
                className="text-warning"
                readonly
                placeholderRating={rating?.number}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
              <span className="ps-2">{rating?.number}</span>
            </div>
            <div className="fs-5">
              <FaEye className="me-2" /> {total_view}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCard;
