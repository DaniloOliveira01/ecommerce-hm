import { Announcement } from "../../components/Announcement/Announcement";
import { Navbar } from "../../components/Navbar/Navbar";
import { Slider } from "../../components/Slider/Slider";

export function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
    </>
  )
}