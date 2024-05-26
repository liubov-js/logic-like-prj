import { FC } from 'react';
import { ICourse } from '../types/types';
import CourseCard from './CourseCard';

interface CourseListProps {
  courses: ICourse[],
}

const CourseList: FC<CourseListProps> = ({ courses }) => {
  return (
    <div className='course-list'>
      {courses.map(course => 
        <CourseCard key={course.id} course={course} />
      )}
    </div>
  );
}

export default CourseList;
