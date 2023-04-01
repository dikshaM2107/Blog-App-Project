import React from "react";
import { Card, Button } from "react-bootstrap";
import "./feed.css";
const HomeFeed = () => {
  return (
    <div className="my-feed">
      <Card className="my-card">
        <Card.Header>
          <img
            src="https://picsum.photos/50"
            alt="User avatar"
            className="my-avatar"
          />
          <div>
            <h5 className="my-name">John Doe</h5>
            <p className="my-timestamp">2 hours ago</p>
          </div>
        </Card.Header>
        <Card.Body>
          <p className="my-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula libero ac magna tristique bibendum. In quis erat eget
            libero rutrum egestas.
          </p>
          <img
            src="https://picsum.photos/600/400"
            alt="Post image"
            className="my-image"
          />
          <Button variant="primary" className="my-like-button">
            Like
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeFeed;
