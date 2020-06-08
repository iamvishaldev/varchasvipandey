import React, { Component } from "react";
import "./Blogs.css";

import Blog from "./Blog";

class Blogs extends Component {
  state = {
    blogs: [
      {
        title: "Quick MERN application & a way to Cross the CORS",
        sub: "Quick MERN stack guide",
        content:
          "You might be familiar with a term CORS. If not then I guess you haven’t worked much with APIs and requests. Let’s start with a formal introduction of CORS (from Wikipedia): Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.",
        link: "https://bit.ly/mern-cors"
      },
      {
        title: "Asynchronous array behaviour in JavaScript",
        sub: "Truth behind empty but full array",
        content:
          "While working with any API, you might have come across a situation where your response returns some data that’s when pushed into an array returns a weird thing! This looks like an array and you might also see your data there, but have you ever tried checking it’s “length” or maybe applying some cool array functions like “map”?",
        link: "https://bit.ly/async-array-js"
      }
    ]
  };

  render() {
    return (
      <section className="section section-blogs">
        <p className="blogs__heading">Blog Posts</p>
        {/* BLOGS */}
        {this.state.blogs.map(blog => {
          return (
            <Blog
              heading={blog.title}
              subheading={blog.sub}
              content={blog.content}
              link={blog.link}
            />
          );
        })}
      </section>
    );
  }
}

export default Blogs;
