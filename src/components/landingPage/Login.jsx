import React, { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  button,
  Tabs,
  Tab,
} from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../../assets/img/landingPage/profile.png';
import ReactLoading from 'react-loading';
import doctor from '../../assets/img/landingPage/doctor.png';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';

export default function Login(props) {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [Toggle, setToggle] = useState('Patient');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [selected, setSelected] = React.useState('login');

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    const auth = async () => {
      const res = await fetch('/auth');
      const data = await res.json();
      if (data.msg === 'Doctor Login Found') {
        navigate('/doctor/dashboard');
      }
      if (data.msg === 'Admin Login Found') {
        navigate('/admin/dashboard');
      }
      if (data.msg === 'Patient Login Found') {
        navigate('/patient/dashboard');
      }
    };
    auth();
  }, [navigate]);

  const handlePatientLogin = async (healthID, password) => {
    setLoading(true);
    const res = await fetch('http://localhost:4321/login/patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        healthID,
        password,
      }),
    });

    const data = await res.json();

    if (data.errors) {
      setUsernameError(data.errors.healthID);
      setPasswordError(data.errors.password);
      setLoading(false);
    } else {
      setLoading(false);
      props.settoastCondition({
        status: 'success',
        message: 'Logged in Successfully!!!',
      });
      props.setToastShow(true);
      navigate('/patient/dashboard');
    }
  };

  const handleDoctorAdminLogin = async (email, password, path) => {
    setLoading(true);
    const res = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.err) {
      setLoading(false);
      props.settoastCondition({
        status: 'error',
        message: 'Wrong Credentials!!!',
      });
      props.setToastShow(true);
    } else if (data.errors) {
      setUsernameError(data.errors.healthID);
      setPasswordError(data.errors.password);
      setLoading(false);
      props.settoastCondition({
        status: 'error',
        message: 'Wrong Credentials!!!',
      });
      props.setToastShow(true);
    } else {
      setLoading(false);
      props.settoastCondition({
        status: 'success',
        message: 'Logged in Successfully!!!',
      });
      props.setToastShow(true);
      if (path === '/login/doctor') {
        navigate('/doctor/dashboard');
      } else {
        navigate('/admin/dashboard');
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    switch (Toggle) {
      case 'Patient':
        handlePatientLogin(username, password);
        break;
      case 'Doctor':
        handleDoctorAdminLogin(username, password, '/login/doctor');
        break;
      case 'Admin':
        handleDoctorAdminLogin(
          username,
          password,
          'http://localhost:4321/login/admin'
        );
        break;
      default:
        break;
    }
  };
  return (
    // <div className=" lg:w-3/4 w-full my-7 ml-auto ">
    //   <Card shadow="sm">
    //     <CardBody className="flex justify-items-center items-center ">
    //       <h5 className="text-3xl font-bold font-poppins text-primary py-5">
    //         Login
    //       </h5>
    //       <div className="flex bg-bgsecondary w-fit justify-between rounded">
    //         <button
    //           className={
    //             Toggle === 'Patient'
    //               ? 'py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-success'
    //               : 'py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded'
    //           }
    //           onClick={() => {
    //             setToggle('Patient');
    //             setUsername('');
    //             setPassword('');
    //             setUsernameError('');
    //             setPasswordError('');
    //           }}
    //         >
    //           Patient
    //         </button>
    //         <button
    //           onClick={() => {
    //             setToggle('Doctor');
    //             setUsername('');
    //             setPassword('');
    //             setUsernameError('');
    //             setPasswordError('');
    //           }}
    //           className={
    //             Toggle === 'Doctor'
    //               ? 'py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-success'
    //               : 'py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded'
    //           }
    //         >
    //           Doctor
    //         </button>
    //         <button
    //           onClick={() => {
    //             setToggle('Admin');
    //             setUsername('');
    //             setPassword('');
    //             setUsernameError('');
    //             setPasswordError('');
    //           }}
    //           className={
    //             Toggle === 'Admin'
    //               ? 'py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-success'
    //               : 'py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded'
    //           }
    //         >
    //           Admin
    //         </button>
    //       </div>
    //       <Image
    //         src={Toggle === 'Doctor' ? doctor : profile}
    //         alt="profile pic"
    //         className="h-20 my-6 border-2 rounded-full"
    //       />
    //       <form className="flex flex-col w-full px-8" onSubmit={handleLogin}>
    //         <Input
    //           type="text"
    //           name="username"
    //           id="username"
    //           label={Toggle === 'Patient' ? 'Health Id' : 'Email'}
    //           className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           isRequired
    //         />
    //         <span className="text-sm text-red-500">{usernameError}</span>

    //         <Input
    //           isRequired
    //           type={isVisible ? 'text' : 'password'}
    //           name="password"
    //           id="password"
    //           label="Password"
    //           className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           endContent={
    //             <button
    //               className="focus:outline-none"
    //               type="button"
    //               onClick={toggleVisibility}
    //             >
    //               {isVisible ? (
    //                 <PiEyeClosedBold className="text-2xl text-default-400 pointer-events-none" />
    //               ) : (
    //                 <PiEyeBold className="text-2xl text-default-400 pointer-events-none" />
    //               )}
    //             </button>
    //           }
    //         />
    //         <span className="text-sm text-red-500">{passwordError}</span>

    //         {Loading ? (
    //           <div className="flex justify-center items-center py-3">
    //             <ReactLoading
    //               type={'bubbles'}
    //               color={'color'}
    //               height={'10%'}
    //               width={'10%'}
    //             />
    //           </div>
    //         ) : (
    //           <Button
    //             type="submit"
    //             className="text-lg mt-10   py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary"
    //           >
    //             Login
    //           </Button>
    //         )}
    //       </form>
    //       <CardFooter className="font-poppins text-base pt-5">
    //         New User,{' '}
    //         <Link to="/Register" className="underline text-blue-400">
    //           Register here
    //         </Link>
    //       </CardFooter>
    //     </CardBody>
    //   </Card>
    // </div>
    <>
      <div className="flex flex-col  w-[350px] mx-auto md:w-[500px] lg:mx-0 lg:w-[500px] my-7 lg:ml-auto">
        <Card className="max-w-full ">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="patient" title="Patient">
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your health id"
                    label={Toggle === 'Patient' ? 'Health Id' : 'Email'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    isRequired
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <PiEyeClosedBold className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <PiEyeBold className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />

                  <div className="flex gap-2 justify-end">
                    {Loading ? (
                      <div className="flex justify-center items-center py-3">
                        <ReactLoading
                          type={'bubbles'}
                          color={'color'}
                          height={'10%'}
                          width={'10%'}
                        />
                      </div>
                    ) : (
                      <Button type="submit" fullWidth color="primary">
                        Login
                      </Button>
                    )}
                  </div>
                </form>
                <CardFooter>
                  <p className="text-center text-lg">
                    Need to create an account?{' '}
                    <Link
                      className="underline text-blue-500"
                      to="/register"
                      size="sm"
                    >
                      Sign up
                    </Link>
                  </p>
                </CardFooter>
              </Tab>
              <Tab key="doctor" title="Doctor">
                <form className="flex flex-col gap-4 ">
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />

                  <div className="flex gap-2 justify-end">
                    <Button type="submit" fullWidth color="primary">
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="admin" title="Admin">
                <form className="flex flex-col gap-4 ">
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />

                  <div className="flex gap-2 justify-end">
                    <Button type="submit" fullWidth color="primary">
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
