Dynamic sculpture work for ‘Third___’ online digital arts show, exhibited May 2021. Solo lockdown project, titled ‘CONDUIT’.  

Materials: *Black plastic truncated cylinder vessel, aquarium tubing, hydroxyethyl cellulose in Black, three 12V vacuum pumps.*
Technologies: *Arduino using custom electronics. JUCE delay plugin for Ableton Live (not shown).*

***Scroll down for a closer look* ↓**

<div class="mkd_img"> 

|![CONDUIT](/images/articles/conduit_3.jpg)|
|:--:| 
||

</div>
<br>Note: this was originally conceived as an audience-interactive project, but had to be reconfigured due to lockdown restrictions. 

**Interactive premise:**

A black plastic vessel holds an oily substance. Aquarium tubes are arranged running from three vacuum pumps into the base of the vessel. The three pumps read the weight of the material in each of the three glasses and modulate their air output accordingly.  
These pumps are controlled by an Arduino control board to the right of the vessel. The pumps funnel air into the base of the vessel, creating air pockets beneath the surface of the liquid that rise to the top as bubbles. The greater the force, the more bubbles that surface.

**Concept:**

This project was a fledgling investigation into using multiple material states in a dynamic sculpture work. I was comparing patterns of contemporary consumer behaviour with the practice of hoarding and wanted to investigate whether alternative interactions could effect the way we value materials and material processes. My aim was to slow down the audiences’ interface with the artwork materials, revealing them as products of their own systems.  
The electronics and programming aspects of this work were the most challenging, as they were entirely self-directed with no prior physical computing experience and little to no technician support. The project contained various areas of planning which were new to me, including electronics component and material sourcing. **↓**

**A closer look:**

<div class="mkd_img"> 

|![CONDUIT](/images/articles/conduit_2.jpg)|![CONDUIT](/images/articles/conduit_4.jpg)|
|:--:|:--:| 
|||

</div>

Three glasses containing differing quantities of water and sand are placed on top of three force-sensitive resistors, which read the force placed upon them by each material. The weight values are sent as parameters to the Arduino board via a serial USB connection. 

<div class="mkd_img"> 

|![CONDUIT](/images/articles/conduit_1.jpg)|
|:--:| 
||

</div>

Closeup of vacuum pumping system and the custom electronics. The Arduino board receives the weight values of the three glasses and modulates the power to each corresponding vacuum pump motor (this process is made easier by using two motor driver shields, seen as the thick black strip in the center of the breadboard).

An air intake valve is located at the top of each white cylindrical pump motor. From here the motor pushes this air through the release valve on the end of each motor, funnelling air through the aquarium tubing and into the base of the vessel.  
The less force, the lower the air output. The liquid shivers and bubbles as air rises to the surface.  

<div class="mkd_img"> 

|![CONDUIT](/images/articles/conduit_5.jpg)|
|:--:| 
||

</div>