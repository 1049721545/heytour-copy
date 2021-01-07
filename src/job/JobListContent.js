import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export default function JobListContent(props) {
  return (
    <Card.Group itemsPerRow={2}>
      <Card>
        <Image src={props.job.picture} wrapped ui={false} />

        <Card.Content extra textAlign="left">
          <a>
            Status:{" "}
            {props.job.isActive ? (
              <Icon name="circle check" color="green">
                <a>Active</a>
              </Icon>
            ) : (
              <Icon name="times circle" color="red">
                <a>Expired</a>
              </Icon>
            )}
          </a>
          <br />
          <a>Posted On: {props.job.postedOn}</a>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Card.Header>
            {props.job.industry} - {props.job.title}
          </Card.Header>
          <Card.Meta>{props.job.company}</Card.Meta>
          <Card.Meta>{props.job.location}</Card.Meta>
          <Card.Description>{props.job.jobDesc}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div className="ui two buttons">
            <Button color="green">
              <Icon name="edit" /> Edit
            </Button>
            <Button color="red">
              <Icon name="remove circle" /> Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
