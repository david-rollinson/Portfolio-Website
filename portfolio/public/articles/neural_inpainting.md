<!-- Tags: 2D, Artwork, Javascript, ML, Python -->

<div class="mkd_img"> 

|![Screen Calibration.](/images/articles/neural_inpaint/neural_1.gif)|
|:--:| 
|Demo gif rendered in Processing, assembled in Photoshop CC.|

</div>

Neural photo manipulation for a university class. Custom pix2pix model trained on images of lightning, scraped from Bing using ‘bulk-bing-image-scraper’. The ML model was used inside a javascript program which selected at random an image from a dataset of incomplete images, and then used the ML model to ‘inpaint’ pixels into the whitespace of each image. 

Technologies: Pix2Pix Tensorflow, Python, Shell Scripting, Paperspace Cloud Computing, p5.js, ml5.js. 

<div class="mkd_img"> 

|![pix2pix](/images/articles/neural_inpaint/neural_2.jpg)|![pix2pix](/images/articles/neural_inpaint/neural_3.jpg)|
|:--:|:--:| 
|After inpainting.|‘Incomplete’ image. Before inpainting.|

</div>

<div class="center_text">
    Image dataset can be found <a href="https://gitlab.doc.gold.ac.uk/droll002/pix2pix-dataset" target="_blank" rel="noreferrer noopener">here</a> on my GitLab repository.
    <br>Pictured below: Resulting series of inpainted images. 
</div>

<div class="mkd_img" style="box-sizing: border-box;">
    <div class="row">
        <div class="column">
        <img src="/images/articles/neural_inpaint/neural_4.jpg" style="width:100%" alt="Neural Inpaint Image.">
        <img src="/images/articles/neural_inpaint/neural_5.jpg" style="width:100%" alt="Neural Inpaint Image.">
        <img src="/images/articles/neural_inpaint/neural_6.jpg" style="width:100%" alt="Neural Inpaint Image.">
        <img src="/images/articles/neural_inpaint/neural_7.jpg" style="width:100%" alt="Neural Inpaint Image.">
        <img src="/images/articles/neural_inpaint/neural_8.jpg" style="width:100%" alt="Neural Inpaint Image.">
        </div>
        <div class="column">
        <img src="/images/articles/neural_inpaint/neural_9.jpg" style="width:100%" alt="Neural Inpaint Image.">
        <img src="/images/articles/neural_inpaint/neural_10.jpg" style="width:100%" alt="Neural Inpaint Image.">
        <img src="/images/articles/neural_inpaint/neural_11.jpg" style="width:100%" alt="Neural Inpaint Image.">
        <img src="/images/articles/neural_inpaint/neural_12.jpg" style="width:100%" alt="Neural Inpaint Image.">
        <img src="/images/articles/neural_inpaint/neural_13.jpg" style="width:100%" alt="Neural Inpaint Image.">
        </div>
    </div>
    <img src="/images/articles/neural_inpaint/neural_14.jpg" style="width:35%; margin-top: 8px" alt="Neural Inpaint Image.">
</div>

## Interactive Sketch.

<div class="mkd_img"> 

|![Screen Calibration.](/images/articles/neural_inpaint/neural_15.gif)|
|:--:| 
|Demo gif, assembled in Photoshop CC.|

</div>

I wrote a javascript sketch which cycles through the dataset of lightning images and sporadically applies a white box for the neural network to inpaint. By clicking, the user can stop the sketch and press ENTER to apply the neural inpainting effect. The sketch can be cloned and run from <a href="https://github.com/david-rollinson/ML-Creative-Applications-Demos/tree/main/Lightning%20Sketch%20Using%20Custom%20pix2pix" target="_blank" rel="noreferrer noopener">here</a>.

<style scoped>

.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    flex-basis: 100%;
}

.column {
    display: flex;
    flex: 40%;
    max-width: 35%;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}

.column img {
    margin-top: 8px;
    margin-bottom: 8px;
    vertical-align: middle;
}

.center_text {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}

</style>