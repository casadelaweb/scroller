import Scroller from "./dist/scroller.js";

new Scroller({
  // Селектор для ссылок / кнопок - при клике на эти элементы будем выполнять скролл
  btnSelector: ".scroll-to",
  // Атрибут для ссылок кнопок, сюда записываем точку назначения
  btnAttr: "data-scroll",
  // Предотвращать поведение по-умолчанию для ссылок и кнопок
  btnPreventDefault: true,
  // Отступ в пикселях
  offsetTop: false,
  // Отступ для навигации
  navAutoOffset: true,
  // Селектор для навигации
  navSelector: ".nav",
}).init();
