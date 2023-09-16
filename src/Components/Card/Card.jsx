import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Card = ({ card, handleAddCourse }) => {
    const { cover, course_title, course_details, price, credit } = card;
    return (
        <div className='p-4 bg-slate-50 rounded-xl w-[312px]'>
            <img className='h-[144px]' src={cover} alt={`cover picture of ${course_title}`} />
            <h2 className='mt-4 mb-2 text-lg font-semibold'>{course_title}</h2>
            <p className='mb-4 text-sm text-justify text-[#1C1B1B99] font-normal'>{course_details}</p>
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <FaDollarSign className='h-6 w-6'></FaDollarSign>
                    <p className='text-base text-[#1C1B1B99] font-medium'>Price: {price}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <FaBookOpen className='h-6 w-6'></FaBookOpen>
                    <p className='text-base text-[#1C1B1B99] font-medium'>Credit: {credit} hr</p>
                </div>
            </div>
            <div onClick={() => handleAddCourse(card)} className='bg-[#2F80ED] rounded-lg py-2 text-center text-white text-base font-semibold mt-6'>
                <button>Select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddCourse: PropTypes.func.isRequired
}

export default Card;