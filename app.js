console.log("Hello");
console.log(document);

//store images and manipulate in js
//we are going to create a place to store our images
//each image will be an individual object

//IMAGE WONT ADD - WHY - RELATIVE PATH
let images = [
  {
    src: "Images/europeana-88w2yI5A78Y-unsplash.jpg",
    alt: "Impressionist stlye portrait of a young man wearing a yellow and blue shirt",
    width: 200,
    height: 300,
  },
];

//!help for arrow keys stretch goal
//you need a global variable to keep track of the index value
//let currentIndex = 0

//step 1: select the DOM element that will contain my images
//select the thumbnail container
//select the main image container

//step 2: we are going to write a function to create images in our thumbnail
const mainImageContainer = document.getElementById("main-image-container");
console.log(mainImageContainer);

function createMainImage(mainImageContainer) {
  const img = document.createElement("img");
  img.src = "Images/europeana-88w2yI5A78Y-unsplash.jpg";
  img.alt =
    "Impressionist stley portrait of a young man wearing a yellow and blue shirt";
  img.className = "image1";
  img.style.width = "100%";
  img.style.height = "100%";
  console.log(img);
  mainImageContainer.appendChild(img);
}

createMainImage(mainImageContainer);

function createThumbnails(thumbnailContainer) {
  //we need a loop to run through the array of images and create an instance of each of them - forEach
  thumbnailContainer.forEach(function (thumbnail, index) {
    //create a document method to contain my image information (<img>)
    //assign a value to the img attirbutes (src, alt, width, height) --> img.src ="value"
    //optional: you can also give each image a classname
    //append the new images to the DOM container
    //add an evnet listener to each image so when the user clicks, the big image shows on the screen
    //images will need to be styled to small and big
    //function eventHandler () {}
    createLargeImage(thumbnail[index]);
    //when the user clicks the image we are going to call the fucntion that calls the big image
    //thumbnail.addEventListener("click", eventHandler )
  });
}

//step 3: we need to write a function to create the big image
function createLargeImage(largeImage) {
  //!you will find a problem here: it will keep adding one after the other
  //innerHTML = "" (set to be empty)
  //create img element
  //(optional) you could give ths image a classname
  //set the src value
  //set the alt value
  //append large image to DOM
  //no loop as we only want the large image to show when clicked on
}

//
