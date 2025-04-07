import { FaHome } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
// import { Link } from "lucide-react";


export default function Navbar() {
   return(
      <div className="sticky top-0 z-50 flex flex-col items-center ml-[5vw] pt-3 ">
         <div className="w-[70vw] h-[70px] justify-between bg-blue-200 flex flex-row items-center px-10 rounded-4xl  ">
            <Link href="/" className="flex items-center gap-2">
               <FaHome className="text-2xl mb-1" />
               Home / Page
               <AiOutlineMenuUnfold className="text-2xl"/>
            </Link>
            <div className="flex items-center gap-8 text-lg text-green-700">
               <Link href='gamer' className="hover:text-blue-600">Asum gamer news</Link>
               <Link href='#' className="hover:text-blue-600">Add data to techno blogger</Link>
               <Link href='spam' className="hover:text-blue-600">spam</Link>
               <Link href='#' className="hover:text-blue-600">Login</Link>
            </div>
            <div className="flex items-center gap-6">
               <input type="text" placeholder="Search here" 
               className="border-2 border-[#7B809A] rounded-4xl px-4 h-[42px] " />
               <FaUserCircle className="text-2xl"/>
               <IoMdSettings className="text-2xl"/>
               <FaBell className="text-2xl"/>
            </div>
         </div>
      </div>
   )
}