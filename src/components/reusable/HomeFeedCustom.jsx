import React from 'react';
import { Card, Image, Badge } from 'react-bootstrap';
import CustomButton from './CustomButton';

function HomeFeedCustom({ name, avatarSrc, content, imageSrc, isNew }) {
  return (
    <Card className="my-card">
      <Card.Header>
        <Image src={avatarSrc} alt="User avatar" className="my-avatar" roundedCircle />
        <div className="my-header">
          <h5 className="my-name">{name}</h5>
          {isNew && <Badge variant="secondary" className="my-badge">New post</Badge>}
        </div>
      </Card.Header>
      <Card.Body>
        <p className="my-content">{content}</p>
        <Image src={imageSrc} alt="Post image" className="my-image" fluid />
        <div className="my-actions">
          <div className="mt-4">
            <CustomButton text="Like" variant="primary" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HomeFeedCustom;
