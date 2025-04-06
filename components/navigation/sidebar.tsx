import Image from "next/image";
import Logo from "@/public/Logo.png";
import dL from "@/public/dashboard.png";

export default function Sidebar() {
   return(
      <div className="sticky top-0 z-50 ">
         <div className="flex flex-col items-start w-[250px] h-[97vh] bg-[#202020] pt-3 pl-5 mt-3 ml-1 rounded-[16px] 
      text-white mb-4" >
            <div>
               <div className="flex items-center gap-2 mb-5 mt-4">
                  <Image src={Logo} width={28} alt="logo" />
                  <h2 className="font-bold ">Admin Panel Ashraful</h2>
               </div>
               <hr className="w-[210px] mb-4 " />
               <div>
                  <p className="h-[48px] ">Profile</p>
               </div>
               <hr className="w-[210px] mb-4 "/>
               <div className="flex flex-col items-start">
                  <button className="h-[48px] ">Dashboard</button>
                  <button className="h-[48px] ">Analytics</button>
                  <button className="h-[48px] ">Smart Home</button>
               </div>
               <div>
                  <h2>PAGES</h2>
                  <div className="flex flex-col items-start gap-[24px] ml-2 ">
                     <p>Pages</p>
                     <p>Application</p>
                     <p>Ecommerce</p>
                     <p>Authentication</p>
                     <p>E Error</p>
                     <p>B Error 404</p>
                     <p>C Error 500</p>
                  </div>
               </div>
               <hr className="w-[210px]  mb-3 mt-3 "/>
               <div>
                  <h2>DOCS</h2>
                  <div className="flex flex-col items-start gap-[24px] ml-2 ">
                     <p>Basic</p>
                     <p>Components</p>
                     <p>Changelog</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}