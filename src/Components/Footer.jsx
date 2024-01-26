const Footer = () => {
  const footerStyle = {
    background: "#212529",
    color: "#fff",
    padding: "3rem 0",
    textAlign: "center",
    marginTop: "0",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const copyrightStyle = {
    fontSize: "1rem",
    margin: "0",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={copyrightStyle}>Copyright © Your Website 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
