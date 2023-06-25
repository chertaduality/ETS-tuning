
import React from "react";
import logo from '../../assets/images/ETS_logo_black.png'
import layer2 from '../../assets/images/parallaxBackground/layer-2.png'
import layer5 from '../../assets/images/parallaxBackground/layer-5.png'
import layer6 from '../../assets/images/parallaxBackground/layer-6.png'

const Parallax = () =>{
    return (
<section className="flex flex-col justify-center">
    <div className='w-screen h-full overflow-hidden' >
        <img className="w-[500px] absolute overflow-hidden" src={logo} alt=''/>
    </div>
    <div className='w-screen h-full overflow-hidden'>
         <img src={layer2} alt='' className='absolute bottom-0 overflow-hidden'/>
         <img src={layer5} alt=''className='absolute overflow-hidden'/>
         <img src={layer6} alt=''className='absolute overflow-hidden'/>
    </div>
</section>
    )
}

export default Parallax 