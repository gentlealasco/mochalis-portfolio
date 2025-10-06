import Pic1 from "../Images/pic1.jpg";
function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <img
          src={Pic1}
          alt="Pastry Chef"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
           Mocahlis Kitchen is where passion meets flavor. We craft pastries that don’t just taste 
           good—they make you smile, give thanks, and feel connected. Every recipe is made with love, 
           creativity, and purpose, ensuring that every bite is truly “A Taste That Praises.”
          </p>
          <p>
            From weddings to birthdays, I craft pastries that not only look
            beautiful but taste unforgettable.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
