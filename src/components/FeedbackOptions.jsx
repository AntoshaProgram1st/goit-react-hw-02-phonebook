export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
};
