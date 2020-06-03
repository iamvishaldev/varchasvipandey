import React from "react";

const Blog = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="blog__link"
    >
      <div className="blog-container">
        <p className="blog__heading">{props.heading}</p>
        <p className="blog__sub-heading">{props.subheading}</p>
        <p className="blog__content">{props.content}</p>
      </div>
    </a>
  );
};

export default Blog;
