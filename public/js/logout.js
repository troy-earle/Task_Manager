// Logout function
const logout = async () => {
  try {
    // Send a POST request to the API endpoint using Axios
    const response = await axios.post("/api/users/logout", {});

    if (response.status === 200) {
      // If successful, redirect the browser to the home page
      document.location.replace("/");
    } else {
      alert("Logout failed.");
    }
  } catch (error) {
    // Handle any errors here
    console.error(error);
    console.log(error);
    alert("An error occurred during logout");
  }
};

// Attach event listener to the logout button
document.querySelector("#logout").addEventListener("click", logout);
