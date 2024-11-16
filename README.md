# Document Summarizer

A simple Python-based tool to summarize large documents using a pre-trained transformer model. This project leverages the power of Hugging Face's transformers library to generate high-quality, concise summaries of input documents.

## Features
- **Summarizes documents** into concise, easy-to-understand text.
- **Uses pre-trained transformer models** (e.g., T5) from Hugging Face for high-quality text summarization.
- **Customizable summary length**: Specify the desired summary length using max and min parameters.

## Requirements
- Python 3.8 or later
- Dependencies listed in `requirements.txt`

## Installation

### 1. Clone the Repository
Clone the repository or download the files directly:

```bash
git clone https://github.com/nikita2999/Text-Summarizer.git
2. Install Dependencies
Navigate to the project folder and install the required dependencies:

bash
Copy code
pip install -r requirements.txt
3. Run the Application
After installation, you can run the application via the terminal or through the Flask API.

For a local Flask server (back-end), run:

bash
Copy code
python app.py
For summarization functionality, simply provide the text input via the API or the UI.

How to Use
1. Using the Web UI
Open the index.html file in your browser.
Paste the document text into the text box.
Click the "Summarize" button to generate the summary.
2. Using the API
You can also use the Flask API for automated text summarization. Send a POST request to the /summarize endpoint with the text field in the request body.

Example:

bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"text": "Your text here"}' http://localhost:5000/summarize
Contributing
Feel free to fork the repository, make improvements, and submit pull requests. If you find any bugs or have suggestions, please open an issue.
