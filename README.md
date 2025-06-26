🧠 Plagiarism Detection System

A web-based platform for detecting plagiarism in academic submissions using intelligent NLP techniques. This system helps educators upload assignments, analyze similarities, and generate insightful plagiarism reports using TF-IDF, K-gram, and sentence-level comparison algorithms.

---

![INTERFACE](https://github.com/user-attachments/assets/79023587-6519-4a32-9cb5-d352fda990c6)

 🚀 Features

- 📁 Upload files (PDF, DOCX, TXT)
- 🔍 Multi-algorithm plagiarism detection
- 🧾 Detailed similarity reports
- 👨‍🏫 Role-based user access (Teacher & Student)
- 🔐 JWT Authentication with Djoser
- 📚 Course and assignment management
- 💻 Modern, responsive frontend using Next.js & Tailwind CSS

---

🏗 Tech Stack

| Layer        | Technology                                |
|--------------|--------------------------------------------|
| Frontend     | Next.js 14, React 18, Tailwind CSS, TypeScript |
| Backend      | Django 4.2.7, Django REST Framework, Python 3.8+ |
| Authentication | JWT, Djoser |
| NLP & ML     | scikit-learn, NLTK |
| Database     | SQLite (dev), PostgreSQL (prod) |
| File Parsing | PyPDF2, python-docx |
| UI Components| shadcn/ui, Lucide React Icons |


 ⚙ Setup Instructions

 ✅ Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

 🔧 Backend Setup
bash
git clone https://github.com/yourusername/plagiarism-detector.git

cd plagiarism-detector

# Create virtual environment
python -m venv venv

source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Download NLTK data
python setup.py

# Setup database
python manage.py makemigrations accounts detector

python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver


🌐 FRONTEND SETUP

cd frontend

# Install dependencies
npm install  # or yarn install

# Create env file
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Run dev server
npm run dev  # or yarn dev

# Open in browser
http://localhost:3000
![SERVER RUNNING](https://github.com/user-attachments/assets/fdb64ee9-b573-4d74-946e-2ac0a8322d1d)


 🔁 Project Workflow

- 🔐 *User Authentication*  
  - User registers/logs in via the frontend  
  - Backend issues JWT tokens  
  - Tokens are stored in localStorage and used in API headers  

- 📤 *Assignment Upload*  
  - User uploads a document (PDF, DOCX, TXT) with assignment details
  
![DOCUMENT SELECTION](https://github.com/user-attachments/assets/d5217e8a-ea82-4f64-8546-c181010815ea)

  - Backend extracts text content and stores it in the database  

- 🧪 *Plagiarism Detection*  
  - User selects an assignment to check
    
![CHECKING PLAGIARISM](https://github.com/user-attachments/assets/864003aa-e11d-4a06-92bd-8a42b00e5eb7)

  - Text is preprocessed (lowercase, cleaned)  
  - Detection algorithms are applied:
    - TF-IDF + Cosine Similarity
    - K-gram Fingerprinting
    - Sentence-Level Matching  
  - Results (score + matches) are saved and returned
    
![RESULTS COMPARISON](https://github.com/user-attachments/assets/25b54754-ef58-48b8-b526-2a3d4b2bd38e)


- 📊 *Results Visualization*  
  - Frontend fetches results via API  
  - Plagiarism reports show:
    - Matched text snippets  
    - Source types (Assignment, Internet, DB)  
    - Similarity scores
      
![FINAL RESULT](https://github.com/user-attachments/assets/57d27dd6-11ba-4d5e-987b-530c61f9ecfb)

- 🛠 *Tech & Communication*  
  - Frontend ↔ Backend via RESTful API  
  - Django handles logic; Next.js renders UI  

---
