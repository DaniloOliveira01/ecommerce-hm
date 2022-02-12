import { Announcement } from "../../components/Announcement/Announcement";
import { Category } from "../../components/Category/Category";
import { Footer } from "../../components/Footer/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { NewSletter } from "../../components/Newsletter/NewSletter";
import { ProductsItem } from "../../components/ProductsItem/ProductesItem";
import { Slider } from "../../components/Slider/Slider";

export function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <ProductsItem />
      <NewSletter />
      <Footer />
    </>
  )
}