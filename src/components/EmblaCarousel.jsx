import useEmblaCarousel from'embla-carousel-react'
import '../style/Carousel.css'
import Autoscroll from 'embla-carousel-auto-scroll'
import logo from '../images/hero_background.jpg'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoscroll()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <div className="embla__content">
                <div className='embla__image__container'><img src={logo}></img></div>
          
                {/* <h2>test1</h2>
                <p>test2</p> */}
            </div>
        </div>
         <div className="embla__slide">
            <div className="embla__content">
                <div className='embla__image__container'><img src={logo}></img></div>
          
                {/* <h2>test1</h2>
                <p>test2</p> */}
            </div>
        </div>
         <div className="embla__slide">
            <div className="embla__content">
                <div className='embla__image__container'><img src={logo}></img></div>
          
                {/* <h2>test1</h2>
                <p>test2</p> */}
            </div>
        </div>
      </div>
    </div>
  )
}