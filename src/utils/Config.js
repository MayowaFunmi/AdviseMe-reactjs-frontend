class Config{
    static loginUrl='http://127.0.0.1:8000/api/token/';
    static homeUrl = '/home';
    static logoutPageUrl = "/logout";
    static signupUrl = '/signup';
    static createCourseUrl = 'http://127.0.0.1:8000/users/create_course/';
    static listAllCoursesUrl = 'http://127.0.0.1:8000/users/all_course_list';
    static listAllUsersUrl = 'http://127.0.0.1:8000/users/list_users';
    static studentProfileUrl = 'http://127.0.0.1:8000/users/create_student_profile/';
    static councillorProfileUrl = 'http://127.0.0.1:8000/users/create_councillor_profile/';

    static sidebarItem = [
        { index: '0', title: "Home", url: '/', icons: 'home' },
        { index: '1', title: "Register Courses", url: '/add_courses', icons: 'assessment' },
        //{ index: '2', title: "All Courses", url: '/list_all_courses', icons: 'bookmark' },
        { index: '3', title: "Student Profile", url: '/student_profile', icons: 'perm_identity' },
        { index: '4', title: "Councillor Profile", url: '/councillor_profile', icons: 'perm_identity' },
    ]
}

export default Config