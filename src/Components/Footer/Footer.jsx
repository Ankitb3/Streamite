import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="footer_div">
        <div>
          <p>&copy; 2023 Movie Website STREAMIT. All rights reserved.</p>
        </div>
        <div>
          <p>Designed by Ankit Bankar.</p>
        </div>
      </div>
    </footer>
    // <footer className="footer bg-black text-white footer_main">
    //   <Container>
    //     <div className="d-flex flex-wrap">
    //       <div className="text-center ">
    //         <p>&copy; 2023 Movie Website STREAMIT. All rights reserved.</p>
    //       </div>
    //       <div className="text-sm-right">
    //         <p>Designed by Ankit Bankar.</p>
    //         <p style={{ cursor: "pointer" }}>Contact- bankarankit3@gmail.com</p>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
  );
};

export default Footer;
