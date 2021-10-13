import React from "react";
import { Row, Col, Card, Spin, Anchor } from "antd";
const { Meta } = Card;

const { Link } = Anchor;

const ProjectBig = () => {
  const apps = [
    {
      id: 1,
      link: "https://tienda-de-garage.herokuapp.com",
      title: "Tienda de Garage",
      imagen: "./images/tienda-de-garage.png",
      description:
        "offer products for sale and compare them with the available ones",
    },
    {
      id: 2,
      link: "https://spotify-ivan.herokuapp.com",
      title: "Spotify Search",
      imagen: "./images/spotify-search.png",
      description:
        "is the app you need to look tha spotify catalog and search for your favorite song",
    },
    {
      id: 3,
      link: "https://reddit-doberman7.vercel.app/",
      title: "Reddit Clone",
      imagen: "./images/reddit-clone.png",
      description:
        "do you want to check reddit home on a cleaner view this is the app for for you ",
    },
  ];
  return (
    <>
      <div className="site-card-wrapper" style={{ padding: "1rem 2rem" }}>
        <Row>
          {apps ? (
            apps.map((app) => (
              <Col
                className="gutter-row"
                span={8}
                key={app.id}
                xs={24}
                // sm={24}
                // md={8}
              >
                <div>
                  <Card
                    // offset={4}
                    title={app.title}
                    // hoverable
                    style={{ borderRadius: "30px" }}
                    cover={<img alt="example" src={app.imagen} />}>
                    {/* <Meta title={app.title} /> */}
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        // textDecoration: "none",
                        // color: "#adc6ff",
                        // position: "absolute",
                        zIndex: 1,
                      }}>
                      {app.title}
                    </a>
                    :<span>&nbsp;&nbsp;</span>
                    {app.description}
                  </Card>
                  <br />
                </div>
              </Col>
            ))
          ) : (
            <Spin size="large" />
          )}
        </Row>
      </div>
    </>
  );
};

export default ProjectBig;