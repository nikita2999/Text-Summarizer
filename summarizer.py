
from transformers import pipeline

# Load the summarization model (faster T5-small)
summarizer = pipeline("summarization", model="t5-small")

# Function to summarize text input on the UI
def summarize_document(text, max_length=100, min_length=30):
    """
    Summarizes the input text using a pre-trained transformer model (T5-small for faster performance).
    
    Parameters:
        text (str): The input text to summarize.
        max_length (int): Maximum length of the summary.
        min_length (int): Minimum length of the summary.

    Returns:
        str: The summarized text.
    """
    # Generate the summary with adjusted parameters
    summary = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
    return summary[0]['summary_text']

