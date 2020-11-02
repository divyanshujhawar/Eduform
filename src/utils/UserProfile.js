

var UserProfile = (function () {
    var firstName = "";
    var lastName = "";
    var email = "";
    var role = "";
    var phoneNumber = "";



    var getEmail = function () {
        return email;    // Or pull this from cookie/localStorage
    };

    var getRole = function () {
        return role;
    }

    var setUserProfile = function (userProfile) {
        email = userProfile.email;
        firstName = userProfile.firstName;
        lastName = userProfile.lastName;
        phoneNumber = userProfile.phoneNumber;
        role = userProfile.role;
        // Also set this in cookie/localStorage
    };

    var setEmail = function (userProfile) {
        email = userProfile.email;
        firstName = '';
        lastName = '';
        role = '';
        phoneNumber = '';

    }

    return {
        getEmail: getEmail,
        getRole: getRole,
        setUserProfile: setUserProfile,
        setEmail: setEmail
    }

})();

export default UserProfile;