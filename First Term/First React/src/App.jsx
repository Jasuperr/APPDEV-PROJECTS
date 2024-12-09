import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"
export default function App(){
    return(
        <>
        <Header />
        <Body name="Jasper Jhay" food="Pizza" isHealthy = {false} age ={23}/>
        <Body />
        <Footer />
        </>
    )
}