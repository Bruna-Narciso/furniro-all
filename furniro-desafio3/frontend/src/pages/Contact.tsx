
import Benefits from "@/components/Benefits/Benefits"
import { ContactLayout } from "@/components/Contact/ContactLayout"
import PageBanner from "@/components/Shop/PageBanner"
export const Contact = () => {
    return(
        <div>      
        <PageBanner
        title="Contact"
        breadcrumbHome="Home"
        breadcrumbCurrent="Contact"
      />
      <ContactLayout/>
      <Benefits/>
      </div>
    
)
    
}