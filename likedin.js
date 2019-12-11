document.addEventListener("scroll", function() {
  let deleteList = document.getElementsByClassName("feed-shared-header");
  Array.from(deleteList).map(b =>
    b.textContent.indexOf("likes") !== -1 ||
    b.textContent.indexOf("loves") !== -1 ||
    b.textContent.indexOf("commented") !== -1
      ? b.parentElement.remove()
      : null
  );
});
