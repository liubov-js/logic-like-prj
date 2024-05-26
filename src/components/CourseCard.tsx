import { FC } from 'react';
import { ICourse } from '../types/types';

interface CourseCardProps {
  course: ICourse,
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  return (
    <div className='course-card'>
      <div className='course-card__img-container' style={{ background: course.bgColor }}>
        <img className='course-card__image' src={course.image} alt={course.name} />
      </div>
      <div className='course-card__text'>{course.name}</div>
    </div>
  );
}

export default CourseCard;
