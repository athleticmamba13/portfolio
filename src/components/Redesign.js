import React from "react";
import "./Redesign.css";

const Redesign = () => {
  return (
    <>
        <div id="margin"></div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
            <div id='assignment-title' className=" text-center" >
            <h1 className="py-3" id="title">Responsive Redesign: Giving Banzai Bowls a Revamp</h1>
        </div>
        <div id='part-1' className=' px-5 py-3'>
            <h2 className='py-1'>
                Identifying Usability Problems
            </h2>

            <div id="curr-homepage">
                <a href="https://banzaibowls.com" target="_blank">
                <h4 className="py-1">Existing Site.</h4>
            </a>

            <p>I chose to redesign this website because Banzai Bowls is one of my favorite Acai bowl shops, but it has a pretty terribly designed website. I wanted to see if I could help them improve. 
            Click the link above to see their existing site!
            </p>
                <div className="flex-container">
                    <img src="images/redesign-handin-images/banzai_home.png" id="laundry-sketch" className="flex-item pb-3 center" alt=""></img>
                    <img src="images/redesign-handin-images/banzai_home_2.png" id="laundry-sketch" className="flex-item pb-3 center" alt=""></img>
                </div>
                <p>*Note that Banzai Bowls’ home page is currently a slideshow of three different images, with the above screenshot depicting one of the three. </p>
            </div>

            <div id="finding-problems">
            <h4>Problems with the Interface.</h4>
            <div id="usability">
                <p>Usability:</p>
                <ul>
                <li>The site is not really intuitive, and based on just the UI, it is unclear what Banzai’s primary goal is with this site. </li>
                <li>The layout is poor – there is no “Order Now” button anywhere in the center of the landing page, and the navigation bar is cut off about 2/3 of the way from left to right on the screen.</li>
                <li>When the screen size is condensed, the images do not adjust. Additionally, all three of the slideshow images are different sizes.</li>
                <li>There is an instagram module towards the bottom left of the page that does not show. It is completely white against a white background. When I first opened this site, I was under the impression that it had not loaded yet, but this issue is consistent across devices.</li>
                </ul>
            </div>
            <div id="efficiency">
                <p>Efficiency:</p>
                <ul>
                <li>Assuming that providing online ordering functionality is their main goal, then users may be slowed down by the slideshow of images and fail to realize that the first image that says "Order Online" is clickable.</li>
                <li>Mobile users may attempt to click the "Order Online" image, but it does not function on the mobile app, which will significantly slow their ordering time down.</li>
                </ul>
            </div>
            <div id="learnability">
                <p>Learnability:</p>
                <ul>
                <li>The site is fairly easy to understand, but not necessarily at first glance. Additionally, one of the three landing images – the one advertising catering – says “click to learn more”, but upon clicking an image is downloaded and the user is not redirected to a new page. This is frustrating and misleading for the user. </li>
                </ul>
            </div>
            <div id="usability">
                <p>Memorability:</p>
                <ul>
                <li>Since the site is not too complex, there are little memorability issues.</li>
                <li> The unintuitiveness of the “click here to learn more” bug, as well as the lack of a big “order now” button, does make it slightly harder for users to recall the functionality of the site.</li>
                </ul>
            </div>
                <div id="concept-model">
                <p>Conceptual Model:</p>
                <ul>
                    <li>The conceptual model has its flaws, especially with the critical “click here to learn more bug”. The user thinks that clicking will take them to another page, but the clicking does nothing (except for annoyingly downloading the image). This can cause the user to become confused and attempt to reclick. 
                    </li>
                    <li> The user’s conceptual model is also misleading when the site lands on the “Ditch the line, order online” image. There is no indication this image is clickable. Peculiarly, clicking on it does redirect the user to an online ordering page on web, but does not when accessing the site on mobile.</li>
                </ul>
                </div>
            </div>
            <div id="accessiblity">
                <h4>Accessibility.</h4>
                <p>WebAIM WAVE detects 16 errors, 18 contrast errors, 17 alerts, 21 features, 32 structural elements, and 38 aria tags. </p>
                <ul>
                <li>Lots of the errors indicate poor web design for this website – there is an empty heading, an empty button, 3 missing form labels and 7 empty links (though most of the empty links appear to be understandable/associated with text). </li>
                <li>There are 2 broken Aria references and 2 images missing alternative text. </li>
                <li>18 contrast errors indicate areas with low contrast, though I do partially disagree – some of these “errors” appear to have enough contrast to my eye.</li>
                </ul>
                <p>Overall, the website is largely inaccessible to people with visual impairments.</p>

            </div>
            </div>



            <div id='prototypes' className="my-3 px-5 py-4">
                <h2 className="pt-2 py-3">
                    Redesign Prototypes.
                </h2>
                <div className="low-fi-div">
                <div id='low-fi' className="my-3 py-4 px-5 justify-content-between">
                    <h3 className="py-4">Low-Fi Prototypes.</h3>
                    <div className="d-flex flex-wrap justify-content-around"> 
                    <div className="v-stack">
                        <h4>Large Computer</h4>
                        <img className="" id="low-fi-computer" src="images/redesign-handin-images/low-fi-computer.png" alt=""></img>
                    </div>
                    <div className="v-stack">
                        <h4>Tablet</h4>
                        <img className="" id="low-fi-tablet" src="images/redesign-handin-images/low-fi-tablet.png" alt="" ></img>
                    </div>
                    <div className="v-stack">
                        <h4>Smartphone</h4>
                        <img className="" id="low-fi-phone" src="images/redesign-handin-images/low-fi-phone.png" alt=""></img>
                    </div>
            
                    </div> 
                </div>
            
                </div>
                <div className="high-fi-div">
                <div id='high-fi' className="my-3 py-4 px-5 justify-content-between">
                    <h3 className="py-4">Hi-Fi Prototypes.</h3>
                    <div className="d-flex flex-wrap justify-content-around"> 
                    <div className="v-stack">
                        <h4>Design Palette</h4>
                        <img id="design-palette" src="images/redesign-handin-images/design-palette.png" alt=""></img>
                    </div>
                    <div className="v-stack">
                        <h4>Large Computer</h4>
                        <img id="high-fi-computer" src="images/redesign-handin-images/hi-fi-computer.png" alt="" ></img>
                    </div>
                    <div className="v-stack">
                        <h4>Tablet</h4>
                        <img id="high-fi-tablet" src="images/redesign-handin-images/hi-fi-tablet.png" alt=""></img>
                    </div>
                    <div className="v-stack">
                        <h4>Smartphone</h4>
                        <img id="high-fi-phone" src="images/redesign-handin-images/high-fi-phone.png" alt=""></img>
                    </div>
                    <div className="v-stack">
                        <h4>Example Smartphone View</h4>
                        <img id="high-fi-phone" src="images/redesign-handin-images/iphone-ex.png" alt=""></img>
                    </div>
            
                    </div> 
                </div>
            
                </div>
            </div>


            <div id='redesign-product' className="my-3 py-4 px-5 justify-content-between">
                <a href="https://athleticmamba13.github.io/responsive-banzai-site/" target="_blank">
                    <h2 className="py-4">Redesigned Site.</h2>
                </a>
                <h5 className="pb-4">This is a preview image of the landing view of my redesigned Banzai Bowls site. Click the link above
                    to take a look in full. Hope you enjoy!
                </h5>
                <div className="row justify-content-around"> 
                    <img src="images/redesign-handin-images/redesign-site.png" className='center' id='redesign-img' alt=""></img>
                </div>
            
            </div>    
    </>
  );
};

export default Redesign;
