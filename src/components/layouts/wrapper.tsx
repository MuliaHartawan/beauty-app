import React from "react";
import Footer from "./footer";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[url(/section.svg)] w-full bg-right-top bg-no-repeat">
      <div className="relative px-4 py-12 md:px-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
