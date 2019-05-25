$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
      data = data.results[0];
    console.log(data);
      
      document.getElementById("picture").src = data.picture.large;
      
      document.getElementById("name").innerHTML = data.name.first;
      document.getElementById("location").innerHTML = data.location.state;
      document.getElementById("age").innerHTML = data.dob.age;
      document.getElementById("email").innerHTML = data.email;
      document.getElementById("phone").innerHTML = data.phone;
  }
});