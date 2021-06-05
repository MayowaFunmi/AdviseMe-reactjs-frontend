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

    async fetchAllUsers() {
        await this.checkLogin();
        var response = await Axios.get(Config.listAllUsersUrl, {
            headers: { Authorization: 'JWT ' + AuthHandler.getLoginToken()}
        })
        return response;
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

    async saveStudentProfile(user, middle_name, course, student_level, birthday, gender, address, phone_number, country, profile_picture) {
        await this.checkLogin();

        // wait until token get updated
        var form_data = new FormData();
        form_data.append('user', AuthHandler.getUsername());
        form_data.append('middle_name', middle_name);
        form_data.append('course', course);
        form_data.append('student_level', student_level);
        form_data.append('birthday', birthday);
        form_data.append('gender', gender);
        form_data.append('address', address);
        form_data.append('phone_number', phone_number);
        form_data.append('country', country);
        form_data.append('profile_picture', profile_picture);

        var response = await Axios.post(Config.studentProfileUrl, form_data, {
            headers: {
                Authorization: 'JWT ' + AuthHandler.getLoginToken(),
                "Content-Type": "multipart/form-data",
            },
        });

        return response;
    }
    
}


export default ApiHandler