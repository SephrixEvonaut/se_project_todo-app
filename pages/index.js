import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";



const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"]
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  todoCounter.updateTotal(false);
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);

  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    renderTodo(item);
  },
  containerSelector: ".todos__list",
});

const renderTodo = (values) => {
  const todo = generateTodo(values);
  section.addItem(todo);
}

section.renderItems();

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation();

const submitPopupForm = (values) => {
  const dataId = uuidv4();
  values.id = dataId;
  const date = new Date(values.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  values.date = date;
  renderTodo(values);
  newTodoValidator.resetValidation();
  todoCounter.updateTotal(true);
};

const popupWithForm = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  popupSubmit: submitPopupForm,
});

popupWithForm.setEventListeners();

addTodoButton.addEventListener("click", () => {
  popupWithForm.open();
});

