import React from "react";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <div className="bg-[#8EACCD] h-screen justify-center flex-col flex px-[75px]">
      <div className="flex justify-between items-start w-full">
        <div className="w-2/4">
          <h1 className="font-bold text-5xl mb-2">Contact US</h1>
          <div className="bg-white h-1 w-20" />
          <div className="flex flex-col space-y-10 mt-20">
            <div className="flex items-center space-x-5">
              <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
                <MarkunreadIcon />
              </div>
              <div className="text-xl font-medium">adoce@gmail.com</div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
                <CallIcon />
              </div>
              <div className="text-xl font-medium">+62 889-8888-8888</div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
                <LocationOnIcon />
              </div>
              <div className="text-xl font-medium">Jl. Persil No. 21</div>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div className="bg-[#337CCF] w-[670px]  rounded-xl flex justify-center">
            <form action="" className="w-[80%] py-10  flex flex-col">
              <label htmlFor="" className="font-medium text-xl mb-3">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-white placeholder:text-slate-300 outline-none rounded-xl w-full py-3 px-4"
              />
              <label htmlFor="" className="font-medium text-xl my-3">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Your Phone"
                className="bg-white placeholder:text-slate-300 outline-none rounded-xl w-full py-3 px-4"
              />
              <label htmlFor="" className="font-medium text-xl my-3">
                Message
              </label>
              <input
                type="text"
                placeholder="Your Phone"
                className="bg-white placeholder:text-slate-300 outline-none rounded-xl w-full py-3 px-4 h-32"
              />
              <button className="mt-10 w-full bg-[#0766AD] py-3 rounded-xl font-semibold text-white text-xl">
                Send Message 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
