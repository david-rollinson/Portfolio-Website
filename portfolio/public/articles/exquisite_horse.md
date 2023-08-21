<!--- Tags: 2D, Artwork, Blender, Java, Processing, Skanect Pro-->
Graphics work for 2023 online zine currently in development. Technologies: *Skanect, Blender, Processing and FFmpeg.*

<div class="mkd_img"> 

|![Exquisite Hor(p)se](/images/articles/horse_1.gif)|
|:--:| 
|Demo gif rendered in Processing, assembled in Photoshop CC.|

</div>

These results were rendered entirely in Processing 4, without aid from fragment shaders. This methodology posed its own challenges due to long computation times for each video frame. (If you are looking for my work in GLSL shader development, see [here](https://www.notion.so/GLSL-Shaders-f875cc7d1ac84451af64b7885f120ef0?pvs=21).)

Alongside this project, I developed a tool for quickly testing different dithering algorithms on images. It can be found via the link at the bottom of this page. 

<div class="video_container">
<iframe title="vimeo-player" src="https://player.vimeo.com/video/837714108?h=52b588793b" class="h_video" frameborder="0" allowfullscreen></iframe> 
Process, with rasterisation, ordered dithering bayer matrix and mono filter, all in Processing 4.
</div>

The repository for the **graphics project** can be found *[here](https://github.com/david-rollinson/Processing-Repo/tree/main/pgraphics_raster)*. The repository for the **dithering tool** can be found *[here](https://github.com/david-rollinson/Processing-Repo/tree/main/dithering_examples)*.