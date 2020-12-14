

var CourseProfile = (function () {
    
    var courseProfile = []


    var getCourseProfile = function () {
        return courseProfile;    // Or pull this from cookie/localStorage
    };

    var setCourseProfile = function (courseData) {
        courseProfile = courseData
    };

    return {
        getCourseProfile: getCourseProfile,
        setCourseProfile: setCourseProfile
    }

})();

export default CourseProfile;