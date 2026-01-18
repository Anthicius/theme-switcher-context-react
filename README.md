# React Theme Switcher (Safe Context Pattern)

A lightweight theme management system that demonstrates **Global State** handling using React Context and the **"Safe Custom Hook"** design pattern.

## Features

* **Global State Management:** Efficient state sharing across the component tree without "prop drilling."
* **Safe Custom Hook:** The `useTheme` hook includes a built-in guard clause to prevent silent failures (throws an informative error if used outside the Provider).
* **Encapsulated Logic:** The toggle logic (`light` vs. `dark`) lives strictly inside the Context, keeping UI components "dumb" and clean.
* **CSS Variables:** Uses native CSS custom properties for instant, performant color switching without complex inline styles.
* **Dynamic Layout:** The application wrapper automatically updates its class based on the current context value.

## Architectural Concepts

* **The "Provider" Pattern:** A specialized component that holds the state and wraps the application.
* **The "Guard Clause":** A safety check inside the hook (`if context === undefined`) that ensures the hook is always connected to a valid Provider.
* **Derived UI:** Components like the Header consume the context solely to trigger actions, while the layout consumes it to apply visual styles.

## Tech Stack

* React (Context API, `useContext`, `useState`)
* CSS (Variables & Transitions)
* Vite

<img width="1920" height="878" alt="image" src="https://github.com/user-attachments/assets/42ee495f-18a0-45c8-8f53-ad0bdb8c4865" />
<img width="1920" height="878" alt="image" src="https://github.com/user-attachments/assets/58dca3f9-c559-47f4-b8d9-af27b7896f19" />

