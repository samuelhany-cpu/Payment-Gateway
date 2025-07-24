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

- **Product Management**: Add, view, and manage products
- **Shopping Cart**: Add/remove items, view cart contents
- **Secure Payments**: Stripe integration for payment processing
- **Order Management**: Complete order flow with confirmation
- **Dark Mode UI**: Modern, clean dark theme
- **Responsive Design**: Works on desktop and mobile

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (MongoDB Atlas)
- **Mongoose** - ODM for MongoDB
- **Stripe** - Payment processing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Stripe.js** - Payment form integration

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Stripe account

## 🔧 Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Payment-Gateway
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the `backend` directory:
```env
MONGODB_URI="your_mongodb_atlas_connection_string"
STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
```

### 4. Frontend Setup
```bash
cd frontend
npm install
```

### 5. Update Stripe Keys
In `frontend/src/App.js`, replace:
```javascript
const stripePromise = loadStripe('your_stripe_publishable_key');
```

## 🚀 Running the Application

### Development Mode

1. **Start Backend Server**
```bash
cd backend
npm start
```
Server runs on: http://localhost:5000

2. **Start Frontend Development Server**
```bash
cd frontend
npm start
```
App runs on: http://localhost:3000

### Production Build

1. **Build Frontend**
```bash
cd frontend
npm run build
```

2. **Deploy Backend**
Deploy the backend to a hosting service (Heroku, Vercel, Railway, etc.)

## 🧪 Testing

### Stripe Test Cards
- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`
- **Insufficient Funds**: `4000 0000 0000 9995`

### API Endpoints
- `GET /api/products` - Get all products
- `POST /api/products` - Add new product
- `GET /api/cart?user=<user>` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/orders` - Create new order
- `GET /api/orders?user=<user>` - Get user's orders
- `POST /api/checkout/create-payment-intent` - Create Stripe payment intent

## 🌐 Deployment

### Frontend (GitHub Pages)
1. Update `package.json` in frontend:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

2. Install gh-pages:
```bash
cd frontend
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

### Backend (Heroku/Vercel/Railway)
1. Create account on your preferred platform
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

## 📁 Project Structure

```
Payment-Gateway/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   └── stripeRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ProductList.js
│   │   │   ├── CartPage.js
│   │   │   ├── CheckoutPage.js
│   │   │   └── OrderConfirmation.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
└── README.md
```

## 🔒 Security Notes

- Never commit `.env` files
- Use environment variables for sensitive data
- Implement proper authentication in production
- Use HTTPS in production
- Validate all user inputs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify your environment variables
3. Ensure both servers are running
4. Check your Stripe dashboard for payment status

---

**Happy Coding! 🎉** 