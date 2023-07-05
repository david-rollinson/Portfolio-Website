Artist Assistance for Studio Kimchi and Chips with Rosa Menkman at Thin Air, The Beams. Exhibition displayed March - June 2023. Responsibilities: graphics generation, development and rendering, calibration assistance, runner.

<div class="mkd_img"> 

|![Installation image, 2023 - Cyclops Retina, Light Barrier 2.4 © The Beams, Centre for New Culture. ](/images/1.webp)|
|:--:| 
|Installation image, 2023 - Cyclops Retina, Light Barrier 2.4 © The Beams, Centre for New Culture.|

</div>

I assisted Elliot Woods (of Kimchi and Chips) and Rosa Menkman with calibration of their curved mirror array installation, and the development of film for use in the final projection. <i>Scroll down for a closer look</i> ↓

<b>Demo Footage:</b>
<div class="video_container">
    <div class="video_flexbox">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/816548874?h=6d825b4d47" class="v_video" frameborder="0" allowfullscreen></iframe> 
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/816548733?h=7d4a7fa1a5" class="v_video" frameborder="0" allowfullscreen></iframe>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/816549516?h=1e880343c9" class="v_video" frameborder="0" allowfullscreen></iframe>
        <p> The resultant 3 videos above, projected by the Light Barrier system were created using Adobe After Effects and Premiere Pro. </p>
    </div> 
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/816545499?h=5dbbfdc168" class="h_video" frameborder="0" allowfullscreen></iframe> 
</div>

<b>Technical Explanation:</b>

This iteration of ‘[Light Barrier](https://www.kimchiandchips.com/works/lightbarrier/)’ by Kimchi and Chips was realised in collaboration with Rosa Menkman, an artist known for her work with [glitch](https://beyondresolution.info/PORTFOLIO). Given the background of each artist, the intention was to create a film piece - this differs from previous ‘Light Barrier’s, which had until now displayed simple geometries rather than following any set narrative. The film would have to be visually compatible with the Light Barrier system, which operates similarly to a [light field camera](https://en.wikipedia.org/wiki/Light_field_camera) and requires high contrast imagery with a reasonably low level of detail. 

The system uses approx. 380 concave mirrors that each project light at specific angles into the space. Light is collected where the beams converge, rendering an image. The computational system behind this is quite complex, and required extensive calibration. 

<i>Given the array of mirrors, the result required is that each mirror reflects light from the projectors (situated to the left and right of the room) such that the beams converge at specific points within the gallery space and thus an image is rendered.</i> As one can see from the documentation, each of the mirrors is set to a different angle and location in physical space - this angle and position is what I’ll refer to as the mirrors ‘attributes’. Given these attributes, in order to control where the reflected light converges, each individual mirror must have *its* *own* mini projection that is adjusted to its unique vector space. 

Testing for this vector space required a large translucent screen to be placed against first the left hand and then the right hand mirror wall. A variety of test patterns were projected onto each mirror in series, with a camera feed detecting their reflective relief on the translucent screen. The screen was then moved slightly, to detect each mirror’s reflective relief at a second point in space. From this, a custom piece of software could deduce the unique vector space of each mirror. The image output onto each mirror uses this vector space to apply a unique transform to each of the projections, allowing all light to converge at a common point.

*[no images were taken during calibration due to the photosensitive nature of the process - no additional light was allowed in the space during calibration periods, to ensure measurement accuracy.]*  
  
<br />

<div class="mkd_img"> 

|![Screen Calibration.](/images/articles/calibration_1.jpg)|
|:--:| 
|Screen placement during calibration phase.|

</div>

<b>Prototyping imagery:</b>

During this stage I used A1111 to rapidly generate example footage, which I combined with ControlNet to generate depth maps to create 3D scenes from 2D imagery. We needed to test how effectively different forms, tones, line weights and textures would display with the projection system, so I began with this video of a horse as a placeholder whilst we figured out a working methodology. This was generated with video and text inputs according to a stable diffusion model from [Civitai](https://civitai.com/).

<div class="video_container" style="width: 80%; margin-left: auto; margin-right: auto;">
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/816643639?h=ea765e4aea" class="h_video" frameborder="0" allowfullscreen></iframe> 
</div>

Note: additional documentation pending.