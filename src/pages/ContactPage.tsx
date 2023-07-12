import { Contact, Hero } from '../paths'
import { hero_images } from '../assets/utlity'

const ContactPage = () => {
  return (
    <div>
        <Hero animationImage={'none'} backgroundImage={hero_images?.contact_hero}/>
        <Contact/>
    </div>
  )
}

export default ContactPage