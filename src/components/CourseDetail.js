import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseDetail = ({ match }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`/api/courses/${match.params.id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => console.error('Error fetching course details:', error));
  }, [match.params.id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <a href={`/video/${course.videoId}`}>Watch Video</a>
    </div>
  );
};

export default CourseDetail;
