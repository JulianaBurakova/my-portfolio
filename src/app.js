window.addEventListener("load", function () {
  let btnTop = document.getElementById("btn-top");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  };
  btnTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
