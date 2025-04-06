'use client';

import Image from "next/image";
import Logo from "@/public/Logo.png";
// import dL from "@/public/dashboard.png";
import { Button, DropdownMenu } from "@radix-ui/themes";

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
                  <DropdownMenu.Root>
                     <DropdownMenu.Trigger>
                        <Button variant="soft">
                           Options
                           <DropdownMenu.TriggerIcon />
                        </Button>
                     </DropdownMenu.Trigger>
                     <DropdownMenu.Content>
                        <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

                        <DropdownMenu.Sub>
                           <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                           <DropdownMenu.SubContent>
                              <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                              <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                              <DropdownMenu.Separator />
                              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                           </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>Share</DropdownMenu.Item>
                        <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                           Delete
                        </DropdownMenu.Item>
                     </DropdownMenu.Content>
                  </DropdownMenu.Root>

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