// Add your code here
function submitData(name, email) {
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name, email})
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        document.body.innerHTML += newId;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }
  
  