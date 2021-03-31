import React from "react";

import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./Item";
import { List } from "./List";
import { Header } from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProjectLinks from "./ProjectLinks";
import Contact from "./Contact";
import Text from "./Text";
import Purple from "./Purple";
function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

const Home = () => {
  return (
    <>
      <Header />
      <Purple />

      <Text />
      <div className="container">
        <AnimateSharedLayout type="crossfade">
          <Router>
            <Route path={["/:id", "/"]} component={Store} />
          </Router>
        </AnimateSharedLayout>
      </div>

      <ProjectLinks />
      <Contact />
    </>
  );
};

// export default Router;
export default Home;
