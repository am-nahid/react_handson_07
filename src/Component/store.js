import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./CounterSlice";

export default configureStore({

    //store
   reducer: {
      student: StudentReducer
   }

})