import React from "react";
import { Row, Col, Card, Spin } from "antd";
const { Meta } = Card;
const apps = [
  {
    id: 1,
    link: "https://tienda-de-garage.herokuapp.com",
    title: "Tienda de Garage",
  },
  {
    id: 2,
    link: "https://spotify-ivan.herokuapp.com",
    title: "Spotify Search",
  },
  {
    id: 3,
    link: "https://reddit-doberman7.vercel.app/",
    title: "Reddit Clone",
  },
];
const RowAndColumns = () => {
  return (
    <>
      <div className="site-card-wrapper" style={{ padding: "1rem 2rem" }}>
        <Row gutter={16}>
          {apps ? (
            apps.map((app) => (
              <Col span={8} key={app.id}>
                <div>
                  <Card
                    offset={4}
                    title={app.title}
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }>
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                  ,
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

export default RowAndColumns;
