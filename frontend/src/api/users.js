 

const getUserData = async (req, res, next) => {
   let usersData =await  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data,"usersData")
        return data
      })
      return usersData
 };

module.exports = {getUserData};

