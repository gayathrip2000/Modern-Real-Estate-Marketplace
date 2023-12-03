# Modern-Real-Estate-Marketplace

This Real Estate Marketplace is crafted utilizing the robust MERN Stack. Within this application, users have the flexibility to sign in by providing their email, username, and password. Additionally, seamless integration allows users to conveniently access their accounts through Google login authentication. The platform empowers users to effortlessly perform CRUD (Create, Read, Update, Delete) operations on property listings, ensuring a smooth and efficient experience. Dive into this intuitive application to explore its user-friendly interface and streamlined functionalities, making property management and transactions hassle-free

![Screenshot 2023-12-03 231006](https://github.com/gayathrip2000/Modern-Real-Estate-Marketplace/assets/99193625/28869b50-50e5-4e68-8eb1-602bf8b3af47)
![Screenshot 2023-12-03 231116](https://github.com/gayathrip2000/Modern-Real-Estate-Marketplace/assets/99193625/7cabdb25-80fe-44b0-866e-b2202124deaa)

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

1. Node.js and npm should be installed on your machine.
2. MongoDB should be installed and running.

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/gayathrip2000/Modern-Real-Estate-Marketplace
cd client
```

2. Install the project dependencies.

```bash
npm install
```

3. Set up your environment variables.

Create a .env file in the root directory of the project and add the following variables:

```bash
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET = your_jwt_secret_key
VITE_FIREBASE_API_KEY =your_firebase_key
```

4. Start the application.

This will start the cilent side of the application.

```bash
cd client
npm run dev
```

This will also start the backend of the application.

```bash
npm run dev
```

The App will be available at https://mern-state-real.onrender.com/

