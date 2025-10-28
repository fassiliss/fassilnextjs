import { useContext } from "react";
import { AxoContext } from "../Context";

const Blog = () => {
  const { blogDetails, blogs } = useContext(AxoContext);
  return (
    <section id="blog">
      <div className="container">
        <div className="section-title">
          <p className="sub-title">My Blog</p>
          <h2>
            Our Recent Updates, <br />
            Blog, Tips, Tricks &amp; More
          </h2>
        </div>
        <div className="row blog-items">
          {blogs &&
            blogs.map((blog) => (
              <div className="col-md-6 col-lg-4" key={blog.id}>
                <div className="blog-item wow fadeInUp">
                  <div className="blog-image-container">
                    <a href="#blog-popup-1" onClick={() => blogDetails(blog)}>
                      <img src={blog.img} alt="blog image" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <p>
                      <span>{blog.catagory}</span> / {blog.date}
                    </p>
                    <h4>
                      <a href="#blog-popup-1" onClick={() => blogDetails(blog)}>
                        {blog.title}
                      </a>
                    </h4>
                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate .
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
