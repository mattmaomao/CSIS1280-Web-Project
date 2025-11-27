let btn = document.getElementById("form-submit-btn");
let review = document.getElementById("review");

btn.addEventListener("click", () => {
  let fName = document.getElementById("fName").value;
  if (!fName) alert("Please enter first name.");
  let lName = document.getElementById("lName").value;
  if (!lName) alert("Please enter last name.");
  let email = document.getElementById("email").value;
  if (!email) alert("Please enter email.");
  let subscribe = document.getElementById("subscribe").checked;
  let starOptions = document.getElementsByName("star");
  let selectedStar;
  for (let option of starOptions) {
    if (option.checked) {
      selectedStar = option.value;
      break;
    }
  }
  let message = document.getElementById("message").value;

  review.innerHTML = `Thank you for leaving a ${selectedStar}-star review, ${fName} ${lName}!<br>`;
  if (subscribe)
    review.innerHTML += `You have <b>subscribed</b> with the email: ${email}<br>`;
  else
    review.innerHTML += `You will <b>not receive updates</b> with the email: "${email}"<br>`;
  if (message)
    review.innerHTML += `Your comment: "${message}" has been received.`;
});
