import React from "react";
import Headings from "../atoms/Headings";
import BlogsComponent from "../molecules/BlogsComponent";

function RecentBlogs() {
  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <div className=" text-center w-[90%] md:w-[50%] flex flex-col">
        <Headings level="2" text="Recent Blogs" />
        <Headings
          level="10"
          text="We put your ideas and thus your wishes in the form of a unique web project that
                inspires you and you customers."
        />
      </div>
      <BlogsComponent />
    </div>
  );
}

export default RecentBlogs;
