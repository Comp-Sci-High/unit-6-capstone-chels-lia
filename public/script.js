document.getElementById("createForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    title: form.title.value,
    readingLevel: form.readingLevel.value,
    link: form.link.value,
    text: form.text.value
  };

  await fetch("/add/article", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  // Redirect to the stories page to see the updated list
   window.location.href = "/analyze";

});

async function updateArticle(event, id) {
  event.preventDefault();

  const form = event.target;
  const data = {
    title: form.title.value,
    readingLevel: form.readingLevel.value,
    link: form.link.value,
    text: form.text.value
  };

  await fetch(`/update/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  // redirects it to the stories page to see the updated data

  window.location.href = "/stories";
}

async function deleteArticle(id) {
  await fetch(`/delete/${id}`, {
    method: "DELETE"
  });

  // Redirect to the analyze page after deleting
  window.location.href = "/analyze";
}