import { Header, Navbar } from '../../components';
import { Outlet } from 'react-router-dom';
import './parent.scss';
const Parent = () => {
  return (
    <section className="parent">
      <Header />
      <Outlet />
      <Navbar />
    </section>
  );
};

export default Parent;
