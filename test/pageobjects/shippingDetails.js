import Page from "./page";

class shippingDetails extends Page {
    get address() {return $("#address");}
    get city() {return $("#city");}
    get postalCode() {return $("#postalCode");}
    get country() {return $("#country");}
    get shippingContinue() {return $("#root > div > main > div > div > div.form > form > ul > li:nth-child(6) > button");}
    get paymentContinue(){ return $("#root > div > main > div > div > div.form > form > ul > li:nth-child(3) > button");}
    get paymentMethod() {return $("#root > div > main > div > div > div.form > form > ul > li:nth-child(2) > div > label");}
    get placeOrder() {return $("#root > div > main > div > div > div.form > form > ul > li:nth-child(3) > button")}
}

export default new shippingDetails();