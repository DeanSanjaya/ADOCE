import React from "react";

const About = () => {
  const urlImage =
    "https://firebasestorage.googleapis.com/v0/b/my-doctor-01-da016.appspot.com/o/Group%201.png?alt=media&token=575ea831-eaba-46bf-bf98-ce2b57b00bb5";
  return (
    <div className="bg-[#8EACCD] h-screen justify-center flex-col flex px-[75px]">
      <div className="flex items-center justify-between w-full">
        <div className="w-2/4">
          <h1 className="font-bold text-5xl w-[70%] mb-5">
            Prepare Your Home{" "}
            <span className="text-[#D2E0FB]">For Your Cat</span>
          </h1>
          <p className="w-[70%] mb-8">
            ADOCE berkomitmen untuk menyelamatkan dan merawat hewan peliharaan.
            Kami memperjuangkan hak-hak hewan dan berupaya mencari rumah yang
            baik bagi mereka.
          </p>
          <div className="bg-white px-2 py-2 w-[20%] flex justify-center rounded-xl hover:cursor-pointer">
            <p>Selengkapnya</p>
          </div>
        </div>
        <div className="w-2/4 flex justify-end">
          <img src={urlImage} width={600} height={500} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
