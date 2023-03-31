import React from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

    if (courses.length === 0) {
      loadCourses().catch((err) => {
        alert("Loading courses failed " + err);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((err) => {
        alert("Loading authors failed " + err);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course Page</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

// import PropTypes from "prop-types";
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as courseActions from "../../redux/actions/courseActions";
// import * as authorActions from "../../redux/actions/authorActions";

// export function ManageCoursePage(props) {
//   const { courses, authors, actions } = props;

//   const loadCourses = () => {
//     if (courses.length === 0) {
//       actions.loadCourses().catch((err) => {
//         alert(`Loading courses failed ${err}`);
//       });
//     }
//   };

//   const loadAuthors = () => {
//     if (authors.length === 0) {
//       actions.loadAuthors().catch((err) => {
//         alert(`Loading authors failed ${err}`);
//       });
//     }
//   };

//   //   useEffect(() => {
//   //     loadCourses();
//   //     loadAuthors();
//   //   });

//   return <h2>Manage Course</h2>;
// }

// ManageCoursePage.propTypes = {
//   courses: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired,
//   authors: PropTypes.array.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     courses: state.courses,
//     authors: state.authors,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//       loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
