import React from 'react';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ''
      }
    };
  }

  // error functions inherit the binding context of their enclosing scope
  // in arrow functions, this keyword references the Class instance
  handleChange = event => {
    // use object spread to copy the course object, then replace title property with the new input value
    // object spread is shallow copy, it cannot copy inner objects
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title} />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
