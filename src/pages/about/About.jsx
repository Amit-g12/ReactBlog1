import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css' 


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Dolorum quas doloremque laborum repellendus voluptatem placeat quos omnis maiores ut. Totam?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit blanditiis iusto in labore asperiores hic ipsa laudantium accusamus animi! 
            Consequuntur dolorem deleniti fugiat, inventore quae provident, ab porro modi dignissimos sed at? 
            Reiciendis consequatur ipsum sit non repellendus vero laboriosam!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ad facere quia repellendus, 
            quis doloribus iure, beatae ex iusto saepe placeat ratione cumque magni ab, 
            dolores dignissimos soluta qui voluptates?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Excepturi illum vero iusto ex porro itaque facilis rerum eaque odit? Cumque.
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision ">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit blanditiis iusto in labore asperiores hic ipsa laudantium accusamus animi! 
            Consequuntur dolorem deleniti fugiat, inventore quae provident, ab porro modi dignissimos sed at? 
            Reiciendis consequatur ipsum sit non repellendus vero laboriosam!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ad facere quia repellendus, 
            quis doloribus iure, beatae ex iusto saepe placeat ratione cumque magni ab, 
            dolores dignissimos soluta qui voluptates?
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit blanditiis iusto in labore asperiores hic ipsa laudantium accusamus animi! 
            Consequuntur dolorem deleniti fugiat, inventore quae provident, ab porro modi dignissimos sed at? 
            Reiciendis consequatur ipsum sit non repellendus vero laboriosam!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ad facere quia repellendus, 
            quis doloribus iure, beatae ex iusto saepe placeat ratione cumque magni ab, 
            dolores dignissimos soluta qui voluptates?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Excepturi illum vero iusto ex porro itaque facilis rerum eaque odit? Cumque.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About