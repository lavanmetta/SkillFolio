import Footer from "../Footer/Footer";
import CvSlider from "./CvSlider";
import Home from "./Home";

export default function HomeMain() {
  return (
    <div className="main-home">
      <Home />
      <CvSlider />
      <Footer />
    </div>
  );
}
