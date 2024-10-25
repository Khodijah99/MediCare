import Image from "next/image";
import Signin from "./account/signin/page";
import Header from "./ui/shared/header";
import Hero from "./ui/shared/hero";
import Footer from "./ui/shared/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Signin/>
      <Footer/>
    </div>
  );
}
