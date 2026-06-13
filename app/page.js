import React from "react";
import { Roboto,Work_Sans} from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable:"--font-roboto"
});

const page = () => {
  return (
    <div className={roboto.className }>
      <div className="bg-black h-screen w-screen ">
        <h1 className="text-9xl text-white">Home page</h1>
      </div>
    </div>
  );
};

export default page;
