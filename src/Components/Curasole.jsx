import React from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import Region from './Region'
import Topic from './Topic'
import Year from './Year'
import Relevance from './Relevance'

const Curasole = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide rounded-3 my-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <LineChart/>
      <div className="carousel-caption d-none d-md-block">
        <h5><b>Intensity</b> vs <b>Count</b></h5>
        <p>This is Intensity graph.</p>
      </div>
    </div>
    <div className="carousel-item">
      <BarChart/>
      <div className="carousel-caption d-none d-md-block">
      <h5><b>Country</b> vs <b>Count</b></h5>
      <p>This is Country graph.</p>
      </div>
    </div>
    <div className="carousel-item">
     <Region/>
      <div className="carousel-caption d-none d-md-block">
      <h5><b>Region</b> vs <b>Count</b></h5>
      <p>This is Region graph.</p>
      </div>
    </div>
    <div className="carousel-item">
     <Year/>
      <div className="carousel-caption d-none d-md-block">
      <h5><b>StartYear</b> vs <b>Count</b></h5>
      <p>This is Year graph.</p>
      </div>
    </div>
    <div className="carousel-item">
     <Topic/>
      <div className="carousel-caption d-none d-md-block">
      <h5><b>Topic</b> vs <b>Count</b></h5>
      <p>This is Topic graph.</p>
      </div>
    </div>
    <div className="carousel-item">
     <PieChart/>
      <div className="carousel-caption d-none d-md-block">
      <h5><b>Likelihood</b> vs <b>Count</b></h5>
      <p>This is Linkelihood graph.</p>
      </div>
    </div>
    <div className="carousel-item">
     <Relevance/>
      <div className="carousel-caption d-none d-md-block">
      <h5><b>Relevance</b> vs <b>Count</b></h5>
      <p>This is Relevance graph.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Curasole