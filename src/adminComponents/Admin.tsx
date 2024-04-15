
import SideBar from './SideBar';
import HeaderSection from './HeaderSection';
import Overview from './Overview';
import Cards from './Cards';
import LatestMessages from './LatestMessages';
import PeopleCommented from './PeopleCommented';

const MainComponent = () => {
  return (
    <main className="admin">
      <SideBar />
      <div className="container">
        <HeaderSection />
        <Overview />
        <Cards />
        <div className="latest-messages">
          <LatestMessages />
          <PeopleCommented />
          </div>
      </div>
    </main>
  );
}

export default MainComponent;
