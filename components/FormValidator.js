class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings;
    this._formElement = formElement;
    this._buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
   

    toggleButtonState(inputList, this._buttonElement, settings);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(formElement, inputElement, settings);
        toggleButtonState(inputList, this._buttonElement, settings);
      });
    });
  }

  enableValidation(settings) {
    const formElement = document.querySelector(settings.formSelector);
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    _setEventListeners(formElement, settings);
  }

  resetValidation() {
    this._formElement.reset();
    this._buttonElement.classList.add("button_disabled");
    this._buttonElement.disabled = true;
    
  }
}

export default FormValidator;
