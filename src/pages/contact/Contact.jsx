import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import{ MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import './contact.css'




const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image= {HeaderImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, praesentium. Tempore veritatis at esse dolorum!
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href='mailto:amitkumargang123@gmail.com' target="_blank" rel="noreferrer noopener"><MdEmail /></a>
          <a href='http://m.me/amitkumargang123' target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
          <a href='http://www.instagram.com/the_good_fella_007/' target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact