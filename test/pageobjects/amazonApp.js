import Page from "./page"

class amazonApp extends Page{
    
    get search(){ return $("react")}

    open(url) {
        super.open(url);
      }
    
}

export default new amazonApp();