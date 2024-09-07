# Week2-assignment-image-gallery

Creating an image gallery using JS, with minimal styling with CSS.

# Reflection

## 1. What requirements did you achieve?

- I was able to make two different media queries for small and large screens.
- I gave all the images an appropriate alt tag.
- I was able to use an event handler so you can click on an image on the thumbnail to show as the main image.

## 2. Were there any requirements or goals that you were unable to achieve?

- I did not add buttons to allow you to scroll through the images.

## 3. If so, what was it that you found difficult about these tasks?

- I initially found it extremely difficult to start this assignment due to the JS. Even with the notes given in the class I realized I had too many gaps in my understanding of JS to understand what was going on.

- I started by testing out the basics of adding a single image.

- This helped complete the first part but once it got to the thumbnail images and adding an event handler and listner I was very lost. I had a lot of help with this part and added a comment in my JS that I am not entirely sure I get what I did there. Specifically event.target.src;
  mainImage.src = event.target.src;

- I forgot the steps a lot so needed to look at the workshops a lot to see how to append and call functions.

- The for loop in the thumbnaiil function was little easier to implement by I got confused by my values i and [0] a few times

- I made a lot of typos (specifically adding an 's') which gave me bugs, once I finally got the JS right it was a lot easier to see where the errors where by using inspect. I found it tricky to see what was going on before then and very little to use as guidance.

- once the JS was functional I was able to style the items in CSS which I enjoyed a lot more as I had a visual guide to see what I was doing wrong if given an error.

- I used the example website https://image-galleryv2.vercel.app/ and inspecting it's code to see how they used the css a lot to figure out what I wanted to do.

- absolute postion and the z-index made positioning the thumbnail container very tricky as flex box didn't work

## 4. Final thoughts

- I spent a considerable amount of my weekend on this and felt that just getting the basics was honestly good enough for me. That is why I did not do any of the stretch goals. I am hoping that JS and how to use it becomes easier as we go on!
