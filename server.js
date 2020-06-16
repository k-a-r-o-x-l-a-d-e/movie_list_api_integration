"use strict";
window.onload = function () {
  getAllUsers("waterworld");
}
var numOfPage='';
var title=[];
function getAllUsers(substring){

  fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substring}`)
  .then(response =>{
       return response.json()
      })
  .then(movies => {
    
          var movieList= movies.data;
          numOfPage= movies.total_pages;
      
          for(let i=0;i<movieList.length; i++){
            title.push(movieList[i].Title);

            } 

                    



      for(var i=2; i<=numOfPage; i++){

        

        fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substring}&page=i`)
        .then(response =>{
            return response.json()
            })
        .then(movies => {
        
          var movieList= movies.data;
          var numOfPage= movies.total_pages;
      
          for(let i=0;i<movieList.length; i++){
            title.push(movieList[i].Title);

            }
                  console.log(title);  
                  console.log(numOfPage);  

                    
        })

        
        }  
  })
}














































































 
