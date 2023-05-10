// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryItem = document.querySelector(".gallery");

const liPhoto = galleryItems.map((galleryItem) => `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`).join("");


galleryItem.insertAdjacentHTML("afterbegin", liPhoto);


// console.log(galleryItems);

galleryItem.addEventListener("click", onImg);

function onImg(e) {
  e.preventDefault();

  const isGalleryImage = e.target.classList.contains("gallery__image");
 if (!isGalleryImage ) {
   return
  };
  
  const lightbox = new SimpleLightbox('.gallery__link', { captionDelay: "250", captionsData: "alt"});
}

console.log(galleryItems);