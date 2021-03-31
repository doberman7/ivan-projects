import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Item } from "./Item";
import { List } from "./List";
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
const Rectangles = () => {
  return (
    <>
      {" "}
      <div className="container">
        <AnimateSharedLayout type="crossfade">
          <Router>
            <Route path={["/:id", "/"]} component={Store} />
          </Router>
        </AnimateSharedLayout>
      </div>
    </>
  );
};
export default Rectangles;
