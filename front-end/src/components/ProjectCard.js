import React from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const ProjectCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          {props.completed}
        </a>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard