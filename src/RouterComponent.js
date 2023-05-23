import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";
// import PageHeader from "./Pages/Header";
import Students from "./Pages/Student";
import NewStudent from "./Pages/NewStudent";
import EditStudent from "./Pages/EditStudent";
import PageHeader from "./Pages/Header";

function RouterComponent() {

  return (
    <BrowserRouter>
    <PageHeader/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/student" element={<Students/>}/>
        <Route path="/new-student" element={<NewStudent/>}/>
        <Route path="/edit-student" element={<EditStudent/>}/>
{/* 
        <Route
          path="/students"
          element={
            <store.Provider value={{ entries: data, enteriesFunc: setData }}>
              <Students />
            </store.Provider>
          }
        />
        <Route
          path="/new-student"
          element={
            <store.Provider value={{ entries: data, enteriesFunc: setData }}>
              <NewStudent />
            </store.Provider>
          }
        />
        <Route
          path="/edit-student"
          element={
            <store.Provider value={{ entries: data, enteriesFunc: setData }}>
              <EditStudent />
            </store.Provider>
          }
        /> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;

