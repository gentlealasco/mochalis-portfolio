function Footer() {
  return (
    <footer className="footer" id="footer">
      <h2>Contact</h2>
      <ul className="footer-list">
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
          <span>@Mocahlis Kitchen</span>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
          <span>Mocahlis Kitchen</span>
        </li>
      </ul>
      <p className="copyright">
        © {new Date().getFullYear()} Mocahlis Kitchen. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;
