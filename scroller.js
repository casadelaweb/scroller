class Scroller {
  constructor(options) {
    // КНОПКИ

    // Получаем селектор
    this.btnSelector = setSetting(options.btnSelector, ".scroll-to");
    // Получаем атрибут
    this.btnAttr = setSetting(options.btnAttr, "data-scroll");
    // Предотвращать поведение по-умолчанию для ссылок и кнопок
    this.btnPreventDefault = setSetting(options.btnPreventDefault, true);

    // ОТСТУПЫ

    // Получаем отступ от верха (для фиксированной навигации)
    this.offsetTop = setSetting(options.offsetTop, 0);
    // Делать ли отстут для фиксированной навигации
    this.navAutoOffset = setSetting(options.navAutoOffset, false);
    // Селектор для навигации
    this.navSelector = setSetting(options.navSelector, "nav");

    // Устанавливаем настройки по-умолчанию
    function setSetting(valueSet, valueDefault) {
      if (typeof valueSet === "undefined") {
        return valueDefault;
      } else {
        return valueSet;
      }
    }
  }

  // Возвращает высоту навигации, в качестве аргумент принимает строчную переменную - селектор навигации
  returnNavHeight(selector) {
    // Получаем навигацию
    let nav = document.querySelector(selector);
    // Если такой элемент существует на странице
    if (nav) {
      // Получаем высоту навигации
      let navHeight = nav.offsetHeight;

      // Функция выдаст числовое значение - высоту навигации
      return navHeight;
    } else {
      // Если на странице нет элементов с заданным селктором
      console.log(
        `Элемента с селектором "${selector}" нет на этой странице. Отступ для навигации установлен по-умолчанию: 0px.`
      );
      return 0;
    }
  }

  // Инициализация
  init() {
    // ПРЕДВАРИТЕЛЬНАЯ ПРОВЕРКА

    // Получаем все элементы с нужным селектором
    const buttons = document.querySelectorAll(this.btnSelector);
    // Проверяем есть ли такие элементы на странице
    if (buttons.length > 0) {
      // ЗАДАННЫЙ ОТСТУП

      // Получаем значение отступа и преобразуем его в целое число
      let offsetTop = parseInt(this.offsetTop);
      // Проверяем, задано ли числовое значение
      if (Number.isNaN(offsetTop)) {
        // Если задано НЕ числовое значение (в том числе если значение вообще не задано), отступ будет равен 0
        offsetTop = 0;
      }
      //console.log(offsetTop);

      // ФИКСИРОВАННАЯ НАВИГАЦИЯ И ОТСТУП
      if (this.navAutoOffset === true || this.navAutoOffset === "true") {
        offsetTop = offsetTop + this.returnNavHeight(this.navSelector);
        //console.log(`navAutoOffset - yes, offsetTop = ${offsetTop}`);
      }

      // ПРОСЛУШИВАЕМ КЛИК И ВЫПОЛНЯЕМ СКРОЛЛ

      // Получаем атрибут, в котором хранится место назначения ссылки
      const attr = this.btnAttr;
      // Проверка, включено ли предотвращение поведения по-умолчанию в опциях
      const ifPreventDefault = this.btnPreventDefault;
      // Перебираем каждую ссылку / кнопку
      for (let button of buttons) {
        // Прослушиваем событие клик
        button.addEventListener("click", function (e) {
          // Проверка, включено ли предотвращение поведения по-умолчанию в опциях
          if (ifPreventDefault === true || ifPreventDefault === "true") {
            // Предотвращать поведение по-умолчанию для ссылок и кнопок
            e.preventDefault();
            //console.log("preventDefault - yes");
          }

          // Получаем id точки назначения
          let id = button.getAttribute(attr);
          // Получаем элемент, к которому будем прокручивать
          let scrollTargetElement = document.getElementById(id);
          // Если такой элемент существует, получаем его координаты и иницируем скролл
          if (scrollTargetElement) {
            // Получаем координаты элемента, к которому будем прокручивать с учетом заданного отступа
            let scrollTargetPosition =
              scrollTargetElement.getBoundingClientRect().top - offsetTop;

            // Прокручиваем к цели
            window.scrollBy({
              top: scrollTargetPosition,
              behavior: "smooth",
            });
          }
          // Если id указан с ошибкой и элемент не найден на странице
          else {
            console.log(`Элемента с id="${id}" нет на этой странице.`);
          }
        });
      }
    }
  }
}
