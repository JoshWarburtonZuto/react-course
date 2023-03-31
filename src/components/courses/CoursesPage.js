import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const CoursesPage = ({ courses, authors, actions, loading }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses().catch((err) => {
        alert("Loading courses failed " + err);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((err) => {
        alert("Loading authors failed " + err);
      });
    }
  }, []);

  const handleDeleteCourse = (course) => {
    toast.success("Course Deleted");
    debugger;
    actions.deleteCourse(course).catch((error) => {
      toast.error(`Delete failed - ${error.message}`, { autoClose: false });
    });
  };

  return (
    <>
      {redirect && <Redirect to="/course" />}
      <h2>Courses</h2>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => setRedirect(true)}
          >
            Add Course
          </button>
          <CourseList onDeleteClick={handleDeleteCourse} courses={courses} />
        </>
      )}
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
