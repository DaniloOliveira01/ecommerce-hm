import { Announcement } from "../../components/Announcement";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { NewSletter } from "../../components/Newsletter";
import { Container } from "./style";

export function ProductUniq() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <NewSletter />
      <Footer />
    </Container>
  )
}