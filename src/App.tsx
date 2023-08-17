import React from 'react';
import '@assets/styles/App.scss';
import {RecoilRoot} from "recoil";
import TodoListPage from "./components/Pages/TodoListPage";

function App() {
  return (
      <RecoilRoot>
        <TodoListPage/>
      </RecoilRoot>
  );
}

export default App;
