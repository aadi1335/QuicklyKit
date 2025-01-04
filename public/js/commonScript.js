// logout button functionality
document.getElementById("logout-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const isconfirmed = confirm("Are you sure you want to logout?");
  if (isconfirmed) {
    window.location.href = "/logout";
  }
});
