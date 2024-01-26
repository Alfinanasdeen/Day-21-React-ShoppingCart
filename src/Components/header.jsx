const Header = () => {
  const headerStyle = {
    background: "#212529",
    color: "#fff",
    padding: "5rem 0",
    textAlign: "center",
    width: "100%",
    margin: "0",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: "0",
  };

  const subtitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "normal",
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: "1rem",
  };

  return (
    
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div>
          <h1 style={titleStyle}>Shop in style</h1>
          <p style={subtitleStyle}> With this shop hompeage template</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
