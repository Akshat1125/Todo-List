import React from "react";
import { Provider } from "react-redux";
import Store from "./Components/Store";

import Todo from "./Components/Todo";
const App = () => {

  return (
    <> <div style={{display:'grid',placeItems:'center'}}>
            <Provider store={Store}>
       <Todo />
    </Provider>
    </div>
    </>

  );
};
export default App;
