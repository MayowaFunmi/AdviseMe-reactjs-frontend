class Config{
    static loginUrl='http://127.0.0.1:8000/api/token/';
    static homeUrl = '/home';
    static logoutPageUrl = "/logout";

    static sidebarItem = [
        { index: '0', title: "Home", url: '/', icons: 'home' },
        { index: '1', title: "Register Courses", url: '/add_courses', icons: 'assessment' },
    ]
}

export default Config