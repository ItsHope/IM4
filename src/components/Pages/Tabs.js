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
            <h2>Assignment 1 Reflection. </h2>
            <hr />
            <p>
            Through this assignment, I was first introduced to React and JSX. It was challenging for me to do the technical aspect of the assignment and I realized that I had not spent enough time preparing for the assignment. A react website is very different from a normal website and the rules are different. I do realize that I did not use the privilege of consulting with my tutors when there was still time. 
            </p>

            <p> 
            Although I created my website and coded for it, styled it and etc. I was not acknowledging “react rules” and therefore was unable to get some functionalities. For example, inserting a picture or creating a background image in a normal html website is done in the css file while inserting one in a react website would be done in a jsx file with back ticks that were also new to me too. 
            </p>
             <p>
             I quickly had to learn these new things, hooks, using the terminal and etc. I had always pushed my code to GitHub from the GitHub application (GitHub Desktop) from my pc and never needed to use the terminal before now. This was a lot of new information for me all at one with little time. I attempted to learn but I ended up creating more errors while simply trying to deploy my website to GitHub pages. As a result I neglected the theory part of the assignment because my website wasn’t appearing although I was coding for it. As a result I never managed to submit. 
             </p>  
             <p>
             In conclusion assignment one was my first attempt with react, I planned to do better with assignment 2. 
             </p>

             <h2>Assignement 2 Reflection</h2>

             <p>
             Through assignment 2, I was able to deploy a website for the first time with the help of my tutors and therefore able to have a bit of understanding in regards to react. I went through all the videos provided and things were starting to make sense. I built the prototype of my website. I still had a lot of hiccups along the way and I had to do extensive research. However assignment 2 proved to be overwhelming because of the workload. I essentially had to do assignment 1 and 2 in one go. 
             </p>

             <p>
             I realized that I was working hard and not smart, I wanted to check off everything off of the brief and realized I could not.  Because I was actually coding for the assignment I faced some technical issues. I wanted an animation on my homepage/landing page. The animation I have right now is not the idea I had, I plan to rectify this on my next assignment. 
             </p> 
             <p> 
             And for my internet artwork, I have exactly what I want in terms of being able to display the images closely but because I am working with images that are not mine. I need to reference and mention the owners. My plan is to add the reference to the website of which the image is from when you view it. I am still trying to work around that. My prototype is also a small percentage of what the ideal internet artwork will look like but I am confident in achieving what I want to do after planning it what on paper. 
             </p>

             <p> 
             I also spent an awful amount creating tabs for the website’s blogs. I’ve always thoughts tabs work well when arranging a lot of content neatly. This was my first time using “States”. In conclusion assignment 2 taught me a lot and I got the opportunity to catch up with my classmates even though the assignment is incomplete.  
             </p>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Proposal of my Internet Artwork</h2>
            <hr />
            <p>
            The idea around my internet artwork was to showcase the low exposure aesthetic trend. The low exposure aesthetic is a trend that has taken over social media. Across all social media platforms content creators have switched to an edit where they decrease the exposure in their content. This type of editing has been seen more and more often in the year of 2022. 
            </p>
            <section>
                <img src={require('../Img/lowexposureaesthetic.jpg')} height={400} width={800}/>
            </section>
            <p>
            I decided to present the trend using pictures but I did not want to just paste the pictures on a website page, I wanted to present the trend in a creative way. Still better than just lining up pictures, a collage or a slideshow would have done the trick. But I wasn’t sure if that would be enough for the assignment. 
            </p> 

            <p>
            I have decided to create a mosaic picture that makes up the Facebook logo. I will strategically place the low exposure pictures so that they make up the letter F. The low exposure aesthetic is a trend, a social media trend. I wanted an icon that would represent social media and because Facebook owns most of the social media platforms I decided to go with the Facebook logo. 
            </p>

        <section>
        <img src={require('../Img/facebookmosaic.jpg')} height={200} width={600}/>
        <img src={require('../Img/ff.png')} height={400} width={600}/>
        </section>
        <p>
        On the page they’ll also be music/commentary that you can play in the background while viewing all the images for possible immersion.  
        </p>

        <h2>Description of my prototype</h2>
        <p>
        My prototype is a few pictures of the low exposure aesthetic, I’ve demonstrated how the images are going to be viewed from the mosaic. The columns have been created. I just need to start adding the pictures strategically. 
        </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Tabs;