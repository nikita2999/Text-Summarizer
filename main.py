from summarizer import summarize_document

def main():
    # Specify the file containing the text to summarize
    file_path = "sample.txt"
    
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            text = f.read()
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
        return

    # Call the summarizer function
    summary = summarize_document(text)
    
    # Print the summary
    print("\nDocument Summary:")
    print(summary)

if __name__ == "__main__":
    main()
