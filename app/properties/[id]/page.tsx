import Image from "next/image";

import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
const PropertyDetailPage = () => {
  return (
    <>
      <main className="max-w-[1500px] mx-auto px-6">
        <div className="w-full h-[64vh] mb-5 overflow-hidden rounded-xl relative">
          <Image
            fill
            src="/beach_1.jpg"
            alt="Beach House"
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="py-6 pr-6 col-span-3">
            <h1 className="mb-4 text-4xl">Property Name</h1>
            <span className="mb-6 block text-lg text-gray-600">
              3 Guests - 2 bedroom
            </span>
            <hr />
            <div className="py-6 flex items-center space-x-4">
              <Image
                src="/profile_pic_1.jpg"
                width={50}
                height={50}
                className="rounded-full"
                alt="The User Picture"
              ></Image>
              <p>
                <strong>Amine</strong> is your host
              </p>
            </div>
            <hr />
            <p className="mt-6 text-lg">
              "The quick brown fox jumps over the lazy dog.", "Artificial
              intelligence is shaping the future.", "Coding is like solving a
              puzzle with logic.", "Mathematics is the language of the
              universe.", "Creativity and knowledge go hand in hand."
            </p>
          </div>
          <ReservationSideBar />
        </div>
      </main>
    </>
  );
};
export default PropertyDetailPage;
