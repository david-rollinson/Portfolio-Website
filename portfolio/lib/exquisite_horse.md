# Graphics Systems in Processing.

Tags: 2D, Artwork, Blender, Java, Processing, Skanect Pro

Graphics work for 2023 online zine currently in development.

![Demo gif rendered in Processing, assembled in Photoshop CC. ](Graphics%20Systems%20in%20Processing%20d51ad204e94c457f88e61e459099b736/Horse.gif)

Demo gif rendered in Processing, assembled in Photoshop CC. 

Technologies: Skanect, Blender, Processing and FFmpeg. 

These results were rendered entirely in Processing 4, without aid from fragment shaders. This methodology posed its own challenges due to long computation times for each video frame. (If you are looking for my work in GLSL shader development, see [here](https://www.notion.so/GLSL-Shaders-f875cc7d1ac84451af64b7885f120ef0?pvs=21).)

Alongside this project, I developed a tool for quickly testing different dithering algorithms on images. It can be found via the link at the bottom of this page. 

***Scroll down for a closer look* ↓**

[(Before) - no raster, dither or colour filter applied. 3D scanned horse toy using XBox Kinect, simple UV texture colouring in Blender. ](Graphics%20Systems%20in%20Processing%20d51ad204e94c457f88e61e459099b736/horse_colour.mp4)

(Before) - no raster, dither or colour filter applied. 3D scanned horse toy using XBox Kinect, simple UV texture colouring in Blender. 

[Rasterised. Monochrome on black.](Graphics%20Systems%20in%20Processing%20d51ad204e94c457f88e61e459099b736/horse.mp4)

Rasterised. Monochrome on black.

[Rasterised, with ordered dithering in x-axis only. ](Graphics%20Systems%20in%20Processing%20d51ad204e94c457f88e61e459099b736/glitch.mp4)

Rasterised, with ordered dithering in x-axis only. 

Final result:

[(After) Rasterised, with ordered dithering bayer matrix and mono filter, all in Processing 4.](Graphics%20Systems%20in%20Processing%20d51ad204e94c457f88e61e459099b736/yb8x8.mp4)

(After) Rasterised, with ordered dithering bayer matrix and mono filter, all in Processing 4.

The repository for the **graphics project** can be found [here](https://github.com/david-rollinson/Processing-Repo/tree/main/pgraphics_raster):

[Processing-Repo/pgraphics_raster at main · david-rollinson/Processing-Repo](https://github.com/david-rollinson/Processing-Repo/tree/main/pgraphics_raster)

The repository for the **dithering tool** can be found [here](https://github.com/david-rollinson/Processing-Repo/tree/main/dithering_examples):

[Processing-Repo/dithering_examples at main · david-rollinson/Processing-Repo](https://github.com/david-rollinson/Processing-Repo/tree/main/dithering_examples)

[← Home](https://www.notion.so/David-Rollinson-Compiled-Info-077934589fbe40f79015748231abe307?pvs=21)