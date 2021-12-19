class Scroller {
  constructor(options) {
    this.btnSelector = setSetting(options.btnSelector, ".scroll-to");

    this.btnAttr = setSetting(options.btnAttr, "data-scroll");

    this.btnPreventDefault = setSetting(options.btnPreventDefault, true);

    this.offsetTop = setSetting(options.offsetTop, 0);

    this.navAutoOffset = setSetting(options.navAutoOffset, false);

    this.navSelector = setSetting(options.navSelector, "nav");

    function setSetting(valueSet, valueDefault) {
      if (typeof valueSet === "undefined") {
        return valueDefault;
      } else {
        return valueSet;
      }
    }
  }

  returnNavHeight(selector) {
    let nav = document.querySelector(selector);

    if (nav) {
      let navHeight = nav.offsetHeight;

      return navHeight;
    } else {
      console.log(
        `Элемента с селектором "${selector}" нет на этой странице. Отступ для навигации установлен по-умолчанию: 0px.`
      );
      return 0;
    }
  }

  init() {
    const buttons = document.querySelectorAll(this.btnSelector);

    if (buttons.length > 0) {
      let offsetTop = parseInt(this.offsetTop);

      if (Number.isNaN(offsetTop)) {
        offsetTop = 0;
      }

      if (this.navAutoOffset === true || this.navAutoOffset === "true") {
        offsetTop = offsetTop + this.returnNavHeight(this.navSelector);
      }

      const attr = this.btnAttr;

      const ifPreventDefault = this.btnPreventDefault;

      for (let button of buttons) {
        button.addEventListener("click", function (e) {
          if (ifPreventDefault === true || ifPreventDefault === "true") {
            e.preventDefault();
          }

          let id = button.getAttribute(attr);

          let scrollTargetElement = document.getElementById(id);

          if (scrollTargetElement) {
            let scrollTargetPosition =
              scrollTargetElement.getBoundingClientRect().top - offsetTop;

            window.scrollBy({
              top: scrollTargetPosition,
              behavior: "smooth",
            });
          } else {
            console.log(`Элемента с id="${id}" нет на этой странице.`);
          }
        });
      }
    }
  }
}
