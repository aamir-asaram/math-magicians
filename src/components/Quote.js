import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
        const url = 'https://api.api-ninjas.com/v1/quotes?category=alone';
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': 'ISRtUiJK4f8rcKFOdZaygB2hrj5CGAoYJzY7VKRu',
          },
        });
        if (!response.ok) throw new Error('Request failed');
        const data = await response.json();
        setQuote(data[0].quote);
        setLoading(false);
    }
    fetchQuote();

  }, []);

  if (loading) {
    return (
      <div className="quote-container">
        <div className="quote">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="quote-container">
        <div className="quote">Error</div>
      </div>
    )
  }

  return (
    <div className="quote-container">
      <div className="quote">{quote}</div>
    </div>
  );
}

export default Quote;
