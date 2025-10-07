import Logo from '../Images/logo.png';
function Footer() {
  return (
    <footer className="end" id="footer">
      <section className="main">
      <img src={Logo} alt="Logo" width={200} height={100} />
      
      <div className='contact'>
        <h2>Contact</h2>
        <li>
          <i className="fab fa-whatsapp"></i>
           <span>07034704797</span>
        </li>
        <li>
          <i className="fab fa-whatsapp"></i>
           <span>07034704797</span>
        </li>
        <li>
        <i className="fab fa-facebook"></i>
          <span>Mocahlis Kitchen</span>
        </li>
        <li>
          <i className="fab fa-tiktok"></i>
          <span>&#64;Mocahlis Kitchen</span>
        </li>
         <li>
          <i className="fab fa-instagram"></i>
          <span>Mocahlis Kitchen</span>
        </li>
      </div>
      <div className="footer-address">
         <h4>Address</h4>
         <p>NO 3 Goldie Close, Calabar.</p>
       </div>
    </section>
    <p className="copyright">
      &copy; {new Date().getFullYear()} Mocahlis Kitchen. All rights reserved.
      </p>
</footer>
  )
}

export default Footer;
