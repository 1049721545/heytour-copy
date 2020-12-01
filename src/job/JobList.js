import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import data from "../data/data.json";

function JobList() {
  const status = "";
  const getData = data.map((data) => {
    switch (data.isActive) {
      case "true":
        status = "Active";
        break;
      case "false":
        status = "Not Active";
        break;
    }

    return (
      <Card key={data.id} fluid>
        <Card.Content textAlign="left">
          <Card.Header>
            <Image src={data.picture} size="mini" /> {data.title} -{" "}
            {data.company} ({status})
          </Card.Header>
        </Card.Content>
        <Card.Content textAlign="left">
          <Card.Meta>{data.location}</Card.Meta>
          <Card.Meta>{data.industry}</Card.Meta>
          <Card.Meta>{data.email}</Card.Meta>
          <Card.Meta>{data.postedOn}</Card.Meta>
          <Card.Description>{data.jobDesc}</Card.Description>
          <Button icon="star" floated="right" content="Save" />
          <Button icon="thumbs down" floated="right" content="Not Interested" />
        </Card.Content>
      </Card>
    );
  });
  return <Card.Group>{getData}</Card.Group>;
}

export default JobList;
