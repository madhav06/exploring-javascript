/*
To remove the duplicate happening and execute the render() whether the promise is fulfilled or rejected, 
we use the finally() method, like this:
*/


const render = () => {
    //...
  };
  
  getUsers()
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      render();
    });
  