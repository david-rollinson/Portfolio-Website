# Lightning Neural Inpainting with Pix2Pix (TensorFlow).

Tags: 2D, Artwork, Javascript, ML, Python

![Demo gif rendered in Processing, assembled in Photoshop CC.](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/panning1.gif)

Demo gif rendered in Processing, assembled in Photoshop CC.

Neural photo manipulation for ‘Machine Learning for Creative Practice’ university class. 

Custom pix2pix model trained on images of lightning, scraped from Bing using ‘bulk-bing-image-scraper’. The ML model was used inside a javascript program which selected at random an image from a dataset of incomplete images, and then used the ML model to ‘inpaint’ pixels into the whitespace of each image. 

Technologies: Pix2Pix Tensorflow, Python, Shell Scripting, Paperspace Cloud Computing, p5.js, ml5.js. 

***Scroll down for a closer look* ↓**

![After inpainting.](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(83).jpg)

After inpainting.

![‘Incomplete’ image. Before inpainting.](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(82).jpg)

‘Incomplete’ image. Before inpainting.

Resulting series of inpainted images:

![myCanvas (2).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(2).jpg)

![myCanvas.jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas.jpg)

![myCanvas (34).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(34).jpg)

![myCanvas (38).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(38).jpg)

![myCanvas (13).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(13).jpg)

![myCanvas (36).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(36).jpg)

![myCanvas (25).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(25).jpg)

![myCanvas (19).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(19).jpg)

![myCanvas (23).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(23).jpg)

![myCanvas (21).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(21).jpg)

![myCanvas (32).jpg](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/myCanvas_(32).jpg)

Original image dataset can be found [here](https://gitlab.doc.gold.ac.uk/droll002/pix2pix-dataset) on my GitLab repository. 

![Demo gif, assembled in Photoshop CC.](Lightning%20Neural%20Inpainting%20with%20Pix2Pix%20(TensorFl%20e369a44194184905bd1cd7a14bff4106/Lightning.gif)

Demo gif, assembled in Photoshop CC.

I wrote a javascript sketch which cycles through the dataset of lightning images and sporadically applies a white box for the neural network to inpaint. By clicking, the user can stop the sketch and press ENTER to apply the neural inpainting effect. 

[← Home](https://www.notion.so/David-Rollinson-Compiled-Info-077934589fbe40f79015748231abe307?pvs=21)