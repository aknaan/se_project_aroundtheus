const cardData1 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const cardData2 = {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
};

const cardData3 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
};

const cardData4 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
};

const cardData5 = {
  name: "Vanoise National Park",
  link: " https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
};

const cardData6 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};

const initialCards = [
  cardData1,
  cardData2,
  cardData3,
  cardData4,
  cardData5,
  cardData6,
];

// elements
const modal = document.querySelector(".modal");
const profileEditButton = document.querySelector(".profile__edit-button");
const modalNameInput = modal.querySelector(".modal__name");
const modalAboutMeInput = modal.querySelector(".modal__description");
const modalSaveButton = modal.querySelector(".modal__button");
const profileHeader = document.querySelector(".profile__header");
const ProfileCloseButton = document.querySelector(".modal__close-button");
const profileDescription = document.querySelector(".profile__description");

//functions
function closePopup() {
  modal.classList.remove("modal__opened");
  modalNameInput.value = profileHeader.innerHTML;
  modalAboutMeInput.value = profileDescription.innerHTML;
}

// selecting the template
const cardsTemplate =
  document.querySelector("#card-template").content.firstElementChild;
function getCardElement(data) {
  // cloning the template
  const cardElement = cardsTemplate.cloneNode(true);
  // getting from the clone our image & title and setting the attributes
  cardImageEl = cardElement.querySelector(".card__image");
  cardTitleEl = cardElement.querySelector(".card__title");
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.innerHTML = data.name;
  //returning the cardElement
  return cardElement;
}

//Event listeners

// open the edit profile modal
modalSaveButton.addEventListener("click", handleSubmit);
profileEditButton.addEventListener("click", () => {
  modal.classList.add("modal__opened");
});

// closing the edit modal ( and making sure that the inputs value will reset )
ProfileCloseButton.addEventListener("click", closePopup);

//Events handlers
//rendring the new values to the profile
function handleSubmit(e) {
  e.preventDefault();
  profileHeader.innerHTML = modalNameInput.value;
  profileDescription.innerHTML = modalAboutMeInput.value;
  modal.classList.remove("modal__opened");
}

const cardListEl = document.querySelector(".cards__list");
// using the getElement function to run over all the list of elements and rendreing with prepend
initialCards.forEach((cardData) => {
  const cardElementCreator = getCardElement(cardData);
  cardListEl.prepend(cardElementCreator);
});
