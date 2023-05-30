module.exports = {
    format_date: (date) => {
        // Format the date object as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    
    format_amount: (amount) => {
        // Format a large number with commas for better readability
        return parseInt(amount).toLocaleString();
    },
    get_emoji: (priority) => {
        let emoji;
      
        // Determine the appropriate emoji based on the priority level
        if (priority === 1 ) {
            // Use a fire emoji for high priority
            emoji = `<span for="img" aria-label="High Priority">🔥</span>`;
        } else if (priority === 2) {
            // Use a lightning emoji for medium priority
            emoji = `<span for="img" aria-label="Medium Priority">⚡️</span>`;
        } else {
            // Use a star emoji for low priority
            emoji = `<span for="img" aria-label="Low Priority">🌟</span>`;
        }
        return emoji;
    },
  };
  