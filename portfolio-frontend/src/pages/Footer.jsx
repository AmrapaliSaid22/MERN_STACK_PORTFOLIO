import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
 } from "lucide-react";
 import { Button } from "@/components/ui/button";
import axios from "axios";
  
const currentYear = new Date().getFullYear();
 
const Footer = () => {

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
    <footer className="relative w-full">
       <div className="mx-auto w-full max-w-7xl px-8">
      
        <div className="mt-10 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="h5"
            className="mb-2 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="/">Amrapali Said</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 mb-9 text-blue-gray-900 sm:justify-center">
            
            <div className="w-fit px-3 py-2 bg-slate-50 rounded-[20px] flex gap-3 
      items-center mt-4 md:mt-8 lg:mt-10">
        
        <Link to={user.linkedInURL} target="_blank">
          <Linkedin className="text-sky-500 w-6 h-6" />
        </Link>
        
      </div>

      <div className="w-fit px-3 py-2 bg-slate-50 rounded-[20px] flex gap-5 
      items-center mt-4 md:mt-8 lg:mt-10">
        
        
        <Link to={user.twitterURL} target="_blank">
          <Twitter className="text-blue-800 w-7 h-7" />
        </Link>
      </div>

      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <Link to={user.githubURL} target="_blank">
        
          <Github className=" text-blue-800 w-14 h-11  bg-white rounded-2xl"/>
         
          </Link>
        <Link to={user.resume && user.resume.url} target="_blank">
          <Button className="rounded-2xl flex items-center gap-2 flex-row h-11">
            <span>
              <ExternalLink className="bg-white text-blue-800 w-6 h-7"/>
            </span>
            Resume 
          </Button>
        </Link>
      </div>
      
      <hr className="my-8 md::my-10 " />
    </div>
          </div>
       </div>
      
    </footer>
  );
}
export default Footer;