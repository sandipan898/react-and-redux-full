import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  // debugger;
  return { type: types.CREATE_COURSE, course };
}

// as this action will only fire if all the courses are successfully fetched.
// So it indicates the success of the API call. For that it is meaningful to suffix it with 'succrss.'
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
