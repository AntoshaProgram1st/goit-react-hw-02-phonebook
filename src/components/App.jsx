import React, { useState } from 'react';
import { Section } from './Section'
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? (good * 100) / total : 0;

  return (
    <div>
      <Section>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistic">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage.toFixed(2)}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
