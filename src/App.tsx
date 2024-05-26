import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import CourseList from './components/CourseList';
import { ICourse } from './types/types';
import TagList from './components/TagList';
import { ALL_THEMES } from './constants';
import './style/style.scss';

function App() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState(ALL_THEMES);

  useEffect(() => {
    fetchCourses();
  }, []);

  const filteredCourses: ICourse[] = useMemo(() => {
    if (selectedTag === ALL_THEMES) {
      return courses;
    }
    return [...courses].filter(course => course.tags.includes(selectedTag));
  }, [selectedTag, courses]);

  async function fetchCourses() {
    try {
      const response = await axios.get<ICourse[]>('https://logiclike.com/docs/courses.json');
      setCourses(response.data);
      const tagsSet = new Set<string>([]);
      tagsSet.add(ALL_THEMES);
      response.data.map(course => course.tags.map(tag => {
        tagsSet.add(tag);
      }));
      setTags(Array.from(tagsSet));
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <TagList tags={tags} selectedTag={selectedTag} onClick={tag => setSelectedTag(tag)} />
      <CourseList courses={filteredCourses} />
    </div>
  );
}

export default App;
