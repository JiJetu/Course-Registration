import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Courses = ({ courses, totalCredit, remainingCredit, totalPrice }) => {
    return (
        <div>
            <div className="bg-slate-50 p-6 md:sticky md:top-0">
                <h3 className="text-[#2F80ED] text-lg font-bold mb-4">Credit Hour Remaining: {remainingCredit}hr</h3>
                <hr />
                <div className="my-4">
                    <h2 className="text-xl font-bold mb-5">Course Name</h2>
                    {
                        courses.map((course, indx) => <Course key={indx} indx={indx} totalCredit={totalCredit} course={course}></Course>)
                    }
                </div>
                <hr />
                <div className="mt-4">
                    <h3 className='text-4 font-normal text-[#1C1B1B99] mb-2'>Total Credit Hour: {totalCredit}</h3>
                </div>
                <hr />
                <div className="mt-4">
                    <h3 className='text-4 font-normal text-[#1C1B1B99] mb-2'>Total Price : {totalPrice} USD</h3>
                </div>
            </div>
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default Courses;