function submitData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch("http://localhost:3000/add-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email })
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("msg").innerText = data;
  });
} 