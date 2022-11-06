import React from 'react'
import {  useParams } from 'react-router-dom'

const ProjectView = () => {
    const {projectId} = useParams();
  return (
    <div>
      ProjectView, {projectId}
    </div>
  );
}

export default ProjectView