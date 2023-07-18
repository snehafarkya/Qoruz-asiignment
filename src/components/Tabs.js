import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useTabs([
    "account",
    "company",
    "team",
    "billing",
  ]);

  return (
    <>
      <nav className="tabspan">
        <TabSelector
          isActive={selectedTab === "account"}
          onClick={() => setSelectedTab("account")}
          className="btns "
        >
          Reason 1
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "company"}
          onClick={() => setSelectedTab("company")}
        >
          Reason 2
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "team"}
          onClick={() => setSelectedTab("team")}
        >
          Reason 3
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "billing"}
          onClick={() => setSelectedTab("billing")}
        >
         Reason 4
        </TabSelector>
      </nav>
      <div className="tab-desc">
        <TabPanel hidden={selectedTab !== "account"}>
          <p className="tab-heading">Discoverability</p>
          <p>Qoruz's diverse influencer database, unlike Grin, makes it easier for brands to find influencers who meet their unique needs in terms of size (nano, micro, macro, mega, celebrity) and creator categories.</p>
          <button className="primary-btn">Discover our influencers <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M18.6933 7.1C18.6933 7 18.5867 6.9 18.48 6.8C18.3733 6.7 18.2667 6.6 18.16 6.6C18.0533 6.5 17.84 6.5 17.7333 6.5H8.13333C7.49333 6.5 7.06667 6.9 7.06667 7.5C7.06667 8.1 7.49333 8.5 8.13333 8.5H15.1733L6.32 16.8C5.89333 17.2 5.89333 17.8 6.32 18.2C6.53333 18.4 6.74667 18.5 7.06667 18.5C7.38667 18.5 7.6 18.4 7.81333 18.2L16.6667 9.9V16.5C16.6667 17.1 17.0933 17.5 17.7333 17.5C18.3733 17.5 18.8 17.1 18.8 16.5V7.5C18.8 7.4 18.8 7.2 18.6933 7.1Z" fill="white"/>
          </svg></button>
          </TabPanel>
        <TabPanel hidden={selectedTab !== "company"}>
        <p className="tab-heading">Discoverability</p>
          <p>Qoruz's diverse influencer database, unlike Grin, makes it easier for brands to find influencers who meet their unique needs in terms of size (nano, micro, macro, mega, celebrity) and creator categories.</p>
          <button className="primary-btn">Discover our influencers
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M18.6933 7.1C18.6933 7 18.5867 6.9 18.48 6.8C18.3733 6.7 18.2667 6.6 18.16 6.6C18.0533 6.5 17.84 6.5 17.7333 6.5H8.13333C7.49333 6.5 7.06667 6.9 7.06667 7.5C7.06667 8.1 7.49333 8.5 8.13333 8.5H15.1733L6.32 16.8C5.89333 17.2 5.89333 17.8 6.32 18.2C6.53333 18.4 6.74667 18.5 7.06667 18.5C7.38667 18.5 7.6 18.4 7.81333 18.2L16.6667 9.9V16.5C16.6667 17.1 17.0933 17.5 17.7333 17.5C18.3733 17.5 18.8 17.1 18.8 16.5V7.5C18.8 7.4 18.8 7.2 18.6933 7.1Z" fill="white"/>
          </svg>
          </button>
          </TabPanel>
        <TabPanel hidden={selectedTab !== "team"}>
        <p className="tab-heading">Discoverability</p>
        <p>Qoruz's diverse influencer database, unlike Grin, makes it easier for brands to find influencers who meet their unique needs in terms of size (nano, micro, macro, mega, celebrity) and creator categories.</p>
          <button className="primary-btn">Discover our influencers
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M18.6933 7.1C18.6933 7 18.5867 6.9 18.48 6.8C18.3733 6.7 18.2667 6.6 18.16 6.6C18.0533 6.5 17.84 6.5 17.7333 6.5H8.13333C7.49333 6.5 7.06667 6.9 7.06667 7.5C7.06667 8.1 7.49333 8.5 8.13333 8.5H15.1733L6.32 16.8C5.89333 17.2 5.89333 17.8 6.32 18.2C6.53333 18.4 6.74667 18.5 7.06667 18.5C7.38667 18.5 7.6 18.4 7.81333 18.2L16.6667 9.9V16.5C16.6667 17.1 17.0933 17.5 17.7333 17.5C18.3733 17.5 18.8 17.1 18.8 16.5V7.5C18.8 7.4 18.8 7.2 18.6933 7.1Z" fill="white"/>
</svg>
          </button>
          </TabPanel>
        <TabPanel hidden={selectedTab !== "billing"}>
        <p className="tab-heading">Discoverability</p>
        <p>Qoruz's diverse influencer database, unlike Grin, makes it easier for brands to find influencers who meet their unique needs in terms of size (nano, micro, macro, mega, celebrity) and creator categories.</p>
          <button className="primary-btn">Discover our influencers <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M18.6933 7.1C18.6933 7 18.5867 6.9 18.48 6.8C18.3733 6.7 18.2667 6.6 18.16 6.6C18.0533 6.5 17.84 6.5 17.7333 6.5H8.13333C7.49333 6.5 7.06667 6.9 7.06667 7.5C7.06667 8.1 7.49333 8.5 8.13333 8.5H15.1733L6.32 16.8C5.89333 17.2 5.89333 17.8 6.32 18.2C6.53333 18.4 6.74667 18.5 7.06667 18.5C7.38667 18.5 7.6 18.4 7.81333 18.2L16.6667 9.9V16.5C16.6667 17.1 17.0933 17.5 17.7333 17.5C18.3733 17.5 18.8 17.1 18.8 16.5V7.5C18.8 7.4 18.8 7.2 18.6933 7.1Z" fill="white"/>
</svg></button>
          </TabPanel>
      </div>
    </>
  );
}