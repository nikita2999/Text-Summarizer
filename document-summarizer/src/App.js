
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  // Handle text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Submit text for summarization
  const handleSummarize = async () => {
    if (!text.trim()) {
      setError('Please provide some text.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/summarize', { text });
      setSummary(response.data.summary);
      setError('');
    } catch (err) {
      setError('Error summarizing the text. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="ai-app">
      <header className="ai-header">
        <h1>AI Document Summarizer</h1>
        <p>Summarize your text instantly with AI</p>
      </header>
      <main className="ai-main">
        <div className="input-container">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Enter or paste your text here..."
            className="ai-textarea"
          />
          <button className="ai-button" onClick={handleSummarize}>
            Summarize
          </button>
        </div>
        {error && <p className="ai-error">{error}</p>}
        {summary && (
          <div className="summary-container">
            <h3>Summary</h3>
            <p>{summary}</p>
          </div>
        )}
      </main>
      <footer className="ai-footer">
        <p>Powered by AI</p>
      </footer>
    </div>
  );
}

export default App;
