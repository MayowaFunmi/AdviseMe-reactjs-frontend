class Config{
    static loginUrl='http://127.0.0.1:8000/api/token/';
    static homeUrl = '/home';
    static logoutPageUrl = "/logout";
    static signupUrl = '/signup';

    static sidebarItem = [
        { index: '0', title: "Home", url: '/', icons: 'home' },
        { index: '1', title: "Register Courses", url: '/add_courses', icons: 'assessment' },
        { index: '2', title: "All Courses", url: '/list_all_courses', icons: 'assessment' },
        { index: '3', title: "Student Profile", url: '/student_profile', icons: 'assessment' },
    ]
}

export default Config