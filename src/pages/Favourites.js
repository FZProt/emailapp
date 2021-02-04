import React from "react";
import SearchField from "react-search-field";
import {mailcard} from "../components/MailCard";
import maildetails from "../components/MailDetails";
import SplitPane from "react-split-pane";
import mailcardlist from "../components/mailcardlist";

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
        <SplitPane split="vertical" minSize={50} defaultSize={100}>
          <div>
            <mailcardlist/>
          </div>
          <div>
            hi
          </div>
        </SplitPane>
      </div>
    </div>
  );
}

export default Home;
