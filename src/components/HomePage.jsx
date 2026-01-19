import hero_background from '../images/hero_background.jpg'
import NavBar from "../components/NavBar";
import '../style/Home.css'
export default function HomePage() {
    return (
        <>
        <div className='hero-container'>
            <NavBar/>
            <div className='hero-text-container'>
                <h1>BUILD YOUR DREAM KITCHEN</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit laudantium iste in harum veritatis ipsam minima saepe, ducimus assumenda tempora necessitatibus voluptates minus laboriosam id magnam labore inventore. Ullam, minus.</p>
            </div>

        </div>
        </>
    )
}