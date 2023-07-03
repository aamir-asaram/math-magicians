import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch('https://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.quote);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }, []);

  if (loading) { return <div className="quote">Loading...</div>; }
  if (error) { return <div className="quote">Error</div>; }

  return (
    <div className="quote">
      <p>{quote}</p>
    </div>
  );
}

export default Quote;
