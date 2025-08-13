class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formElement = formElement;
    this._buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
  }

  _toggleButtonState () {
  if (this._hasInvalidInput(this._inputList)) {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  } else {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
};

  _hasInvalidInput () {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

_showInputError ( inputElement, errorMessage,) {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
};

_hideInputError (inputElement) {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = "";
};


  _checkInputValidity (inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(
      this._formElement,
      inputElement,
      inputElement.validationMessage,
      this._settings,
    );
  } else {
    hideInputError(inputElement);
  }
};


  _setEventListeners() {
  

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(inputElement);
        toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }

  resetValidation() {
    this._formElement.reset();
    this._buttonElement.classList.add("button_disabled");
    this._buttonElement.disabled = true;
  }
}

export default FormValidator;
