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

const mainImageContainer = document.getElementById("main-image-container");
console.log(mainImageContainer);

function createMainImage(mainImageContainer) {
  const img = document.createElement("img");
  img.src = "Images/europeana-88w2yI5A78Y-unsplash.jpg";
  img.alt =
    "Impressionist style portrait of a young man wearing a yellow and blue shirt";
  console.log(img);
  mainImageContainer.appendChild(img);
  return img;
}

const mainImage = createMainImage(mainImageContainer);

const thumbnailContainer = document.getElementById("thumbnail-container");
console.log(thumbnailContainer);

function changeImage(event) {
  console.log(event);
  mainImage.src = event.target.src;
  event.target;
}

function createThumbnails(thumbnailContainer) {
  for (let i = 0; i < 6; i++) {
    console.log(imageList[i]);

    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = imageList[i].src;
    thumbnailImage.addEventListener("click", changeImage);
    thumbnailContainer.appendChild(thumbnailImage);
  }
}

createThumbnails(thumbnailContainer);
