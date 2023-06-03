module.exports = {
  format_date: (date) => {
    // Format the date object as YYYY-MM-DD
    return date.toISOString().split("T")[0];
  },
  format_date_display: (date) => {
    // Format the date object as YYYY-MM-DD
    const formattedDate = date.toLocaleString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return formattedDate;
  },
};
