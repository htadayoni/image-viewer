import './style.css';
import Header from '../containers/Header';
import TopMenu from '../containers/TopMenu';

const AppLayout = ({ children }) => {
  return (
    <div className="app__layout--area">
      <div className="layout-wrapper">
        <Header title="Please select which category you want" subTitle="Select Category" />
        <TopMenu />
        {children}
      </div>
    </div>
  );
};
export default AppLayout;