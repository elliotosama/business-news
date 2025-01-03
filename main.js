async function fetchData() {
  try {
    const response = await fetch('https://gnews.io/api/v4/top-headlines?country=eg&category=business&apikey=289cd0fac16068706673472154293d15');
    const data = await response.json();
    const postsContainer = document.getElementById('posts-container');
    data['articles'].forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('card', 'mb-4');
      postDiv.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${post.image}" class="img-fluid rounded-start" alt="Post Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${post.description}</h6>
              <p class="card-text">${post.content}</p>
              <a href="${post.url}" class="btn btn-primary" target="_blank">Read more</a>
              <p class="mt-3"><strong>Source:</strong> ${post.source.name}</p>
            </div>
          </div>
        </div>
      `;
      postsContainer.appendChild(postDiv);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
window.onload = fetchData;