import React from 'react';

/*
Hi Brian, I have this set up now so the landing page will load first. I just made a toggle button for us to use to go back and forth from the landing page to the search page when we are working on the app, you can do whatever you want with it. I have an index.css file but feel free to create your own style file for the landing page if you'd like. Don't hesistate to reach out with any questions, just remember since its React there has to be one div/container in the return that houses all of the other elements (I just made a div and set to 100vh) and that you have to use 'className' instead of 'class'.

*/




export default function Landing({home, setHome}) {




    return (
        <div style={{height: "100vh"}}>
            Welcome to the landing Page!
         <button onClick={() => setHome(2)}>Start your search</button>   
        </div>
    )
}
