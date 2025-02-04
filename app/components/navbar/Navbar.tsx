import Link from "next/link";
import Image from "next/image";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import { getUserId } from "@/app/lib/action";
import AddProperty from "./AddProperty";
const Navbar = async () => {
  const userId = await getUserId();
  console.log("userId:", userId);

  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="escapade logo" width={80} height={80} />
          </Link>
          <div className="flex space-x-6">
            <SearchFilters />
          </div>
          <div className="flex flex-row item-center">
            <AddProperty />
            <UserNav userId={userId} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
