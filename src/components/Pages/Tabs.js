import {useState} from "react";
import "../styles/App.css"
import Slider from "../Pages/Slider";
import Slider2 from "../Pages/Slider2";


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
           <Slider/>
            
            
            

          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
              <Slider2/>
            
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
        <img src={require('../Img/facebookmosaic.jpg')} height={100} width={300}/>
        <img src={require('../Img/ff.png')} height={200} width={400}/>
        </section>
        <p>
        On the page they’ll also be music/commentary that you can play in the background while viewing all the images for possible immersion.  
        </p>

        <h2>Description of my prototype</h2>
        <p>
        My prototype is a few pictures of the low exposure aesthetic, I’ve demonstrated how the images are going to be viewed from the mosaic. The columns have been created. I just need to start adding the pictures strategically. 
        </p>

        <div>
            <h3>Rationale</h3>

            <p>
            My initial idea for my internet artwork stemmed around the fascination of this aesthetic trend. Firstly I think that the pictures are beautiful, my real goal was to showcase what this trend is, that seems to be taking over social media. My second thing after concluding on wanting to display the pictures was to think about how I want to display the pictures
        </p>
        <p>
        I wanted to do it creatively. Because my whole website implements this aesthetic, it came natural for me to want to  put effort in my gallery The content creators that follow this trend evidently put time into the photos, everything is placed strategically, the edit, just how much of low exposure is enough and how much is too low or too dark and etc. I’m fascinated by content creation and even more fascinated by what trends mean to us in 2022.
        </p>
        <p>
        Every time that there’s a new social media trends, a decent amount of people follow it or at-least absorb it. Someone else might see doing so as a waste of time but there’s something happening truly special with social media trends. An example is the Project 50 challenge which arguably has a positive effect from the low exposure trend 
        </p>
        <p>
        The Project 50 challenge is a wellness project that is taking place online, where people post their healthy meals, skincare and morning routine videos. What I ate today videos, yoga and workout videos. In the bigger scheme of things, this is a good thing. Through the aesthetic this trend is supposed to inspire you. Many argue that no one really lives like that or eats a clean breakfast everyday and it’s all fake. I believe it has a chain reaction and a positive reaction to some people even though the creator is only capturing for social media.
        </p>
        <p>
        Not everyone but Some people can get positive results and improve their lives and experience positive change as a result of the aesthetic. These trends that come in every other year may just be social media trends but for a few individuals they actually do work and that’s where social medias beauty lies. 
        </p>

        <p>
        The beauty of having access to the internet. Bryan Cantrill said “Facebook affectively is the internet, it is by far the dominant way of getting to the internet” (Cantril, 2019). My internet artwork is a mosaic Facebook logo gallery and I could not see it more fitting, the logo, to represent social media. 
        </p>
        <br></br>

        <div className="reflection">Internet Artwork Reflection </div>

        <p>
        My internet artwork is how I wanted it to be. I feel I was able to do what I wanted to do. I can also acknowledge that there are better ways, more technical ways I could have implemented my mosaic. Like using an algorithm or pattern of some sort. Probably arrays, but because of technical difficulties and my level of coding I went around things more strategic. </p>
        
        <p>
        I planned out the number of pictures on paper, continued to count and decided where the real pictures would be. My mosaic has real pictures of the aesthetic trend, 35 pictures in total. Then there are the remaining white pictures that assisted me to bring my vision to life. 
I will admit that my way of doing it was tedious and I often made a lot of mistakes and I’d have to count again and get it right. I wish I could have implemented my vision of the mosaic without the white images but I don’t know where I would have started. I also manipulated the curve of the F on my own, there is no code for that. 

        </p>

        <p>
        Things I would improve in the future include challenging myself more technically. I added an audio button for sound successfully like how I wanted to. That was an addition to my internet artwork so I do feel like it is more of a prototype than a finished product. I could have styled it more and made it look more like a part of the gallery. 
        </p>  
        <p>
        I also see a space for growth in terms of being able to pause the music because currently the music does not pause or stop playing until all 40 seconds of the sound is done. 

I only edited and merged my voicenote from a friend and the free instrumental of Harry Styles “As it was” for my sound. I chose the song because it is popular around this aesthetic, especially Instagram reels. 

        </p>

        <p>
        Free copyright Instrumental: <link>https://www.youtube.com/watch?v=EXqDNzM8n-A </link>
        </p>

        <p>
            Picture references
            <link>
            https://www.pinterest.co.uk/hopeshembe/_saved/
            </link>
        </p>






       
        </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Tabs;