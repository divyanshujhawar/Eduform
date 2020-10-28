

var UserProfile = (function() {
    var firstName = "";
    var lastName = "";
    var email = "";
    var role = "";
    var phone = "";



    var getEmail = function() {
      return email;    // Or pull this from cookie/localStorage
    };
  
    var setUserProfile = function(userProfile) {
        email = userProfile.email;
      // Also set this in cookie/localStorage
    };
  
    return {
      getEmail: getEmail,
      setUserProfile: setUserProfile
    }
  
  })();
  
  export default UserProfile;