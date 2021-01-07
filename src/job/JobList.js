import React from "react";
import { Card, Input, Segment } from "semantic-ui-react";
import { useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";

export default function JobList() {
  const [jobList, setJobListFilter] = useJobList(null);

  return (
    <div>
      <Segment basic>
        <Input
          action={{ color: "primary", content: "Search" }}
          icon="search"
          fluid
          iconPosition="left"
          placeholder="Enter title to search"
        />
      </Segment>

      <Card.Group>
        {jobList.data &&
          jobList.data.map((job) => (
            <JobListContent
              key={job.id}
              isLoading={jobList.isLoading}
              job={job}
            />
          ))}
      </Card.Group>
    </div>
  );
}
