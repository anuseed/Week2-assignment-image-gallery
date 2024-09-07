let imageList = [
  {
    src: "Images/europeana-88w2yI5A78Y-unsplash.jpg",
    alt: "Impressionist stlye portrait of a young man wearing a yellow and blue shirt",
  },
  {
    src: "Images/europeana-uS5LXujNOq4-unsplash.jpg",
    alt: "Painting of man made with fruit and vegetables",
  },
  {
    src: "Images/nicola-powys-6DmxrSMtUpM-unsplash.jpg",
    alt: "Photograph painted over with thick brushstrokes to create abstract face",
  },
  {
    src: "Images/vadim-bogulov-Of1VFDCVlTc-unsplash.jpg",
    alt: "Pixelated portrait of a woman with blue hair",
  },
  {
    src: "Images/the-cleveland-museum-of-art-RbeVy3X5xRM-unsplash.jpg",
    alt: "Portriat painting of a woman with plaited hair and wreath on a blue background",
  },
  {
    src: "Images/swapnil-dwivedi-N2IJ31xZ_ks-unsplash.jpg",
    alt: "High contrast photograph of a man smoking a ciggarete with a white turban on his head.",
  },
];

//step 1 declare mainImageContainer by getting it from the document with getElementById
const mainImageContainer = document.getElementById("main-image-container");
console.log(mainImageContainer);

//step 2 createMainImage in container with values to put it in the HTML from JS
//append image to the container
//make the img available by using "return"
function createMainImage(mainImageContainer) {
  const img = document.createElement("img");
  img.src = "Images/europeana-88w2yI5A78Y-unsplash.jpg";
  img.alt =
    "Impressionist style portrait of a young man wearing a yellow and blue shirt";
  console.log(img);
  mainImageContainer.appendChild(img);
  return img;
}

//step 3 call mainImage that was created with function createMainImage
const mainImage = createMainImage(mainImageContainer);

//step 1 declare thumbnailContaner by getting it from the document using getElementByID
const thumbnailContainer = document.getElementById("thumbnail-container");
console.log(thumbnailContainer);

//Step 2 create an event handler for the thumbnail - I need more help to understand how this works. Not entirely sure what the event.target is
function changeImage(event) {
  console.log(event);
  mainImage.src = event.target.src;
  event.target;
}

//step 3 create a for loop to choose a single image from the thumnail images to show when a user clicks on the image in the thumbnail
//create an event listener to the function
//NB! APPEND APPEND

function createThumbnails(thumbnailContainer) {
  for (let i = 0; i < 6; i++) {
    console.log(imageList[i]);

    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = imageList[i].src;
    thumbnailImage.addEventListener("click", changeImage);
    thumbnailContainer.appendChild(thumbnailImage);
  }
}

//call the function
createThumbnails(thumbnailContainer);
