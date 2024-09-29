import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <a href={`/course/${course._id}`}>{course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
