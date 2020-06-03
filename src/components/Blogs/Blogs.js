import React, { Component } from "react";
import "./Blogs.css";

import Blog from "./Blog";

class Blogs extends Component {
  state = {
    blogs: [
      {
        title: "My first blog",
        sub: "Coming soon",
        content:
          "My first blog will be uploaded very soon on Medium. So do follow me on Medium to get notified. Tap this blog!",
        link: "https://medium.com/@varchasvipandey"
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
