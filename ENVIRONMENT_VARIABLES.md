# Environment Variables

To run this project, you need to set the following environment variables in a `.env` file:

## backend

- `DATABASE_URL`: URL for connecting to your PostgreSQL database.
- `FRONTEND_URL`: URL for frondend , default local http://localhost:3000.
- `SECRET_JWT`: Secret key used for signing jwt.
- `CLOUD_NAME`: clound name , cloudinary to store image.
- `CLOUD_API_KEY`: CLOUD_API_KEY for cloudinary.
- `CLOUD_SECRET_KEY`: CLOUD_SECRET_KEY for cloudinary.

## frontend

- `REACT_APP_URL_BACKEND`: URL for backend, default local http://localhost:5000.

## run frontend

To run the frontend, execute the following commands:

- npm i
- npm start

## run backend

To run the backend, execute the following commands:

- npm i
- npm start
