import React from "react"
import videoSampleProj from '../../../assets/video/logo5.mp4'



const ProjectBanner = () => {
    <section className="w-screen">
{' '}
<div>
  <video className="w-full absolute z-0" id="/" autoPlay loop muted>
    <source src={videoSampleProj} type="video/mp4" />
  </video>
</div>
</section>
}


export default ProjectBanner
