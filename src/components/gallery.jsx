import Cake from "../Images/cake.jpg";
import Chinchin from "../Images/chinchin.jpg";
import Meatpie from "../Images/meatpie.jpg";
import Milky_doughnuts from "../Images/milky_doughnuts.jpg";
import Peppered_snail from "../Images/peppered_snail.jpg";
import Small_chops from "../Images/small_chops.jpg";
import Shortbread from "../Images/shortbread.jpg";
import Springroll from "../Images/springroll.jpg";
function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>My Pastry Gallery</h2>
      <div className="gallery-grid">
        <img src={Cake} alt="Cake" />
        <img src={Chinchin} alt="Chinchin" />
        <img src={Meatpie} alt="Meatpie" />
        <img src={Milky_doughnuts} alt="Milky_doughnuts" />
        <img src={Peppered_snail} alt="Peppered_snail" />
        <img src={Small_chops} alt="Small_chops" />
        <img src={Shortbread} alt="Shortbread" />
        <img src={Springroll} alt="Springroll" />
        
      </div>
    </section>
  )
}

export default Gallery;
