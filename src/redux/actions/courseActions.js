// action object: {type: "type", payload Object}
// only type is required
// this function is called Action Creator
import actionTypes from './actionTypes';
export function createCourse(course) {
  // debugger;
  return { type: actionTypes.CREATE_COURSE, course: course };
}
