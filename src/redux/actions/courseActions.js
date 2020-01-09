// action object: {type: "type", payload Object}
// this function is call Action Creator
export function createCourse(course) {
  return { type: 'CREATE_COURSE', course: course };
}
