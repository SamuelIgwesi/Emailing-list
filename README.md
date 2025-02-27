##Emailing List 📩

Welcome to Emailing List, a project designed to manage and automate email subscriptions efficiently. This is a Signup Page created with Node.js and Mailchimp API, allowing users to subscribe and be added to an email list.

🚀 Features

📧 Subscription System – Users can subscribe with their email.

📜 Email List Management – Store and manage user emails securely.

🚀 Automated Emailing – Send newsletters or promotional emails with ease.

🔐 Security Measures – Implement email verification and spam protection.

📊 Analytics Dashboard – Track open rates and user engagement (Planned feature).

🛠 Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB

Email Service: Mailchimp API

Authentication: JWT

📂 Project Structure

Emailing-list/
│-- backend/    # Server-side logic (Node.js, Express)
│-- frontend/   # Client-side code (HTML, CSS JavaScript)
│-- config/     # Configuration files (database, email service)
│-- scripts/    # Email automation scripts
│-- README.md   # Project documentation

📦 Installation & Setup

Clone the repository:

git clone https://github.com/SamuelIgwesi/Emailing-list.git
cd Emailing-list

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory

Add necessary variables (e.g., DATABASE_URL, MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID)

Start the server:

npm start

🔥 Usage

Users sign up through the frontend (or API endpoint /subscribe).

Their email addresses are added to the Mailchimp mailing list.

Administrators can manage and send emails through Mailchimp.

🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

📜 License

This project is licensed under the MIT License.
