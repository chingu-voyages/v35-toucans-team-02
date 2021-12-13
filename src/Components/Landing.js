import React from 'react';
import { features, testimonials } from '../data';
import Internet from '../assets/Internet'
import Newspaper from '../assets/Newspaper'
import Wishlist from '../assets/Wishlist'
import Streaming from '../assets/Streaming'
import Logo from '../assets/Logo'

/*
Hi Brian, I have this set up now so the landing page will load first. I just made a toggle button for us to use to go back and forth from the landing page to the search page when we are working on the app, you can do whatever you want with it. I have an index.css file but feel free to create your own style file for the landing page if you'd like. Don't hesistate to reach out with any questions, just remember since its React there has to be one div/container in the return that houses all of the other elements (I just made a div and set to 100vh) and that you have to use 'className' instead of 'class'.

*/

const NavItem = ({ onClick, color, href = '#', children }) => (
    <li onClick={onClick} style={{ listStyle: 'none', backgroundColor: color, padding: '2rem 1rem 0.5rem 1rem' }}>
     <a href={href} style={{ textDecoration: 'none', color: '#fff' }}>{children}</a>
    </li>
)

const Nav = ({ setHome }) => (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem', alignItems: 'center' }}>
        <Logo />
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem' }}>
            <NavItem color="#FC636B">
                My Watchlist
            </NavItem>
            <NavItem onClick={() => setHome(2)} color="#484A6F">
                Movie Search
            </NavItem>
            <NavItem color="#1AAFD0">
                Streaming Services
            </NavItem>
            <NavItem color="#FFB902">
                Movie News
            </NavItem>
            <NavItem>
                Login / Register
            </NavItem>
        </ul>
    </nav>
)

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', backgroundColor: '#CAC9D2', padding: '3rem 2rem'}}>
    {testimonials.map((item) => (
        <div style={{ display: 'flex', gap: '0.5rem', flexDirection: item.reversed ? 'row-reverse' : 'row' }}>
            <img src={item.imgSrc} alt={item.name} style={{ borderRadius: '9999px', width: '6rem', height: '6rem', backgroundColor: '#CAC9D2' }} />
            <div>
            <p style={{ margin: 0, color: '#565775' }}>{item.testimony}</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#565775', textAlign: item.reversed ? 'end' : 'start' }}>{item.name}, <span style={{ fontWeight: 'normal' }}>{item.location}</span></p>
            </div>
        </div>
    ))}
    </div>
)


export default function Landing({home, setHome}) {
    return (
        <div style={{height: "100vh"}}>
         <Nav setHome={setHome} />
         <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem'}}>
         <Features /> 
         <Testimonials />
         </div>
        </div>
    )
}
