
import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';

const App=()=>{
  const pageSize=6;

  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
            <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
        <NavBar/>
            <Routes>
                <Route exact path="/" element={<News setProgress={setProgress}  key="general"pagesize={pageSize}category="General"/>} />
                <Route exact path="/business" element={<News setProgress={setProgress}  key="business"pagesize={pageSize}category="Business"/>} />
                <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment"pagesize={pageSize}category="Entertainment"/>} />
                <Route exact path="/general" element={<News setProgress={setProgress}  key="general"pagesize={pageSize}category="General"/>} />
                <Route exact path="/health" element={<News setProgress={setProgress}  key="health"pagesize={pageSize}category="Health"/>} />
                <Route exact path="/science" element={<News setProgress={setProgress}  key="science"pagesize={pageSize}category="Science"/>} />
                <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports"pagesize={pageSize}category="Sports"/>} />
                <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology"pagesize={pageSize}category="Technology"/>} />
            </Routes>
        </Router>
      </div>
    )
}

export default App;
