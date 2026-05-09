# Node.js Backend for Portfolio

## Installation

1. Install dependencies:
```bash
cd backend
npm install
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
SERVE_FRONTEND=false
NODE_ENV=development
```

## Running the Backend

### Development
```bash
npm run dev
```
Requires `nodemon` (installed as a dev dependency).

### Production
```bash
npm start
```

The server will be available at `http://localhost:5000`

## API Endpoints

### Portfolio Data
- `GET /api/portfolio` - Get all portfolio data (personal, skills, projects, education)

### Contact Form
- `GET /api/contact` - Get all contact submissions
- `POST /api/contact` - Submit a new contact form (with validation)

### Status Check
- `GET /api/status` - Server health check

## Frontend Integration

Update the frontend's `submitContactForm` function in `data/mock.js` or create a new API service:

```javascript
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    return await response.json();
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

## Data Storage

Contact submissions are stored in `backend/data/contactSubmissions.json` (created automatically).
