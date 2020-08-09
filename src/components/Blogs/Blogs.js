import React, { Component } from "react";
import "./Blogs.css";

import Blog from "./Blog";

class Blogs extends Component {
  state = {
    blogs: [
      {
        id: 1,
        title: "Next.JS Revolution! MERN Stack Boon! Part-2/2",
        sub: "Express server in Next.JS",
        content:
          "Welcome back! Let’s continue our landing page application by configuring Express.JS and making a simple route. A normal MERN stack application requires two servers, one for running the front-end code and other for running the back-end code.",
        link: "https://bit.ly/next-revolution-2"
      },
      {
        id: 2,
        title: "Next.JS Revolution! MERN Stack Boon! Part-1/2",
        sub: "Simple MERN vs Next.JS MERN",
        content:
          "If you have a good React development experience then congratulations! You already know how to use Next.JS. But the main purpose of Next.JS was not to replace React.JS from the front-end. Next.JS became popular because of its one of the important characteristics i.e. Pre-Rendering. That means, it can create a server-rendered React application very easily. This blog is going to be interesting because I’m going to show you how to get started with a full-stack MERN application using Next.JS. I’ll also do a head to head comparison between simple React.JS with Express.JS setup and Next.JS with Express.JS setup.",
        link: "https://bit.ly/next-revolution-1"
      },
      {
        id: 3,
        title: "Quick MERN application & a way to Cross the CORS",
        sub: "Quick MERN stack guide",
        content:
          "You might be familiar with a term CORS. If not then I guess you haven’t worked much with APIs and requests. Let’s start with a formal introduction of CORS (from Wikipedia): Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.",
        link: "https://bit.ly/mern-cors"
      },
      {
        id: 4,
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
              key={blog.id}
            />
          );
        })}
      </section>
    );
  }
}

export default Blogs;
