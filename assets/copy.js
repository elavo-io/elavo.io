(function () {
  if (!navigator.clipboard) return;
  document.querySelectorAll(".command").forEach(function (block) {
    var code = block.querySelector("pre");
    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy";
    button.textContent = "Copy";
    button.addEventListener("click", function () {
      navigator.clipboard.writeText(code.innerText.trim()).then(function () {
        button.textContent = "Copied";
        setTimeout(function () {
          button.textContent = "Copy";
        }, 1600);
      });
    });
    block.appendChild(button);
  });
})();
