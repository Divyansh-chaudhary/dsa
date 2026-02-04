let timeout;
document.getElementById("input").oninput = function (event) {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    // ... api call
  }, 500);
};
