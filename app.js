  users
      = [{
              name: 'Lucy',
              Gender: 'F',
              hobby: 'Sports',
              a: 'a.jpg '
          },

          {
              name: 'Betty',
              Gender: 'F',
              hobby: 'Music',
              b: 'b.jpg '
          },
          {
              name: 'Emma',
              Gender: 'M',
              hobby: 'Dance',
              c: 'c.jfif '

          }
      ]



  window.addEventListener('load', function() {

      var results = document.getElementById('results')

      function search() {

          //hobby 
          var hobbyField = document.getElementById('hobby');
          var hobby = hobbyField.value;

          console.log(hobby)

          // gender 
          var genderField = document.getElementById('Gender');
          var s = genderField.selectedIndex;
          var Gender = genderField.options[s].value;
          console.log(Gender);


          var resultsHtml = '';
          var usersLength = users.Length;

          for (var i = 0; i < usersLength; i++) {

              resultsHtml += '' + users[i].name;
          }

          results.innerHTML = resultsHtml;
      }
      var searchBtn = document.getElementById('searchBtn');


      searchBtn.addEventListener('click', search);
  });