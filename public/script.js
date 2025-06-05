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