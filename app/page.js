'use client'
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useUser } from "@clerk/nextjs";
import Spinner from "react-spinkit";
export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <main>
      <Header />
      {/* {!isLoaded &&   ( <div className='flex items-center justify-center h-screen'>
    <Spinner name="ball-spin-fade-loader" color="blue" fadeIn="none" />
    </div>)} */}
      {/* {user &&
       (<Sidebar />)
      } */}
     <Sidebar />
    </main>
  );
}
