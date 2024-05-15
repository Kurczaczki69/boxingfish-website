const btn = document.getElementById("copy-ip-btn");
const btn_txt = document.getElementById("copy-ip-btn-txt");
const txt = "BoxingFish.pl";

const copyToClip = (txt) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    btn_txt.innerHTML = "Skopiowano!";
    return navigator.clipboard.writeText(txt);
  }
  return Promise.reject("The Clipboard API is not available.");
};

btn.addEventListener(
  "click",
  function () {
    copyToClip(txt);
  },
  false
);
