import { AxoContext } from "@/src/Context";
import { useContext } from "react";
import Modal from "./Modal";
const BlogPopup = () => {
  const { blogs, blog, blogDetails } = useContext(AxoContext);
  return (
    <Modal close={blogDetails}>
      <div className="content">
        <div className="img">
          <img src={blog.img} alt="dora_img" />
        </div>
        <div className="des">
          <p className="category">
            <span>{blog.catagory}</span> / {blog.date}
          </p>

          <h4>{blog.title}</h4>
          <p>
            We live in a world where we need to move quickly and iterate on our
            ideas as flexibly as possible. Building mockups strikes the ideal
            balance between true-life representation of the end product and ease
            of modification.
          </p>
          <p>
            Mockups are useful both for the creative phase of the project - for
            instance when you're trying to figure out your user flows or the
            proper visual hierarchy - and the production phase when they will
            represent the target product. Making mockups a part of your creative
            and development process allows you to quickly and easily ideate.
          </p>
        </div>
      </div>
    </Modal>
  );
};
export default BlogPopup;
