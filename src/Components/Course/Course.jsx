import PropTypes from 'prop-types';

const Course = ({course}) => {
    let count = 0;
    const {course_title} = course;
    return (
        <div>
            <h3 className='text-4 font-normal text-[#1C1B1B99] mb-2'>{count} {course_title}</h3>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
};

export default Course;