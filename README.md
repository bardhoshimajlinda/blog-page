# Blog App

Blog App is a React-based blogging platform that allows users to create, view, and delete blogs. It features dynamic routing, a toggleable dark mode, and responsive design. The data is fetched from a locally hosted API built using JSON Server.

## Features

- **Home Page:** Displays a list of blogs with titles and authors.
- **Create Page:** Allows users to add new blogs via a form.
- **Blog Details Page:** Shows detailed content for a selected blog with an option to delete it.
- **Dark Mode:** Toggle between light and dark themes using the `useContext` hook.
- **404 Page:** Custom error page for unmatched routes.

## Tech Stack

- **Frontend:** React with React Router for routing and custom hooks for data fetching.
- **Backend:** JSON Server for a mock REST API.
- **Styling:** CSS with light and dark mode support.
