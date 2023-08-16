# Conference Registration API 🎉

The Conference Registration API allows users to register for a conference, capturing details such as name, email, phone number, and area of interest. The system also captures real-time location during the registration process.

## 🚀 Getting Started 

### Prerequisites:

- Node.js & npm
- MongoDB

### Installation:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pascholynx/conference-web-api.git
   cd conference-web-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**: 
   Create a `.env` file in the root directory and set your MongoDB URI and preferred port:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=your_preferred_port
   ```

4. **Run the Server**:
   ```bash
   npm start
   ```

The API should now be up and running!

## 🌐 API Endpoints 

### Register a Participant:

- **URL**: `/api/register`
- **Method**: `POST`
- **Data Params**:
   ```json
   {
       "surname": "Doe",
       "otherNames": "John",
       "email": "john.doe@example.com",
       "phoneNumber": "123-456-7890",
       "areaOfInterest": "Backend",
       "location": {
           "type": "Point",
           "coordinates": [longitude, latitude]
       }
   }
   ```

## 🤝 Contributing

We welcome contributions! Please fork this repository, make your changes, and submit a pull request.

## 📜 License

This project is licensed under the MIT License.
