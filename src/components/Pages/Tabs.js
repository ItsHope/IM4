import {useState} from "react";
import "../styles/App.css"

function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="c">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            THEORY BLOGS
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            REFLECTIONS
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            INTERNETWORK ART
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Blog 1</h2> 
            <h3>Critical Writing: net/web Art</h3>
            <hr />
            <p>
            After intensively engaging with especially “The Work of Art in the age of the internet” my choice of net/web art was Indirect Flights. Mr. Benjamin mentioned in his essay, “The work of Art in the age of its mechanical reproduction” that it is almost human nature to want to copy something so historically the idea of reproduction is not new.
            </p>
           
            <p>
            The authenticity of an art work is what Benjamin describes as the aura, “a phenomena’s uniqueness” (Benjamin, 2015). His theory suggests that every original piece of art has an aura, for example, “the aura of the sunset, the aura of nature”’ (Benjamin, 2015) that cannot be replaced. Therefore mechanically or technologically reproduced art refuse to appreciate or acknowledge that aura.
            </p>

           
            <p>
           Benjamin thinks highly of old forms of art, he describes them as creativity and genius. This is because of the value and mystery embedded in them and reproduction undoes that appreciation or status.
            </p>
            <p>
            The "Work Of Art In The Age Of The Internet" acknowledges the aura that Benjamin talks about but suggests that art on the internet still has evidence of “contemplative emersion” that usually is lost in mechanically reproduced art. This is because when viewing art on the internet we still somehow find ourselves staring.
            </p>

            <p>
            This "contemplative imersion" is possible because the internet offers tools that allow art to be viewed in different new ways. Digital art pieces can be viewed with music to assist with immersion  just like my case study Indirect Flights.
            </p>

            <p>
            Along with the music, I was also able to use my cursor to move the art piece around the screen, I could do it how I chose to. For example I could move it quickly and slowly right after,  which gave a new layer to the art or essentially produced a “new artform” because I was seeing the artwork in motion. This is something that would not be possible if the work of art was not on the internet. 
            </p>

            <p>
            Another tool that the internet offers,  is the ability to view art so closely that you can see the smallest details, “the display system has changed, you see the work better, close ups and etc.” (Carrier, 2020). Art on the internet today has taken this to a whole different level.
            </p>
            <p>
            There are zooming in and out tools that give the viewer the ability to engage with art like never before and completely indulge in the process.
            </p>
            <p>
            Danae mentioned that net art today can be seen as clunky, old fashioned or uncool. But I argue that, a piece like Indirect Flight, being able to interact with the artwork in new ways can be seen as a future improvement. The piece is layered with photos, a zooming in and out tool would have been so ideal. With that being said I still think the layers come together so nicely and I was still able to see and appreciate its beauty.
            </p>

            <p>
            References
            </p>
            <p>
                1.W (1935). The Work of Art in the Age of Mechanical Reproduction. Translated by J. A. Underwood, Penguin Books (2008).
            </p>
            <p>
             2.  D (2020). The Work of Art in the Age of the internet.
            </p>
            <p>
            3. Danae (2019). Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet
            </p>

        
            
            
            
            <h2>Blog 2</h2> 

            <p>

            </p>

          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Tabs;