console.log("Hello");

//store images and manipulate in js
//we are going to create a place to store our images
//each image will be an individual object

let images = [
  {
    src: "https://images.unsplash.com/photo-1530209925954-8aecf4eb1e43?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "daisies in a meadow blurry with light refracting over image",
    width: 300,
    height: 200,
  },
];

//!help for arrow keys stretch goal
//you need a global variable to keep track of the index value
//let currentIndex = 0

//step 1: select the DOM element that will contain my images
//select the thumbnail container
//select the main image container

//step 2: we are going to write a function to create images in our thumbnail

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
