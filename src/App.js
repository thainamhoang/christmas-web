import React, { memo } from "react";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

const App = memo(
  () => {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  },
  (prev, next) => React.isEqual(prev, next)
);
export default App;
