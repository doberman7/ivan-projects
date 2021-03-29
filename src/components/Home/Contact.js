import {
  GithubOutlined,
  LinkedinOutlined,
  SyncOutlined,
} from "@ant-design/icons";
const Contact = () => {
  return (
    <>
      {" "}
      <div className="contact">
        <h5>Contact</h5>

        <a
          href="https://github.com/doberman7"
          style={{ textDecoration: "none", color: "white" }}
        >
          <GithubOutlined />{" "}
        </a>

        <a
          href="https://www.linkedin.com/in/ivan-rubio/"
          style={{ textDecoration: "none", color: "white" }}
        >
          {"   "}
          <LinkedinOutlined />
        </a>
      </div>
      <div>
        <p>
          Made by Ivan Rubi
          <SyncOutlined spin />
        </p>
      </div>
    </>
  );
};

export default Contact;
