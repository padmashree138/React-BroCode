// propTypes = a mechanism which ensures that 
//       passes value is of correct datatype
//     eg:- age: PropTypes.number

// defaultProps = default values for props incase they
//          are not passed from parent component
//     eg:- name: "Guest"

import PropTypes from 'prop-types'

function Student(props){
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
   name: "Guest",
   age: 0,
   isStudent: false,
}
export default Student