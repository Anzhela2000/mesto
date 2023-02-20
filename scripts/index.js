const buttonChange = document.querySelector('.profile__button-change');
const formElementInfo = document.querySelector('.popup__form_profile');
const popupInfo = document.querySelector('.popup_profile');
const closeButton = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileButton = document.querySelector('.profile__job');
const popupPlace = document.querySelector('.popup_place');
const plusButton = document.querySelector('.profile__add-button');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const closeButtonPlace = document.querySelector('.popup__close_place');
const galleryContainer = document.querySelector(".gallery");
const template = document.querySelector("#elements");
const formCardAdd = document.querySelector('.popup__form_place');
const popupInputTypePlace = document.querySelector('.popup__input_type_place');
const popupInputTypeLink = document.querySelector('.popup__input_type_link');
const popupGallery = document.querySelector('.popup_gallery');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const buttonClosePopup = document.querySelector('.popup__close_gallery');

function openPopup(i) {
  i.classList.add('popup_opened');
}

function closePopup(i) {
  i.classList.remove('popup_opened');
}

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

buttonChange.addEventListener('click', openPopupInfo);

closeButton.addEventListener('click', function () { closePopup(popupInfo) });

formElementInfo.addEventListener('submit', saveInfoPopup);

//5 спринт

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function handleDelete(evt) {
  evt.target.closest('.gallery__item').remove();
}

function handleLike(evt) {
  evt.target.classList.toggle('gallery__button-like_active');
}

function openPopupImage(name, link) {
  popupImage.src = link;
  popupText.textContent = name;
  openPopup(popupGallery);
}

function closePopupGallery() {
  closePopup(popupGallery);
}
buttonClosePopup.addEventListener('click', closePopupGallery);

//Создание галлереи

const getItemElement = (name, link) => {
  const newItemElement = document.querySelector("#elements").content.querySelector('.gallery__item').cloneNode(true);
  const newItemName = newItemElement.querySelector('.gallery__title').textContent = name;
  const newItemPlace = newItemElement.querySelector('.gallery__picture').src = link;
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
  formCardAdd.reset()
});

//ОТКРЫТИЕ ЗАКРЫТИЕ ПОПАП Place

plusButton.addEventListener('click', function () { openPopup(popupPlace) });

closeButtonPlace.addEventListener('click', function () { closePopup(popupPlace) });



