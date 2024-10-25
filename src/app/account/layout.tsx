import Footer from "../ui/shared/footer";
import Header from "../ui/shared/header"
import Hero from "../ui/shared/hero"




export default function AccountLayout({ children }: { children: React.ReactNode }) {
  
    return (
     <div>
       <Header/>
       <Hero/>
     
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> 
  
     <Footer/>
     </div>
       
       
      
    );
  }