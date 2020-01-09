import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

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
    // debugger;
    // if we omit mapDispatchToProps, the component gets a dispatch prop injected automatically
    // you have to dispatch an Action
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title} />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

// this resolves the expectation of dispatch on props
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  // dispatch: PropTypes.func.isRequired
};

// this func decides what state is passed to our componnet via props
function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    courses: state.courses
  };
}

// mapDispatchToProps declare what actions to pass to our component via props
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);

// or an one-liner connect(mapStateToProps, mapDispatchToProps)(CoursesPage), a call returns a call that takes CoursesPage as param
