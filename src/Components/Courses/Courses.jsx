import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Courses = ({courses}) => {
    return (
        <div>
            <div className="bg-slate-50 p-6">
                <h3 className="text-[#2F80ED] text-lg font-bold mb-4">Credit Hour Remaining {courses.length}</h3>
                <hr />
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-5">Course Name</h2>
                    {
                        courses.map((course, indx) => <Course key={indx} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

Courses.propTypes ={
    courses: PropTypes.array.isRequired
}

export default Courses;