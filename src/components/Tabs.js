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
          <button className="primary-btn">Discover our influencers</button>
          </TabPanel>
        <TabPanel hidden={selectedTab !== "company"}>
        <p className="tab-heading">Discoverability</p>
          <p>Qoruz's diverse influencer database, unlike Grin, makes it easier for brands to find influencers who meet their unique needs in terms of size (nano, micro, macro, mega, celebrity) and creator categories.</p>
          <button className="primary-btn">Discover our influencers</button>
          </TabPanel>
        <TabPanel hidden={selectedTab !== "team"}>
        <p className="tab-heading">Discoverability</p>
        <p>Qoruz's diverse influencer database, unlike Grin, makes it easier for brands to find influencers who meet their unique needs in terms of size (nano, micro, macro, mega, celebrity) and creator categories.</p>
          <button className="primary-btn">Discover our influencers</button>
          </TabPanel>
        <TabPanel hidden={selectedTab !== "billing"}>
        <p className="tab-heading">Discoverability</p>
        <p>Qoruz's diverse influencer database, unlike Grin, makes it easier for brands to find influencers who meet their unique needs in terms of size (nano, micro, macro, mega, celebrity) and creator categories.</p>
          <button className="primary-btn">Discover our influencers</button>
          </TabPanel>
      </div>
    </>
  );
}