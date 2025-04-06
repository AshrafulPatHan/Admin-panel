import Navbar from "@/components/navigation/navbar"
import Sidebar from "@/components/navigation/sidebar"


export default function Home() {
  return (
    <div className="flex flex-row items-start gap-20 ">
      <Sidebar/>
      <div>
        <Navbar  />
        <div className="body">
          h
        </div>
      </div>
    </div>
  );
}
