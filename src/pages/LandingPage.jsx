import PropTypes from 'prop-types';
import Vector from '../assets/img/landingPage/vector.svg';
import Login from '../components/landingPage/Login';
// import Footer from '../components/landingPage/Footer';

export default function LandingPage(props) {
  return (
    <div className="h-screen max-h-min flex flex-col ">
      <div className="body lg:flex px-16 w-full lg:h-5/6 ">
        <img
          src={Vector}
          alt="Graphics"
          className="lg:w-1/2 lg:my-auto lg:mx-auto mt-24"
        />
        <div className="lg:ml-auto lg:w-1/2 w-screen">
          <Login
            setToastShow={props.setToastShow}
            settoastCondition={props.settoastCondition}
          />
        </div>
      </div>
      {/* <div className="mt-auto relative bottom-0">
        <Footer></Footer>
      </div> */}
    </div>
  );
}

LandingPage.propTypes = {
  setToastShow: PropTypes.func, // Adjust the prop type as needed
  settoastCondition: PropTypes.func, // Adjust the prop type as needed
};
