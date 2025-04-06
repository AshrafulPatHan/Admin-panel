'use client';

import Image from "next/image";
import Logo from "@/public/Logo.png";
import My from "@/public/my.png";
import DB from "@/public/dashboard.png";
// import dL from "@/public/dashboard.png";
// import { Button, DropdownMenu } from "@radix-ui/themes";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SlArrowDown } from "react-icons/sl";


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
               <div className="flex items-center gap-3 ml-4 " >
                  <Image src={My} width={32} height={32} className=" rounded-full" alt="my" />
                  <h2>Ashraful Pathan</h2>
               </div>
               <hr className="w-[210px] mt-4 mb-4 "/>
               <div className="flex flex-col items-start">
                  {/* Dashboards --------- */}
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                     <Button variant="outline" className="w-[208px] justify-evenly px-9 h-[48px] bg-[#58585E] hover:bg-[#202020] 
                      hover:text-white border-[#202020] rounded-none 
                      text-white ">
                        <Image src={DB} width={16} alt="Dash" />
                        Dashboards
                        <SlArrowDown />
                     </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-56">
                     <DropdownMenuLabel>My Account</DropdownMenuLabel>
                     <DropdownMenuSeparator />
                     <DropdownMenuGroup>
                        <DropdownMenuItem>
                           Profile
                           <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           Billing
                           <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           Settings
                           <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           Keyboard shortcuts
                           <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                     </DropdownMenuGroup>
                     </DropdownMenuContent>
                  </DropdownMenu>
                  <button className="w-[206px] justify-evenly px-9 h-[48px] ml-[1.49px] bg-[#E91F63] mt-1 border-[#202020] rounded-none 
                      text-white ">
                     <span className="mr-5">A</span> Analytics
                  </button>
                  <button className="w-[206px] justify-evenly px-9 h-[48px] ml-[1.49px] bg-[#ffa9a9d0] mt-1 border-[#202020] rounded-none 
                      text-white ">
                     <span className="mr-5">S</span> Smart Home
                  </button>
               </div>
               <div>
                  <h2 className="mt-3 text-blue-500">PAGES</h2>
                  <div className="flex flex-col items-start gap-[24px] ml-2 ">
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[208px] h-[48px] bg-[#202020] border-[#202020] rounded-none 
                        text-white ">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                           <DropdownMenuItem>
                              Profile
                              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Billing
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Settings
                              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Keyboard shortcuts
                              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                           </DropdownMenuItem>
                        </DropdownMenuGroup>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[208px] h-[48px] bg-[#202020] border-[#202020] rounded-none 
                        text-white ">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                           <DropdownMenuItem>
                              Profile
                              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Billing
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Settings
                              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Keyboard shortcuts
                              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                           </DropdownMenuItem>
                        </DropdownMenuGroup>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[208px] h-[48px] bg-[#202020] border-[#202020] rounded-none 
                        text-white ">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                           <DropdownMenuItem>
                              Profile
                              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Billing
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Settings
                              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Keyboard shortcuts
                              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                           </DropdownMenuItem>
                        </DropdownMenuGroup>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[208px] h-[48px] bg-[#202020] border-[#202020] rounded-none 
                        text-white ">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                           <DropdownMenuItem>
                              Profile
                              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Billing
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Settings
                              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Keyboard shortcuts
                              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                           </DropdownMenuItem>
                        </DropdownMenuGroup>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[208px] h-[48px] bg-[#202020] border-[#202020] rounded-none 
                        text-white ">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                           <DropdownMenuItem>
                              Profile
                              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Billing
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Settings
                              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Keyboard shortcuts
                              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                           </DropdownMenuItem>
                        </DropdownMenuGroup>
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </div>
               </div>
               <hr className="w-[210px]  mb-3 mt-3 "/>
               <div>
                  <h2>DOCS</h2>
                  <div className="flex flex-col items-start gap-[24px] ml-2 ">
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[208px] h-[48px] bg-[#202020] border-[#202020] rounded-none 
                        text-white ">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                           <DropdownMenuItem>
                              Profile
                              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Billing
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Settings
                              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Keyboard shortcuts
                              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                           </DropdownMenuItem>
                        </DropdownMenuGroup>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[208px] h-[48px] bg-[#202020] border-[#202020] rounded-none 
                        text-white ">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                           <DropdownMenuItem>
                              Profile
                              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Billing
                              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Settings
                              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              Keyboard shortcuts
                              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                           </DropdownMenuItem>
                        </DropdownMenuGroup>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <p>Changelog</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}