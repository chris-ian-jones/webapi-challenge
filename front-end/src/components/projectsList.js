import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4567/api/projects')
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log('axios get projects data error: ', error)
      })
  }, [])
  return (
    <p>placeholder projects list</p>
  )
}

export default ProjectsList