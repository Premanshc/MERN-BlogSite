import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <Navbar className="border-b-2 p-2">
        <Link to="/" className="self-center whitespace-nowrap m-1">
          <img
            src="./images/bedtimeLogo.png"
            className="h-12 rounded-lg"
            alt="bedtimeStories Logo"
          />
        </Link>
        <div className="flex items-center justify-center">
          
          <input
            type="text"
            placeholder="Search..."
            className="px-5 py-2 mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 justify-between hidden lg:inline"
          />
          <div className="absolute right-2 px-4 py-2 rounded-r-md cursor-pointer hidden lg:inline">
            <AiOutlineSearch size={20} />
          </div>
        </div>
      </Navbar>
    </>
  );
}
