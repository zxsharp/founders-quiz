import { useState } from 'react';
import { founderProfiles, quizData } from './data/quizData';
import './App.css';
import { Analytics } from "@vercel/analytics/react"

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [questions, setQuestions] = useState(() => 
    quizData.map(q => ({
      ...q,
      options: shuffleArray([...q.options])
    }))
  );
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(false);

  const handleOptionSelect = (questionName, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionName]: optionIndex
    }));
  };

  const calculateResults = () => {
    const founderScores = { EM: 0, MZ: 0, BG: 0, SJ: 0, JB: 0, SA: 0, GF: 0 };
    let totalPointsAwarded = 0;

    Object.entries(answers).forEach(([questionName, optionIndex]) => {
      const question = questions.find(q => q.name === questionName);
      const chosenOption = question.options[optionIndex];
      
      chosenOption.founders.forEach(founderKey => {
        if (founderKey in founderScores) {
          founderScores[founderKey]++;
          totalPointsAwarded++;
        }
      });
    });

    const sortedFounders = Object.entries(founderScores)
      .sort(([,a], [,b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    const topFounder = Object.keys(sortedFounders)[0];

    return { founderScores: sortedFounders, totalPoints: totalPointsAwarded, topFounder };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length < questions.length) {
      setError(true);
      setShowResults(false);
      return;
    }
    setError(false);
    setShowResults(true);
    // Add this line to scroll to top when showing results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { founderScores, totalPoints, topFounder } = showResults ? calculateResults() : {};

  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          <h1>Which Tech Founder's Mindset Matches Yours?</h1>
          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div key={question.name} className="question-card">
                <p className="question-text">{index + 1}. {question.question}</p>
                {question.options.map((option, optIndex) => (
                  <label key={optIndex} className="option-label">
                    <input
                      type="radio"
                      name={question.name}
                      checked={answers[question.name] === optIndex}
                      onChange={() => handleOptionSelect(question.name, optIndex)}
                    />
                    {option.text}
                  </label>
                ))}
              </div>
            ))}
            <button type="submit" className="submit-button">See Your Results</button>
          </form>

          {error && (
            <div className="error-message">
              Please answer all questions before submitting.
            </div>
          )}
        </>
      ) : (
        <div className="results-page">
          <h1 className="results-header">Your Results</h1>
          <div className="results-container">
            <h2 className="primary-match">Your thinking most closely aligns with: {founderProfiles[topFounder].name}!</h2>
            <p className="match-description">{founderProfiles[topFounder].description}</p>

            <div className="percentage-results">
              {Object.entries(founderScores).map(([founderKey, score]) => {
                const percentage = ((score / totalPoints) * 100).toFixed(1);
                return (
                  <div key={founderKey} className="percentage-item">
                    <span className="font-medium">{founderProfiles[founderKey].name}:</span>
                    {percentage}% ({score} points)
                    <div className="percentage-bar-bg">
                      <div 
                        className="percentage-bar" 
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <button 
              onClick={() => {
                setShowResults(false);
                setAnswers({});
                setError(false);
              }}
              className="retry-button"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      )}
      <Analytics />
    </div>
  );
}

export default App;
