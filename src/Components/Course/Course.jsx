import PropTypes from 'prop-types';

const Course = ({ course, indx }) => {
    const { course_title } = course;
    return (
        <div>
            <div>
                <h3 className='text-4 font-normal text-[#1C1B1B99] mb-2'>{++indx} {course_title}</h3>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    indx: PropTypes.number.isRequired
};

export default Course;