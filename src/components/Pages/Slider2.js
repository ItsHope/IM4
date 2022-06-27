import React, { useState, useEffect } from "react";
import "../styles/App.css";
import data from "../Pages/data2";

const Slider = () => {
  const [blogs] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = blogs.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, blogs]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 1000000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Reflections</h2>
      </div>
      <div className="section-center">
        {blogs.map((item, indexBlogs) => {
          const { id, image, title, quote } = item;
          let position = "nextSlide";
          if (indexBlogs === index) {
            position = "activeSlide";
          }
          if (
            indexBlogs === index - 1 ||
            (index === 0 && indexBlogs === blogs.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
             

              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Slider;