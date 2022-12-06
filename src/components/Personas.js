import React from "react";

const Personas = () => {
  return (
    <>
        {/* <nav class="navbar fixed-top navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#title">Personas & Storyboarding</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#interface-sketch">Interface Sketch</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#interviews">Interviews</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#personas">Personas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#storyboard">Storyboard</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav> */}
        <div id="margin"></div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        <div id='assignment-title' class=" text-center" >
            <h1 class="py-3" id="title">Young O's Washing Machine</h1>
        </div>
        <div id='interface-sketch' class=' px-5 py-3'>
            <h2 class='py-1'>
                Interface Sketch.
            </h2>
            <img src="images/personas-handin-images/laundry_sketch.jpg" id="laundry-sketch" class="pb-3 center"></img>
        </div>
        <div id='observations' class="my-3 px-5 py-4">
            <h2 class="pt-2 py-3">
                Observations.
            </h2>
            <ul>
                <li>
                One user I observed seemed to use the washing machine
                interface effortlessly. She placed the clothes inside and then took about 10 seconds to select the washer settings before starting the machine and leaving
                </li>
                <li>
                Another user I observed took much longer to configure the washer settings. Before selecting the settings, the user pulled out his phone and appeared to Google which soil, cycle, and to select for this particular load. After doing so, the user, with some hesitation, selected values for each of the three settings and started the machine.
                </li>
                <li>
                A third user I observed was somewhere in between each of the first two: he seemed to take several seconds to think about his settings selections, but decided fairly quickly and spent under 30 seconds total with the interface.</li>
                <li>
                Every user I observed seemed to intuitively interact with the non-screen components of the laundry machine, such as opening and closing the main door of the washer, perhaps due to a mix of good affordances and pre-existing user knowledge.
                </li>
            </ul> 
            <p>
            </p>
        </div>
        <div id='interviews' class="my-3 py-4 px-5">
            <h2 class="mt-2">
                Interviews.
            </h2>
            <div id="user-questions" class="py-3 px-3">
            <h4>
                Questions I Asked Users
            </h4>
            <ol>
                <li>
                Why are you using this interface?
                </li>
                <li>
                Describe your experience using this laundry washer interface in a few words.
                </li>
                <li>
                Have you ever had any difficulties configuring the washing machine? 
                </li>
                <li>
                Is there anything that frustrates you about the setting screen interface?
                </li>
                <li>
                Is there anything you can’t do with this laundry machine that you wish you could? 
                </li>
                <li>
                How long do you typically spend using the interface? 
                </li>
                <li>
                How does your experience using this washer interface compare to the ones you’ve used with other washing machines the past?
                </li>
                <li>
                Would you recommend this interface be adopted by other washers?
                </li>
            </ol>

            </div>
            <div id="interview-takeaways" class="py-3 px-3">
                <h4>
                User Interview Takeaways
                </h4>
            </div>
            <ul>
                <li>
                Users always used the laundry machine interface because they intended to wash some type of item: most were washing clothes, but one intended to wash their bedsheets and towels. 
                </li>
                <li>
                Users typically spent anywhere from 10 seconds a minute using the interface.
                </li>
                <li>
                Users noted the laundry machine, and specifally the screen interface, was relatively “simple” to use, but also lacked customization options. One user stated they wished they could select more settings, such as the time under wash, but noted that those may be a result of the “washer’s functional limits” more so than the interface itself. 
                </li>
                <li>
                A couple of users expressed frustration with the lack of explanation offered by the machine, confused about how to determine the appropriate “soil”, “cycle”, and “temperature” for their particular load. 
                </li>
                <li>
                Overall, users were mixed about recommending this interface for other laundry machines. Some noted that it was relatively easy to use, while others were confused by it.
                </li>
            </ul>
            </div>
            <div id='personas' class="my-3 py-4 px-5 justify-content-between">
            <h2 class="py-4">
                Personas.
            </h2>
            <div class="row justify-content-around"> 
                <img src="images/personas-handin-images/confused_carson.jpg" class="col-md-5 "></img>
                <img src="images/personas-handin-images/stressed_samantha.jpg" class="col-md-5 "></img>
            </div> 
            </div>
            <div id='storyboard' class="my-3 py-4 px-5 justify-content-between">
            <h2 class="py-4">
                Storyboard.
            </h2>
            <div class="row justify-content-around"> 
                <img src="images/personas-handin-images/carson_storyboard.jpg" class='center' id='storyboard-img'></img>
            </div> 
        </div>    
    </>
  );
};

export default Personas;


