import './App.css';
import Testimony from './components/Testimony'
import React from "react";
import Records from './testimony-records.json'

function App() {
  return (
    <div className="App">
        <div className='main-container'>
            <h1>Here is what our alumni say about freeCodeCamp:</h1>
            {
                Records && Records.map( record => {
                    return(
                        <Testimony
                            name={ record.name }
                            country={ record.country }
                            image={ record.image }
                            position={ record.position }
                            company={ record.company }
                            testimony={ record.testimony }
                        />
                    )
                })
            }
            <Testimony
                name='Shawn Wang'
                country='Singapore'
                image='Shawn'
                position='Software Engineer'
                company='Amazon'
                testimony='It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
            />
            <Testimony
                name='Sarah Chima'
                country='Nigeria'
                image='Sarah'
                position='Software Engineer'
                company='ChatDesk'
                testimony='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
            />
            <Testimony
                name='Emma Bostian'
                country='Sweden'
                image='Emma'
                position='Software Engineer'
                company='Spotify'
                testimony='I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
            />
        </div>
    </div>
  );
}

export default App;
