import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersMain from "../Users/UsersMain";

const RouterSwitch = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<h1>My Project</h1>} />
        <Route path="/users" element={<UsersMain />} />
      </Routes>
      
    </div>
  );
};

export default RouterSwitch;
