import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {

  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/me/portfolio",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);

  return (
    <div className="w-full flex  flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="overflow-x-hidden text-[2rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] mb-4 font-extrabold"
        >
          ABOUT ME
        </h1>
        {/* <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span> */}
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src={user.avatar && user.avatar.url}
              alt={user.fullName}
              className="rounded-xl rotate-[8deg] h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] md:h-[360px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              
            </p>
            <p>
              
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          
        </p>
      </div>
    </div>
  );
};

export default About;