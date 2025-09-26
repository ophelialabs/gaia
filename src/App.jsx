import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Globe from 'react-globe.gl'
import './App.css'

function App() {
  const globeRef = useRef(null);
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    // Load country data
    fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Interactive 3D Globe</h1>
      <div className="globe-container">
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.3}
          hexPolygonColor={() => '#1b262c'}
          enablePointerInteraction={true}
          width={800}
          height={800}
        />
      </div>
    </div>
  )
}

export default App
