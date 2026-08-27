import { CheckoutInput } from "@/components/Checkout/Checkout"
import PageBanner from "@/components/Shop/PageBanner"

export const Checkout = () => {

    return(
        <div>
            <PageBanner title="Checkout" breadcrumbHome="Home" breadcrumbCurrent="Checkout"/>
            <CheckoutInput/>
        </div>
    
)
}