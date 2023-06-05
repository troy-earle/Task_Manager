const logout = async () => {
  try {
    const response = await axios.post("/api/users/logout", {});

    if (response.status === 200) {
      document.location.replace("/");
    } else {
      alert("Logout failed.");
    }
  } catch (error) {
    console.error(error);
    console.log(error);
    alert("An error occurred during logout");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
