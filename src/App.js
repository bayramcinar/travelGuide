import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Akdeniz from './components/akdeniz';
import Karadeniz from './components/karadeniz';
import IcAnadolu from './components/icAnadolu';
import Ege from './components/ege';
import DoguAnadolu from './components/doguAnadolu';
import Marmara from './components/marmara';
import GuneyDogu from './components/guneyDogu';
import Turkey from './components/allTurkey';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const regions = [
    { element: <Turkey /> , name: "" },
    { element: <Akdeniz /> , name: "akdeniz" },
    { element: <Ege /> , name: "ege" },
    { element: <DoguAnadolu /> , name: "doguAnadolu" },
    { element: <GuneyDogu /> , name: "guneyDoguAnadolu" },
    { element: <Marmara /> , name: "marmara" },
    { element: <IcAnadolu /> , name: "icAnadolu"},
    { element: <Karadeniz /> , name: "karadeniz" },
  ];




  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);
  const [animation, setAnimation] = useState('');
  const [info, setInfo] = useState('');
  const [infoStyle, setInfoStyle] = useState({});
  const [style, setStyle] = useState({});

  const isStart = currentRegionIndex === 0;
  const isEnd = currentRegionIndex === regions.length - 1;

  const navigate = useNavigate();

  const navigateToRegion = (nextIndex) => {
    if (nextIndex >= 0 && nextIndex < regions.length) {
      setAnimation('animate__animated animate__bounceInLeft');
      setCurrentRegionIndex(nextIndex);
      setTimeout(() => setAnimation(''), 500);

      const regionPath = `/${regions[nextIndex].name}`;
      navigate(regionPath);
    }
  };

  const handleMouseOver = (event) => {
    setStyle({ display: 'block' });
    if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
      setInfo(event.target.parentNode.getAttribute('data-iladi'));
    }
  };

  const handleMouseMove = (event) => {
    const top = event.pageY + 25 + 'px';
    const left = event.pageX + 'px';
    setInfoStyle({ top, left });
  };

  const handleMouseOut = () => {
    setInfo('');
    setStyle({ display: 'none' });
  };

  return (
    <>
      <div className="App row">
        <Navbar/>
        <div className="leftButton col-1">
          <button className={`btn btn-primary ${isStart ? 'gray' : ''}`} onClick={() => navigateToRegion(currentRegionIndex - 1)}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="bölgeler col-10">
          <div
            className={`bölge ${animation}`}
            onMouseOver={handleMouseOver}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
          >
          <Routes>
            {regions.map((region, index) => (
              <Route
                key={index}
                path={`/${region.name}`}
                element={region.element}
              />
            ))}
            <Route path="/" element={<Turkey />} />
            <Route path="*" element={<Turkey />} />
          </Routes>
          </div>
        </div>
        <div className="rightButton col-1">
          <button className={`btn btn-primary ${isEnd ? 'gray' : ''}`} onClick={() => navigateToRegion(currentRegionIndex + 1)}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="il-isimleri" style={style}>
          <div className="info" style={infoStyle}>
            {info}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
