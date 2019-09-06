import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import ProjectCard from './ProjectCard.js'

const StyledContainer = styled.div`
  height: 100vh;
  padding-top: 5vh;
  width: 100vw;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
`

const ProjectsContainer = styled.div`
  height: 100%;
  padding-top: 5%;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
`

const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState(null)
  console.log(projectsData)

  useEffect(() => {
    axios.get('http://localhost:4567/api/projects')
      .then(result => {
        console.log(result)
        setProjectsData(result.data.projects)
      })
      .catch(error => {
        console.log('axios get projects data error: ', error)
      })
  }, [])
  return (
      <StyledContainer>
        <h1>WEBAPI-CHALLENGE Project List</h1>
        <ProjectsContainer>
          {projectsData ? projectsData.map(project => (
            <ProjectCard 
              key={project.id} 
              name={project.name} 
              description={project.description} 
              completed={project.completed} 
            /> )) : ''
          }
        </ProjectsContainer>
      </StyledContainer>
  )
}

export default ProjectsList