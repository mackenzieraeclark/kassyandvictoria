import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function FAQs({ id }) {
  return (
    <div className="container">
      <div id={id}>
        <div className="row">
          <div className="column">
            <h3>Frequently Asked Questions</h3>
            <br/>
            <h2>Where are the wedding and reception taking place?</h2> 
            <ul>
              <li>Both the wedding and reception will take place at our home, The Pachs Farm, located at
6303 Miccosukee Road, Tallahassee, FL 32309</li>
            </ul>
            <br/>
            <h2>Where do I park?</h2> 
            <ul>
              <li>All wedding guests will need to park at the Miccosukee Greenway Thornton Road
Trailhead. A shuttle service will be provided to shuttle guests to and from the venue.
Please refer to the <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>Parking tab</strong>
              </Link> on our wedding website.</li>
            </ul>
            <br/>
            <h2>Can I be dropped off/picked up at the Pachs Farm?</h2> 
            <ul>
              <li>Yes, however please be mindful of other guests and do not block the driveway.</li>
            </ul>
            <br/>
            <h2>What should I wear?</h2> 
            <ul>
              <li>This will be an outdoor wedding and attire is semi-formal (no shorts, jeans, flip flops, t-
shirts, etc.). Our wedding and reception will be taking place on a grassy field, so please
keep this in mind when choosing your footwear!</li>
            </ul>
            <br/>
            <h2>How early can I arrive?</h2> 
            <ul>
              <li>The ceremony will begin at 4:30 pm. Guests may begin to arrive at 4 pm.</li>
            </ul>
            <br/>
            <h2>Are kids welcome?</h2> 
            <ul>
              <li>As much as we would love to have all the kiddos there to celebrate with us, this is an
adult only wedding. We love your little ones but want you to enjoy your time too, plus a
2-acre farm gets a bit unruly once the sun goes down.</li>
            </ul>
            <br/>
            <h2>Do we have a gift registry?</h2> 
            <ul>
              <li>We’ve been together a year or two, we don’t really need anything new. Yet if a gift is
your intention, we thought that we would mention, we’d love some pennies to put
together, to save for something that we will treasure. And just remember, what means
the most, is that you’re with us to raise a toast! Head over to our  
              <Link
                activeClass="active"
                to="section7"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong> Wishing Well</strong>
              </Link> tab.</li>
            </ul>
            <br/>
            <h2>How do I RSVP?</h2> 
            <ul>
              <li>Please RSVP no later than October 1, 2021. Please use the <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>RSVP tab</strong>
              </Link> on our website or
use this link: <a href="https://kassyandvictoria.rsvpify.com">https://kassyandvictoria.rsvpify.com</a></li>
            </ul>
            <br/>
            <h2>Can I take and post pictures of the wedding on social media?</h2> 
            <ul>
              <li>Yes, we encourage guests to post pictures on to their social media channels, our only
request is that you tag each photo with our wedding hashtag <strong>#PerezGotSachsed</strong> so we
can keep track of all of your pictures.</li>
            </ul>
            <br/>
            <h2>Is this an “unplugged” ceremony?</h2> 
            <ul>
              <li>An unplugged wedding ceremony is a ceremony in which the couple requests that
guests put away and TURN OFF all cell phones, cameras, and any other devices in order
for them to be present in the moment. We have the most amazing photographers (no
seriously, they are one of the best) who will capture every moment for us. We promise
to share all photos from our big day with you!</li>
            </ul>
            <br/>
            <h2>Can I bring a plus one?</h2> 
            <ul>
              <li>Unfortunately, we are unable to accommodate additional guests. We look forward to
celebrating with you on the day!</li>
            </ul>
            <br/>
            <h2>Do you have a hotel block for guests? Where do you recommend I stay?</h2> 
            <ul>
              <li>Unfortunately, we do not. Florida State Football will be playing The University of Miami
on Saturday November 13 th (the day after our wedding) in Tallahassee. This is a big game
in the college football world meaning housing can be scarce and a bit expensive. We
would recommend looking for an Airbnb first and then a hotel.</li>
            </ul>
            <br/>
            <h2>Who can I contact with any additional questions?</h2> 
            <ul>
              <li>Please call/text Andrea Tinoco at (954) 415-7318.</li>
            </ul>
            <br/>
            <h2>Do you have any recommendations for local restaurants?</h2> 
            <ul>
              <li>Of course, here are some of our favorite local spots!
                <br/>
                <li>
                * Dinner/Lunch: Natural Kitchen $, Wok N Roll $, Momo’s Pizza $, Backwoods
Crossing $$, <br/>Taco Republik $$, Island Wing Company $$, Table 23 $$$, Kool
Beanz $$$,
                </li>
                <br/>
                <li>
                * Breakfast: Maple Street Biscuit $, SoDough $, Canopy Road Café $$, Jerri’s $$
                </li>
                <br/>
                <li>
                * Coffee: Lucky Goat and Red Eye
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}