const categoryMenu = document.getElementById('category-menu');
const jokeContainer = document.getElementById('joke-container');

// Creating a loading spinner element
const loadingSpinner = document.createElement('div');
loadingSpinner.id = 'loading-spinner';
loadingSpinner.innerHTML = '<div class="spinner"></div>Loading...';
document.body.appendChild(loadingSpinner);

// Function to fetch multiple jokes from JokeAPI
async function fetchJokes(category = "Any", amount = 1) {
  try {
    // Show loading spinner
    loadingSpinner.style.display = 'flex';  
    jokeContainer.innerHTML = ""; // Clear previous jokes

    // Minimum loading duration (2 seconds)
    const minLoadingDuration = 2000;
    const startTime = Date.now();

    // Fetch jokes from API with the specified amount
    const response = await fetch(`https://sv443.net/jokeapi/v2/joke/${category}?amount=${amount}`);
    const data = await response.json();

    console.log("API Response:", data);

    const elapsedTime = Date.now() - startTime;
    const remainingTime = minLoadingDuration - elapsedTime;

    setTimeout(() => {
      loadingSpinner.style.display = 'none'; // Hide loading spinner

      if (data.error) {
        jokeContainer.innerHTML = "<p class='error-message'>Error fetching jokes. Try again later.</p>";
      } else if (data.jokes && Array.isArray(data.jokes)) {

        jokeContainer.classList.add('joke-grid');

        // Loops through each joke and creates HTML elements to display it
        data.jokes.forEach(joke => {
          const jokeElement = document.createElement('div');
          jokeElement.classList.add('joke-item');

          //pisatul pentru care m-o picat
          //const jokeId = document.createElement('p');
          //jokeId.textContent = `ID: ${joke.id}`;
          //jokeId.classList.add('joke-id');
          //jokeElement.appendChild(jokeId); // Add the joke ID to each joke item

          const category = document.createElement('p');
          category.textContent = `Category: ${joke.category}`;
          const type = document.createElement('p');
          type.textContent = `Type: ${joke.type}`;

          const content = document.createElement('p');
          content.textContent = joke.type === "single" ? joke.joke : joke.setup;

          const flags = document.createElement('p');
          flags.textContent = `Flags: ${Object.keys(joke.flags).filter(flag => joke.flags[flag]).join(", ") || "None"}`;

          const reportButton = document.createElement('button');
          reportButton.textContent = "Report";
          reportButton.classList.add('report-button');

           // Append all elements to the joke item div
          jokeElement.appendChild(category);
          jokeElement.appendChild(type);
          jokeElement.appendChild(content);
          jokeElement.appendChild(flags);
          jokeElement.appendChild(reportButton);

          if (joke.type !== "single" && joke.delivery) {
            const delivery = document.createElement('p');
            delivery.textContent = joke.delivery;
            delivery.classList.add('delivery');
            delivery.style.display = 'none';

            // Event listeners to show delivery text on hover
            jokeElement.addEventListener('mouseenter', () => {
              delivery.style.display = 'block'; // Show delivery when mouse enters
            });

            jokeElement.addEventListener('mouseleave', () => {
              delivery.style.display = 'none'; // Hide delivery when mouse leaves
            });

            jokeElement.addEventListener('mouseenter', () => {
              flags.style.display = 'block'; // Show delivery when mouse enters
            });

            jokeElement.addEventListener('mouseleave', () => {
              flags.style.display = 'none'; // Hide delivery when mouse leaves
            });

            jokeElement.appendChild(delivery);
            jokeElement.appendChild(flags);
          }

          jokeContainer.appendChild(jokeElement);
        });
      } else {
        jokeContainer.innerHTML = "<p class='error-message'>No jokes available.</p>";
      }
    }, remainingTime > 0 ? remainingTime : 0);

  } catch (error) {
    loadingSpinner.style.display = 'none';
    jokeContainer.innerHTML = "<p class='error-message'>Failed to load jokes. Please check your connection.</p>";
    console.error("Fetch error:", error);
  }
}

// Event listener for category selection
categoryMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    document.querySelectorAll('#category-menu li').forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');
    
    const category = e.target.getAttribute('data-category');
    fetchJokes(category, 5);
  }
});

// Initial joke fetch with 10 jokes for "Any" category on page load
fetchJokes("Any", 5);
