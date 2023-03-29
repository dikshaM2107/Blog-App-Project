import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Post {id}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum, dolor vel pulvinar euismod, eros felis tempor augue, vel maximus nunc est a libero.</p>
    </div>
  );
}

export default BlogPost;
