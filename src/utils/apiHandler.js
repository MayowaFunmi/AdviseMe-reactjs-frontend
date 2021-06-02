import { reactLocalStorage } from "reactjs-localstorage";

const { default: AuthHandler } = require("./AuthHandler");
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");


class ApiHandler {
    async checkLogin() {
        if (AuthHandler.checkTokenExpiry()) {
            try {
                var response = await Axios.post(Config.refreshApiUrl, {
                  refresh: AuthHandler.getRefreshToken(),
                });
    
                reactLocalStorage.set("token", response.data.access);
            } catch (error) {
                console.log(error);
    
                //Not Using Valid Token for Refresh then Logout the User
                AuthHandler.logoutUser();
                window.location = "/";
            }
        }
    }

    async saveCourses(semester, course_code, course_name, course_type, course_unit, minimum_credit, maximum_credit) {
        await this.checkLogin();
        var response = await Axios.post(
            Config.createCourseUrl, {
                semester: semester,
                course_code: course_code,
                course_name: course_name,
                course_type: course_type,
                course_unit: course_unit,
                minimum_credit: minimum_credit,
                maximum_credit: maximum_credit,
            },
            { headers: { Authorization: "JWT " + AuthHandler.getLoginToken()}}
        );
        return response
    }

    async fetchAllCourses() {
        await this.checkLogin();

        var response = await Axios.get(
            Config.listAllCoursesUrl, {
                headers: { Authorization: 'JWT ' + AuthHandler.getLoginToken()}
            }
        );
        return response
    }
    
}


export default ApiHandler