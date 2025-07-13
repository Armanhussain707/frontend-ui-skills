function Gallery() {
  this.rows = 5;
  this.cols = 5;
  this.totalCells = function () {
    return this.rows * this.cols;
  };
}
//extended our object
Gallery.prototype.initialImage = 0;
Gallery.prototype.nextImage = function () {
  return ++this.initialImage;
};
function ImageGallery() {
  this.rows = 10;
}
//inheritance – inheriting attributes from Gallery object to ImageGallery object
ImageGallery.prototype = new Gallery();
var myImgGal = new ImageGallery();
//alert(myImgGal.cols);
function VideoGallery() {
  this.cols = 10;
}
//inheritance – inheriting attributes from Gallery object to VideoGallery object
VideoGallery.prototype = new Gallery();
var myVidGal = new VideoGallery();
//alert(myVidGal.rows);


