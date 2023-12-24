import { useState } from "react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Navbar } from "../components/navbar";

export default function Adopt() {
  // State untuk mengontrol apakah kucing tambahan harus ditampilkan atau tidak
  const [showCat, setShowCat] = useState(false);
  const [showDog, setShowDog] = useState(false);
  return (
    <>
    <Navbar />
      {/* Bagian awal/atas */}
      <div className="h-screen w-full relative flex justify-start items-center">
        <div className=" max-w-7xl mx-auto w-full">
          <div className="flex flex-col space-y-5">
            <div className=" h-3.5 w-[280px] bg-[#D9D9D9]" />
            <div className=" flex flex-col space-y-1">
              <h1 className=" text-7xl text-white font-bold">
                Save Animal, Save a Life!
              </h1>
              <h2 className="text-3xl text-white">
                &quot;Every Creature Deserves a Chance to Thrive.&quot;
              </h2>
            </div>
          </div>
        </div>
        {/* Bagian contact us */}
        <div className=" absolute right-0 bottom-0">
          <div className="flex flex-col items-end py-12 px-20 bg-brand/30 backdrop-blur-xl">
            <p className="text-white text-2xl">Lost or Found a Pet?</p>
            <p className="text-white text-2xl">Call: 0648327435992</p>
          </div>
        </div>
        {/* Background image  */}
        <div className="bg-hero-pattern bg-no-repeat bg-cover w-full h-full absolute -z-1" />
      </div>
      {/* Akhir Bagian awal/atas */}
      {/* Bagian kedua */}
      <div className="flex flex-col justify-center space-y-20 bg-main py-12 items-center">
        <h3 className=" text-black text-4xl font-semibold">Available Cats</h3>
        <div className="grid grid-cols-3 gap-28">
          <Card
            src="/cat1.png"
            name="Persia"
            gender="Female"
            age="1.5 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/cat2.png"
            name="Maine Coon"
            gender="Female"
            age="2 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/cat3.png"
            name="Scottish Fold"
            gender="Female"
            age="2 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/cat4.png"
            name="Munchkin"
            gender="Female"
            age="2 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/cat5.png"
            name="Ragdoll"
            gender="Female"
            age="1 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/cat6.png"
            name="Persia"
            gender="Scottish Fold"
            age="3 Years"
            location="ADOCE - Jakarta"
          />
          {showCat ? (
            <>
              <Card
                src="/cat7.png"
                name="Scottish fold"
                gender="Female"
                age="1 Years"
                location="ADOCE - Jakarta"
              />
              <Card
                src="/cat8.png"
                name="Maine Coon"
                gender="Female"
                age="1 Years"
                location="ADOCE - Jakarta"
              />
              <Card
                src="/cat9.png"
                name="Persia"
                gender="Male"
                age="2 Years"
                location="ADOCE - Jakarta"
              />
            </>
          ) : null}
        </div>
        {!showCat ? (
          <Button onClick={() => setShowCat(true)} name="View All Cats" />
        ) : null}
      </div>
      {/* Bagian ketiga */}
      <div className="flex flex-col justify-center space-y-20 bg-main pt-24 pb-12 items-center">
        <h3 className=" text-black text-4xl font-semibold">Available Dogs</h3>
        <div className="grid grid-cols-3 gap-28">
          <Card
            src="/dog1.png"
            name="Poodle"
            gender="Female"
            age="1.5 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/dog2.png"
            name="German Shepherd"
            gender="Female"
            age="2 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/dog3.png"
            name="Golden Retriever"
            gender="Female"
            age="2 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/dog4.png"
            name="Beagle"
            gender="Female"
            age="2 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/dog5.png"
            name="Dachshund"
            gender="Female"
            age="3 Years"
            location="ADOCE - Jakarta"
          />
          <Card
            src="/dog6.png"
            name="Chihuahua"
            gender="Scottish Fold"
            age="1 Years"
            location="ADOCE - Jakarta"
          />
        {showDog ? (
            <>
              <Card
                src="/dog7.png"
                name="Pudel"
                gender="Female"
                age="2 Years"
                location="ADOCE - Jakarta"
              />
              <Card
                src="/dog8.png"
                name="Rottweiler"
                gender="Female"
                age="3 Years"
                location="ADOCE - Jakarta"
              />
              <Card
                src="/dog9.png"
                name="Beagle"
                gender="Male"
                age="1 Years"
                location="ADOCE - Jakarta"
              />
            </>
          ) : null}
        </div>
        {!showDog ? (
          <Button onClick={() => setShowDog(true)} name="View All Dogs" />
        ) : null}
      </div>
      {/* Bagian keempat */}
      <div className=" bg-brand w-full py-8">
        <div className="max-w-3xl mx-auto flex flex-col space-y-5 items-center">
          <p className="text-white text-3xl font-bold">Care Animals</p>
          <p className=" text-xl text-white text-center">
            Your contribution today will provide essential care for abandoned,
            injured, and orphaned animals immediately, during their moment of
            necessity.
          </p>
          <Button name="Donate Now" className="bg-white text-brand" />
        </div>
      </div>
      <div className=" bg-main w-full py-3">
        <div className="max-w-xl mx-auto">
          <p className="text-brand text-center text-sm">Copyright 2023</p>
        </div>
      </div>
    </>
  );
}
