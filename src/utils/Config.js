class Config{
    static loginUrl='http://127.0.0.1:8000/api/token/';
    static homeUrl = '/home';
    static logoutPageUrl = "/logout";
    static registerUrl = 'http://127.0.0.1:8000/users/register/';
    static signupUrl = '/signup';
    static createCourseUrl = 'http://127.0.0.1:8000/users/create_course/';
    static listAllCoursesUrl = 'http://127.0.0.1:8000/users/all_course_list';
    static listAllUsersUrl = 'http://127.0.0.1:8000/users/list_users';
    static studentProfileUrl = 'http://127.0.0.1:8000/users/create_student_profile/';
    static councillorProfileUrl = 'http://127.0.0.1:8000/users/create_councillor_profile/';
    static listAllStudentsProfileUrl = 'http://127.0.0.1:8000/users/list_all_student/';

    static sidebarItemStudent = [
        { index: '0', title: "Home", url: '/', icons: 'home' },
        //{ index: '2', title: "All Courses", url: '/list_all_courses', icons: 'bookmark' },
        { index: '3', title: "Student Profile", url: '/student_profile', icons: 'perm_identity' },
        { index: '5', title: "Student Course Reg", url: '/student_course_reg', icons: 'perm_identity' },
    ]

    static sidebarItemCouncillor = [
        { index: '0', title: "Home", url: '/', icons: 'home' },
        { index: '4', title: "Councillor Profile", url: '/councillor_profile', icons: 'perm_identity' },
    ]

    static sidebarItemAdmin = [
        { index: '0', title: "Home", url: '/', icons: 'home' },
        { index: '1', title: "Register Courses", url: '/add_courses', icons: 'assessment' },
    ]

}

export default Config