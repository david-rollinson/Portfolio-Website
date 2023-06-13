# CONDUIT.

Tags: 3D, Artwork, C++, JUCE

![1-2.jpg](CONDUIT%2085b8cf8fbbbe4cc3b56d57620dbd96e8/1-2.jpg)

Dynamic sculpture work for ‘Third___’ online digital arts show, exhibited May 2021. 

Solo lockdown project, titled ‘CONDUIT’. 

Materials: Black plastic truncated cylinder vessel, aquarium tubing, hydroxyethyl cellulose in Black, three 12V vacuum pumps. 

Technologies: Arduino using custom electronics. JUCE delay plugin for Ableton Live (not shown). 

Jump to: [Interaction Guide](https://www.notion.so/CONDUIT-85b8cf8fbbbe4cc3b56d57620dbd96e8?pvs=21), [Concept](https://www.notion.so/CONDUIT-85b8cf8fbbbe4cc3b56d57620dbd96e8?pvs=21) or [In-Depth Images](https://www.notion.so/CONDUIT-85b8cf8fbbbe4cc3b56d57620dbd96e8?pvs=21).

***Or scroll down for a closer look* ↓**

Note: this was originally conceived as an audience-interactive project, but had to be reconfigured due to lockdown restrictions. 

![3-2.jpg](CONDUIT%2085b8cf8fbbbe4cc3b56d57620dbd96e8/3-2.jpg)

**Interactive premise:**

A black plastic vessel holds an oily substance. Aquarium tubes are arranged running from three vacuum pumps into the base of the vessel. The three pumps read the weight of the material in each of the three glasses and modulate their air output accordingly. 

These pumps are controlled by an Arduino control board to the right of the vessel. The pumps funnel air into the base of the vessel, creating air pockets beneath the surface of the liquid that rise to the top as bubbles. The greater the force, the more bubbles that surface. **↓**

**Concept:**

This project was a fledgling investigation into using multiple material states in a dynamic sculpture work. I was comparing patterns of contemporary consumer behaviour with the practice of hoarding and wanted to investigate whether alternative interactions could effect the way we value materials and material processes. My aim was to slow down the audiences’ interface with the artwork materials, revealing them as products of their own systems. 

The electronics and programming aspects of this work were the most challenging, as they were entirely self-directed with no prior physical computing experience and little to no technician support. The project contained various areas of planning which were new to me, including electronics component and material sourcing. **↓**

**A closer look:**

![2-2.jpg](CONDUIT%2085b8cf8fbbbe4cc3b56d57620dbd96e8/2-2.jpg)

![5-2.jpg](CONDUIT%2085b8cf8fbbbe4cc3b56d57620dbd96e8/5-2.jpg)

Three glasses containing differing quantities of water and sand are placed on top of three force-sensitive resistors, which read the force placed upon them by each material. The weight values are sent as parameters to the Arduino board via a serial USB connection. 

![1-2.jpg](CONDUIT%2085b8cf8fbbbe4cc3b56d57620dbd96e8/1-2.jpg)

Closeup of vacuum pumping system and the custom electronics. The Arduino board receives the weight values of the three glasses and modulates the power to each corresponding vacuum pump motor (this process is made easier by using two motor driver shields, seen as the thick black strip in the center of the breadboard).

An air intake valve is located at the top of each white cylindrical pump motor. From here the motor pushes this air through the release valve on the end of each motor, funnelling air through the aquarium tubing and into the base of the vessel. 

![6-2.jpg](CONDUIT%2085b8cf8fbbbe4cc3b56d57620dbd96e8/6-2.jpg)

The less force, the lower the air output. The liquid shivers and bubbles as air rises to the surface.  

[← Home](https://www.notion.so/David-Rollinson-Compiled-Info-077934589fbe40f79015748231abe307?pvs=21)