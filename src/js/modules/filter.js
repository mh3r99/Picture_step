const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    no = document.querySelector(".portfolio-no");

  const typeFilter = (markType) => {
    markAll.forEach((mark) => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });

    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  menu.addEventListener("click", (e) => {
    let target = e.target;

    const targetMark = wrapper.querySelectorAll(`.${target.className}`);
    if (targetMark.length != 0) {
      typeFilter(targetMark);
    } else {
      typeFilter();
    }

    if (target && target.tagName === "LI") {
      items.forEach((btn) => {
        btn.classList.remove("active");
      });
      target.classList.add("active");
    }
  });
};
export default filter;
