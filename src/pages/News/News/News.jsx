import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditoorInsides from "../EditorInsides/EditoorInsides";

const News = () => {
  const news = useLoaderData();
  const { category_id, title, author, details, image_url } = news;
  return (
    <div className="mt-3">
      <h5 className="ms-4 fw-semibold">Dragon News</h5>
      <Card className="m-4">
        <Card.Img className="px-4 pt-4" variant="top" src={image_url} />
        <Card.Body className="p-4">
          <Card.Title className="fs-3 mb-3">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button className="mt-3 py-2" variant="danger">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditoorInsides />
    </div>
  );
};

export default News;
