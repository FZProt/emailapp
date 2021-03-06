import React from "react";
import SearchField from "react-search-field";
import {mailcard} from "../components/MailCard";
import maildetails from "../components/MailDetails";
import SplitPane from "react-split-pane";
import mailcardlist from "../components/mailcardlist";
import logo from '../images/Image.png';
import { Card, Feed } from 'semantic-ui-react'

function Home() {
  return (
    <div>
      <div>
        <div className="search">
          <SearchField
            placeholder="Search..."
            searchText="search mail"
            classNames="test-class"
          />
        </div>
        
        <div>
            <mailcard />
          </div>
          <div>
            <maildetails />
          </div>
      </div>

      <div>
        <SplitPane split="vertical" minSize={150} defaultSize={200}>
        <div>
          
          <Card>
    <Card.Content>
      <Card.Header>All messages</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='../images/Image.png' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              Last Chance to start
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='../images/Image.png' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              Last Chance to start
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='../images/Image.png' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              Last Chance to start
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
        </div>
          <div>
            Details
          </div>
        </SplitPane>
      </div>
    </div>
  );
}

export default Home;
