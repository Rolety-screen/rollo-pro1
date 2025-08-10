// Ładowanie galerii z JSON
fetch('gallery.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('gallery-container');
    data.forEach(imgData => {
      const img = document.createElement('img');
      img.src = imgData.src;
      img.alt = imgData.alt;
      container.appendChild(img);
    });
  })
  .catch(err => console.error("Błąd ładowania galerii:", err));
