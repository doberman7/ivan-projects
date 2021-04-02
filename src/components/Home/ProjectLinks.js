import LinksListItems from "./LinksListItems";

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

        {LinksListItems()}
      </div>
    </>
  );
};

export default ProjectLinks;
