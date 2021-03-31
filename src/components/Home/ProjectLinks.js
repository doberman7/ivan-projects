const ProjectLinks = () => {
  return (
    <>
      <div
        style={{
          padding: "50px",
          textAlign: "left",
          // background: "linear-gradient(280deg, #b0e, #d08)",
          // color: "black",
        }}
      >
        <h1>Links</h1>

        <a
          href="https://tienda-de-garage.herokuapp.com/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Tienda de Garage</p>
        </a>
        <a
          href="https://spotify-ivan.herokuapp.com/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Spotify Search</p>
        </a>
        <a
          href="https://space-demons3.herokuapp.com/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Space Challenge</p>
        </a>
        <a
          href="https://desolate-castle-34897.herokuapp.com/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Desolate Castle</p>
        </a>
      </div>
    </>
  );
};

export default ProjectLinks;
