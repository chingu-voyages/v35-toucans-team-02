import React from 'react';
import { features, testimonials } from '../data';
import Internet from '../assets/Internet'
import Newspaper from '../assets/Newspaper'
import Wishlist from '../assets/Wishlist'
import Streaming from '../assets/Streaming'

/*
Hi Brian, I have this set up now so the landing page will load first. I just made a toggle button for us to use to go back and forth from the landing page to the search page when we are working on the app, you can do whatever you want with it. I have an index.css file but feel free to create your own style file for the landing page if you'd like. Don't hesistate to reach out with any questions, just remember since its React there has to be one div/container in the return that houses all of the other elements (I just made a div and set to 100vh) and that you have to use 'className' instead of 'class'.

*/

const Features = () => (
    <div className="features" style={{ display: 'flex', gap: '2rem', minHeight: '256px', color: 'white'}}>
        {features.map((item) => (
            <div style={{ display: 'flex', flexDirection: 'column',  backgroundColor: item.color, padding: '2rem', alignItems: 'center' }}>
                {item.icon === 'internet' && <Internet />}
                {item.icon === 'wishlist' && <Wishlist />}
                {item.icon === 'streaming' && <Streaming />}
                {item.icon === 'newspaper' && <Newspaper />}
                <h3 style={{ fontSize: '1.5rem', textAlign: 'center' }}>{item.title.toUpperCase()}</h3>
                <hr style={{ height: '2px', width: '80%', backgroundColor: 'white' }} />
                <p>{item.description}</p>
            </div>
        ))}
    </div>
);

const Testimonials = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', backgroundColor: 'lightgray', padding: '3rem 2rem'}}>
    {testimonials.map((item) => (
        <div style={{ display: 'flex', gap: '0.5rem', flexDirection: item.reversed ? 'row-reverse' : 'row' }}>
            <img src={item.imgSrc} alt={item.name} style={{ borderRadius: '9999px', width: '6rem', height: '6rem', backgroundColor: 'floralwhite' }} />
            <div>
            <p style={{ margin: 0 }}>{item.testimony}</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.name}, {item.location}</p>
            </div>
        </div>
    ))}
    </div>
)


export default function Landing({home, setHome}) {
    return (
        <div style={{height: "100vh"}}>
            Welcome to the landing Page!
         <button onClick={() => setHome(2)}>Start your search</button>  
         <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem'}}>
         <Features /> 
         <Testimonials />
         </div>
        </div>
    )
}
