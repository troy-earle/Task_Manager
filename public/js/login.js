const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try {
      // Send a POST request to the API endpoint using Axios
      const response = await axios.post('/api/users/login', {
        email, 
        password,
      });

      if (response.status === 200) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/api/tasks');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      // Handle any errors here
      console.error(error);
      alert('An error occurred during login');
    }
  }
};

  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
     try { 
      const response = await axios.post('/api/users', {
        name, 
        email, 
        password,
      });
  
      if (response.status === 200) {
        document.location.replace('/api/tasks');
      } else {
        alert('Sign up failed');
      } 
    }catch (error) {
        // Handle any errors here
        console.error(error);
        alert('An error occurred during login');
      }

    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  