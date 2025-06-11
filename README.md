# 🤣 Joke Generator Web App

This project implements a fully responsive web application that fetches and displays random jokes using the [JokeAPI](https://v2.jokeapi.dev/). Users can customize the type of humor they want to see, including categories like Programming, Dark, Pun, and more.

## 🧩 Functionality Overview

The app allows users to select joke categories, fetch single-line or two-part jokes, and view them dynamically in an aesthetically styled interface. It includes robust error handling and a smooth user experience.

---

## 🚀 Features

- ✅ Category selection: Programming, Miscellaneous, Pun, Spooky, etc.
- 🃏 Randomized joke content: Single-line and two-part jokes
- 🔄 Asynchronous fetching using the Fetch API
- 🔧 Error handling for failed fetches or empty results
- 🔁 Loading animation displayed during API call
- 📱 Fully responsive layout for desktop and mobile devices

---

## 🎨 UI/UX Design

The application is structured using semantic HTML, styled with CSS Grid and Flexbox. Smooth transitions enhance interactivity while maintaining readability on all screen sizes.

---

## 🧰 Technologies Used

- **HTML5** – Semantic structuring
- **CSS3** – Grid & Flexbox, animations, responsive layout
- **JavaScript** – Fetch API for data handling, DOM manipulation

---

## 📂 Project Structure

- `index.html` – Core HTML layout for the user interface
- `style.css` – Handles visual styling, responsiveness, and animations
- `script.js` – Manages API requests, parses JSON responses, handles error states, and dynamically updates the DOM

---

## 📡 API Used

All jokes are fetched from the JokeAPI (version 2):  
🔗 [https://v2.jokeapi.dev/](https://v2.jokeapi.dev/)

The API supports:
- Multiple joke types (single, two-part)
- Category filters
- Blacklist flags for content filtering
- Customization of joke formats

---

## ▶️ How to Run the Project

To run the Joke Generator Web App locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/joke-generator-web-app.git
   cd joke-generator-web-app
   ```

2. **Open the project**:
   Simply open `index.html` in your preferred web browser (Chrome, Firefox, etc.).

> 💡 No build tools or servers are needed — this project is fully static and runs directly in the browser.

---

## 📝 Conclusion

The Joke Generator Web App is a lightweight and fun project that showcases how to consume and render external APIs in a clean and interactive frontend. It serves as a great example of combining modern web technologies for practical, real-time user experiences.
