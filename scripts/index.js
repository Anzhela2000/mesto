const buttonChangeProfile = document.querySelector('.profile__button-change');
const formElementInfo = document.querySelector('.popup__form_profile');
const popupInfo = document.querySelector('.popup_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileButton = document.querySelector('.profile__job');
const popupPlace = document.querySelector('.popup_place');
const plusButton = document.querySelector('.profile__add-button');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const galleryContainer = document.querySelector(".gallery");
const template = document.querySelector("#elements");
const formCardAdd = document.querySelector('.popup__form_place');
const popupInputTypePlace = document.querySelector('.popup__input_type_place');
const popupInputTypeLink = document.querySelector('.popup__input_type_link');
const popupGallery = document.querySelector('.popup_gallery');
const popupGalleryImage = document.querySelector('.popup__image');
const popupGalleryNameTitle = document.querySelector('.popup__text');
const buttonCloseList = document.querySelectorAll('.popup__close'); 
 
function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

function closeByOverlay(element) {
  if (event.target === event.currentTarget) {
    closePopup(element);
  };
};

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  popup.addEventListener('mousedown', () => closeByOverlay(popup));
  btn.addEventListener('click', () => closePopup(popup)); 
})

function openPopupInfo() {
  openPopup(popupInfo);
  nameInput.value = profileName.textContent;
  jobInput.value = profileButton.textContent;
}

function saveInfoPopup(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileButton.textContent = jobInput.value;
  closePopup(popupInfo);
}

buttonChangeProfile.addEventListener('click', openPopupInfo);

formElementInfo.addEventListener('submit', saveInfoPopup);

//5 спринт

function handleDelete(evt) {
  evt.target.closest('.gallery__item').remove();
}

function handleLike(evt) {
  evt.target.classList.toggle('gallery__button-like_active');
}

function openPopupImage(name, link) {
  popupGalleryImage.src = link;
  popupGalleryImage.alt = name;
  popupGalleryNameTitle.textContent = name;
  openPopup(popupGallery);
}

//Создание галлереи

const getItemElement = (name, link) => {
  const newItemElement = document.querySelector("#elements").content.querySelector('.gallery__item').cloneNode(true);
  const newItemName = newItemElement.querySelector('.gallery__title').textContent = name;
  const newItemPlace = newItemElement.querySelector('.gallery__picture');
  newItemPlace.src = link;
  const buttontDelete = newItemElement.querySelector('.gallery__delete');
  const addLike = newItemElement.querySelector('.gallery__button-like');
  const galleryImage = newItemElement.querySelector('.gallery__picture_click');
  buttontDelete.addEventListener('click', handleDelete);
  addLike.addEventListener('click', handleLike);
  galleryImage.addEventListener('click', () => { openPopupImage(name, link); });
  return newItemElement;
}

const renderItem = (name, link) => {
  const renderCard = getItemElement(name, link);
  galleryContainer.prepend(renderCard);
}

initialCards.forEach((item) => {
  renderItem(item.name, item.link);
})

//Добавление новых карточек

formCardAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderItem(popupInputTypePlace.value, popupInputTypeLink.value);
  closePopup(popupPlace);
  formCardAdd.reset();
  evt.submitter.classList.add('popup__button_inactive')
  evt.submitter.disabled = true;
});

//ОТКРЫТИЕ ЗАКРЫТИЕ ПОПАП Place

plusButton.addEventListener('click', function () { openPopup(popupPlace) });




