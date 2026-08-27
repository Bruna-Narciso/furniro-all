
# Furniro

A modern furniture e-commerce website inspired by the Furniro design, developed as part of the Fellowship Challenge.

The project was built with a focus on reusable components, responsive layouts, form validation, authentication, shopping cart functionality, and a smooth checkout experience.

---

## ✨ Features

* Responsive furniture e-commerce interface
* Product listing and product details
* Shopping cart
* Add, remove, and update cart items
* Cart sidebar
* User registration
* User login and authentication
* Protected checkout route
* Checkout form validation
* Payment method selection
* ZIP code lookup using the [ViaCEP API](https://viacep.com.br/)
* Automatic address information filling
* Contact form with validation
* Toast notifications
* Reusable React components

---

## 🛠️ Technologies

* React
* TypeScript
* Tailwind CSS
* React Router
* React Hook Form
* Zod
* Zustand
* React Hot Toast
* REST API
* ViaCEP API
* Vite

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Benefits/
│   ├── Billing/
│   ├── Cart/
│   ├── Contact/
│   ├── Header/
│   ├── Login/
│   └── ...
├── pages/
│   ├── Home/
│   ├── Shop/
│   ├── Checkout/
│   ├── Contact/
│   ├── Login/
│   └── SignUp/
├── services/
├── stores/
├── utils/
├── lib/
└── App.tsx
```

---

## 🔐 Authentication

The application includes an authentication flow that allows users to:

* Create an account
* Log in with their credentials
* Store authentication information locally
* Access protected pages after authentication
* Be redirected to the login page when attempting to access protected routes

The checkout page is protected and requires the user to be authenticated.

---

## 🛒 Shopping Cart

The shopping cart allows users to manage the products they want to purchase.

Available actions include:

* Add products to the cart
* Increase product quantity
* Decrease product quantity
* Remove products
* View the subtotal
* View the total amount
* Access the cart through the cart sidebar
* Proceed to checkout

Cart state is managed using Zustand.

---

## 💳 Checkout

The checkout page provides a complete purchasing flow.

### Form Validation

Checkout fields are managed and validated using:

* React Hook Form
* Zod

Required fields are validated before the order can be submitted.

The user must provide valid information such as:

* First Name
* Last Name
* ZIP Code
* Country / Region
* Street Address
* Town / City
* Province
* Email Address

A payment method must also be selected before placing an order.

### 📍 ZIP Code Lookup

The ZIP Code field integrates with the [ViaCEP API](https://viacep.com.br/).

When a valid Brazilian ZIP Code is entered, the application automatically retrieves:

* Country / Region
* Street Address
* Town / City
* Province

The retrieved information is automatically populated in the checkout form.

---

## 📩 Contact

The Contact page includes a form with validation for:

* Name
* Email Address
* Subject
* Message

Required fields must be completed before the form can be submitted.

After a successful submission, the user receives a confirmation notification.

---

## 🔔 Notifications

The application uses toast notifications to provide feedback for important user actions, including:

* Successful order placement
* Empty cart attempts
* Form validation errors
* Successful form submission

---

## 🎨 Design

The interface was developed based on the provided Furniro design in Figma, with attention to:

* Typography
* Spacing
* Colors
* Layout
* Component positioning
* Responsive behavior
* Interactive states

---

## 📱 Responsive Design

The application adapts to different screen sizes using Tailwind CSS responsive utilities.

The layouts were designed to provide a consistent experience across:

* Desktop
* Tablet
* Mobile

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd furniro
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🔧 Environment Variables

If the project requires environment variables, create a `.env` file in the project root and configure the required values.

Example:

```env
VITE_API_URL=your_api_url
```

Do not commit sensitive environment variables to the repository.

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates a production-ready build.

### Preview

```bash
npm run preview
```

Previews the production build locally.

---

## 🧩 Development Practices

The project follows a component-based architecture with an emphasis on:

* Reusability
* Separation of concerns
* Type safety
* Form validation
* Centralized state management
* Clear routing structure
* Conventional Git commits

---

## 📚 References & Learning Materials

During the development of this project, the following documentation, articles, and video tutorials were used as learning and reference materials.

### Official Documentation

- [React Documentation](https://react.dev/) — React concepts, components, hooks, and application structure.
- [React Hook Form Documentation](https://react-hook-form.com/) — Form management, registration, submission, and validation handling.
- [Zod Documentation](https://zod.dev/) — Schema-based validation and TypeScript type inference.
- [React Router Documentation](https://reactrouter.com/) — Routing, navigation, redirects, and protected routes.
- [Zustand Documentation](https://zustand.docs.pmnd.rs/) — Global state management and shopping cart state.
- [ViaCEP API](https://viacep.com.br/) — Brazilian ZIP code lookup and address information.
- [React Hot Toast](https://react-hot-toast.com/) — Toast notifications and user feedback.

### Articles

- [Authentication with React Router v7 — LogRocket](https://blog.logrocket.com/authentication-react-router-v7/) — Authentication flows and protected routes using modern React Router.
- [Protected Routes and Authentication in React Router — ReactTutorial](https://www.reacttutorial.com/protected-routes-authentication-in-react-router) — Concepts behind authentication and protected routes.

### Video Tutorials

- [React Protected Routes | Role-Based Authorization | React Router v6 — Dave Gray](https://www.youtube.com/watch?v=oUZjO00NkhY) — Protected routes, authentication, redirects, and authorization concepts.
- [React Hook Form - Complete Tutorial (with Zod) — Cosden Solutions](https://www.youtube.com/watch?v=cc_xmawJ8Kg) — Form management and validation using React Hook Form and Zod. 
- [React Hook Form Course for Beginners (inc. Zod + Material UI) — freeCodeCamp.org](https://www.youtube.com/watch?v=JyeWoqWsQFo) — React Hook Form, form validation, error handling, Zod, TypeScript, form context, and default values.


These resources were used to understand concepts, clarify implementation details, and support the development of the application's features. The project implementation was developed and adapted according to the requirements of the Fellowship Challenge and the provided Figma design.


---

## 👩‍💻 Developed by

**Bruna Narciso**

---


