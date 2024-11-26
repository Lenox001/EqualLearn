# EquaLearn - eLearning Platform


```markdown
# EquaLearn

EquaLearn is an educational platform that allows users to explore courses and learning materials. Built with Django for the backend and React for the frontend, the application offers a dynamic and responsive user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow the steps below to set up the project locally.

### Step 1: Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/equalearn.git
cd equalearn
```

This will create a local copy of the project on your machine and navigate you into the project directory.

### Step 2: Set Up the Backend (Django)

#### a. Navigate to the `backend` directory

```bash
cd backend
```

#### b. Create and activate a virtual environment

On **Windows**:

```bash
python -m venv .venv
.\.venv\Scripts\activate
```

On **macOS/Linux**:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

This will create a virtual environment named `.venv` and activate it.

#### c. Install the required Python packages

```bash
pip install -r requirements.txt
```

This will install all the necessary dependencies listed in the `requirements.txt` file.

#### d. Set up the database

Run the following command to apply all the migrations and set up the database:

```bash
python manage.py migrate
```

This will create the necessary tables in the database.

#### e. Create a superuser

Create a superuser (an admin account) to access the Django admin panel:

```bash
python manage.py createsuperuser
```

Follow the prompts to enter a username, email, and password.

#### f. Run the Django development server

```bash
python manage.py runserver
```

This will start the Django backend on `http://localhost:8000/`. You can access the API at this URL.

### Step 3: Set Up the Frontend (React)

#### a. Navigate to the `frontend` directory

```bash
cd ../frontend
```

#### b. Install the required dependencies

Install the necessary dependencies by running:

```bash
npm install
```

This will install all the dependencies listed in the `package.json` file.

#### c. Start the React development server

Run the following command to start the React development server:

```bash
npm run dev
```

This will start the React frontend on `http://localhost:3000/`.

### Step 4: Connect Backend and Frontend

- Make sure that the React app is configured to communicate with the Django backend. Typically, this is done by setting the backend URL in your environment variables or configuration files (like `axios`).
- By default, the backend is running on `http://localhost:8000/`. Make sure the frontend sends API requests to this URL.

---

## Usage

Once the backend and frontend are running:

- **Frontend**: You can view and interact with the application on `http://localhost:3000/` (React app).
- **Backend**: You can access the API on `http://localhost:8000/` (Django API).

You can log into the Django admin panel using the superuser credentials you created earlier by going to `http://localhost:8000/admin`.

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Breakdown:

- **Step 1**: Clone the repository and move into the project directory.
- **Step 2**: Set up the Django backend, including creating a virtual environment, installing dependencies, running migrations, creating a superuser, and running the server.
- **Step 3**: Set up the React frontend, install dependencies, and start the frontend server.
- **Step 4**: Instructions on connecting the backend and frontend.


