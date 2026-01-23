import NavBar from "../components/NavBar";

import '../style/Portfolio.css'

export default function PortfolioPage() {
    return (
        <>
            <div className='portfolio-hero-container'>
                <NavBar/>
                <div className='portfolio-hero-text-container'>
                    <h1>Our Work</h1>
                </div>
            </div>
            <div className='gallery-container'>


            </div>
        </>
    )
}