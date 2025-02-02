import Image from "next/image";

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My reservations</h1>
      <div className="mt-4">
        <div className="  p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className=" col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beach_1.jpg"
                alt="Beach house"
                className="hover:scale-110 object-cover transition h-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <div className="col-span-1 md:col-span-3">
                <h2 className="mb-4 text-xl"></h2>

                <p className="mb-2">
                  <strong>Check in date:</strong> 14/07/2024
                </p>
                <p className="mb-2">
                  <strong>Check out date:</strong>
                </p>

                <p className="mb-2">
                  <strong>Number of nights:</strong>
                </p>
                <p className="mb-2">
                  <strong>Total price:</strong> £300
                </p>
              </div>
            </div>
            <div className="py-4 px-6 bg-escapade cursor-pointer  hover:bg-escapade-dark rounded-xl text-white w-fit">
              Go to property
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="  p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className=" col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beach_1.jpg"
                alt="Beach house"
                className="hover:scale-110 object-cover transition h-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <div className="col-span-1 md:col-span-3">
                <h2 className="mb-4 text-xl"></h2>

                <p className="mb-2">
                  <strong>Check in date:</strong> 14/07/2024
                </p>
                <p className="mb-2">
                  <strong>Check out date:</strong>
                </p>

                <p className="mb-2">
                  <strong>Number of nights:</strong>
                </p>
                <p className="mb-2">
                  <strong>Total price:</strong> £300
                </p>
              </div>
            </div>
            <div className="py-4 px-6 bg-escapade cursor-pointer hover:bg-escapade-dark rounded-xl text-white w-fit">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
