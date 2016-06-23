angular.module("fotoChallenge")
  .controller("fotoHomeController",fotoHomeController);
  
    fotoHomeController.$inject = ["fotoFactory"];
  function fotoHomeController(fotoFactory){
    var fotoHome = this;
    console.log("fotoHomeController");

    fotoFactory.currentTitle = "Foto Wars";
    fotoHome.carousel = fotoFactory.fotoCarousel;
    fotoHome.carouselInterval = 3000;
    fotoHome.loggedIn = fotoFactory.loggedIn;
    fotoHome.showNewUserForm = false;
    fotoHome.showContestInfoForm = false;
    // build carousel based on current vote count and current images
    fotoFactory.fotoCarousel.setCarouselFotos();
    
    fotoHome.showForm = function() {
      //console.log("show new user form");
      fotoHome.showNewUserForm = true;
    };
    
    fotoHome.showInfoForm = function() {
      //console.log("show contest info form");
      fotoHome.showContestInfoForm = true;
    };    
    
    fotoHome.createNewUser = function(){
      //hide input form
      //process the submitted info to create a new foto user
      //add new user to fotoUsersList
      fotoHome.showNewUserForm = false;
      // check for duplicate user name
      if(fotoFactory.fotoUsers.hasOwnProperty(fotoHome.newUserName)) {
        //this user already exists
        //console.log("create new user duplicate name");
        alert("Duplicate user name, use a different name");
        return;
      }

      var newUser = new fotoFactory.FotoUser(fotoHome.newUserName, fotoHome.newUserPassword, fotoHome.newUserEmail, fotoHome.newUserPhone);
      fotoFactory.fotoUsers[fotoHome.newUserName] = newUser;
      fotoFactory.currentUser = newUser;
      fotoFactory.loggedIn = true;
      fotoHome.loggedIn = true;
      
    };
    
    fotoHome.cancelNewUser = function() {
      fotoHome.showNewUserForm = false;
    };
    
    fotoHome.closeInfoForm = function() {
      fotoHome.showContestInfoForm = false;
    };    
  }