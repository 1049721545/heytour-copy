import React from "react";
import { Grid, Image, Card } from "semantic-ui-react";
import { companyData } from "../data.json";

function JobDetail() {
  return (
    <Grid padded={"vertically"}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Card fluid>
            <Card.Content>
              <Card.Header>Matthew Harris</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
          <Card fluid>
            <Card.Content>
              <Card.Header>Jake Smith</Card.Header>
              <Card.Meta>Musicians</Card.Meta>
              <Card.Description>
                Jake is a drummer living in New York.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default JobDetail;
