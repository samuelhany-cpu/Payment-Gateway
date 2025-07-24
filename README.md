# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# E-commerce Payment Gateway Project

A full-stack E-commerce application with Stripe payment integration, built with Node.js, Express, MongoDB, and React.

## 🚀 Features
- Product Management
- Shopping Cart
- Secure Payments (Stripe)
- Order Management
- Responsive Design

## 🛠️ Tech Stack
- **Backend:** Node.js, Express, MongoDB, Stripe (Deploy to Render)
- **Frontend:** React (Deploy to Vercel)

## 🌐 Deployment Instructions

### Backend (Render)
1. Go to [Render](https://render.com/) and create a new Web Service.
2. Connect your GitHub repo and select the `backend` folder as the root.
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables (MongoDB URI, Stripe keys, etc).
6. Deploy and copy your Render backend URL (e.g., `https://your-backend-service.onrender.com`).

### Frontend (Vercel)
1. Go to [Vercel](https://vercel.com/) and import your GitHub repo.
2. Set the project root to `frontend`.
3. In the frontend folder, create a `.env` file:
   ```
   REACT_APP_API_URL=https://your-backend-service.onrender.com
   ```
4. Deploy!

## 🔗 Connecting Frontend and Backend
- The React app will use the `REACT_APP_API_URL` to make API requests to the backend on Render.

## 📁 Project Structure
- backend/ (Node.js/Express API)
- frontend/ (React app)

## 📝 Notes
- Update the `.env` in `frontend` with your actual Render backend URL after deployment.
- Both services are free on their respective platforms for hobby/demo use.

---
Happy Coding! 