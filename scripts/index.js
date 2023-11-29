const cardData1 = {
  name: "grand tetons national park",
  link: "https://unsplash.com/photos/a-beautiful-view-of-a-mountain-range-with-a-lake-in-the-foreground-llbKxU0xapk",
};

const cardData2 = {
  name: "Hector Lake",
  link: "https://unsplash.com/photos/body-of-water-near-forest-and-mountain-2dIC6JMb_4E",
};

const cardData3 = {
  name: "guangxi",
  link: "https://unsplash.com/photos/a-body-of-water-surrounded-by-mountains-under-a-cloudy-sky-jlIfwzLSDEE",
};

const cardData4 = {
  name: "Emerald",
  link: "https://unsplash.com/photos/a-view-of-a-lake-with-mountains-in-the-background-W-qgMo-YV08",
};

const cardData5 = {
  name: "Valley Of The Ten Picks",
  link: "https://unsplash.com/photos/people-riding-on-boat-on-lake-near-green-trees-and-mountains-during-daytime-nXtCxgYc57c",
};

const cardData6 = {
  name: "Hallstatt",
  link: "https://unsplash.com/photos/houses-near-body-of-water-and-mountain-during-daytime-LKBW3401d-0",
};

const initialCards = [
  cardData1,
  cardData2,
  cardData3,
  cardData4,
  cardData5,
  cardData6,
];

// creating the elements that needs to be manipulated
const modal = document.querySelector(".modal");
const edit = document.querySelector(".profile__edit-button");
const modalNameInput = modal.querySelector(".modal__name");
const modalAboutMeInput = modal.querySelector(".modal__description");
const modalSaveButton = modal.querySelector(".modal__button");
const profileHeader = document.querySelector(".profile__header");
const closeButton = document.querySelector(".modal__close-button");
const profileDescription = document.querySelector(".profile__description");

// open the edit profile modal
modalSaveButton.addEventListener("click", handleSubmit);
edit.addEventListener("click", () => {
  modal.classList.add("modal__opened");
});

// closing the edit modal ( and making sure that the inputs value will reset )
closeButton.addEventListener("click", () => {
  modal.classList.remove("modal__opened");
  modalNameInput.value = profileHeader.innerHTML;
  modalAboutMeInput.value = profileDescription.innerHTML;
});

//prevent full page refresh after submit & rendring the new values to the profile
function handleSubmit(e) {
  e.preventDefault();
  profileHeader.innerHTML = modalNameInput.value;
  profileDescription.innerHTML = modalAboutMeInput.value;
  modal.classList.remove("modal__opened");
}
