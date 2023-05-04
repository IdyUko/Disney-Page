import React from 'react';


function Hero() {
  return (
   <div>
    
        <div ><img className="logoimg" src='/Disney logo.png'/></div>

        <div className='icons'>
                <div className='playbutton'>
                        <div className='playicon' ><img className='playimg'  src="/play.png"/></div>
                        <div className='play'><b>Play</b></div>
                </div>

                <div class='trailerbutton'>
                       <div className='playicon'><img className='playimg'  src="/play.png" /></div>
                        <div className='trailer'><b>Trailer</b></div>
                </div>
            
                        <div className="circle"><img className="plus"  src="/plus.png"/></div> 
                        <div className="circle"><img className="people"  src="/people.png"/></div> 
              
        </div>

        <div className='text1'><b>2018.1hr 58m.science fiction, family, Animation, Action-adventure</b></div>
        <div className='text2'><b>While Helen is called on to lead a campaign to bring back the supers, Bob navigates the<br/>
        day-to-day heroics of "normal" life at home with Violet, Dash and jack-jack, whose super powers<br/>
        are about to be discovered. Their mission is derailed, however, when a new vilain emerges<br/>
        with a brilliant and dangerous plot that threatens everything. But with Frozone by their side,<br/>
        the parrs can take on anything.</b></div>

   </div>
    
  );
}

export default Hero;
