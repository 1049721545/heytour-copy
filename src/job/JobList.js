import React from "react";
import { Card, Image, Button, Grid, Icon } from "semantic-ui-react";
import data from "../data/data.json";

export default function JobList() {
  const getData = data.map((data) => {
    return (
      <Grid.Row>
        <Grid.Column>
          <Card key={data.id} fluid>
            <Card.Content textAlign="left">
              <Card.Header>
                {data.title} - {data.company}
              </Card.Header>
            </Card.Content>
            <Card.Content textAlign="left">
              <Card.Meta>
                Status:{" "}
                {data.isActive ? (
                  <Icon name="circle check" color="green">
                    Active
                  </Icon>
                ) : (
                  <Icon name="times circle" color="red">
                    Expired
                  </Icon>
                )}
              </Card.Meta>
              <Card.Meta>Industry: {data.industry}</Card.Meta>
              <Card.Meta>Location: {data.location}</Card.Meta>
              <Card.Meta>Email: {data.email}</Card.Meta>
              <Card.Meta>Post Date: {data.postedOn}</Card.Meta>
              <Image src={data.picture} size="small" floated="right" />
            </Card.Content>
            <Card.Content textAlign="left">
              <Card.Description>Description: </Card.Description>
              <Card.Description>{data.jobDesc}</Card.Description>
              <Button
                icon="plus"
                floated="right"
                content="Apply"
                color="green"
              />
              <Button icon="star" floated="right" content="Save" />
              <Button
                icon="thumbs down"
                floated="right"
                content="Not Interested"
                color="red"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    );
  });

  return (
    <Grid fluid padded>
      {getData}
    </Grid>
  );
}
