module.exports = {
    format_date: (date) => {
        // Format the date object as YYYY-MM-DD
        return date.toISOString().split('T')[0];
    },
}
    
    


  