import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

const Contact = (props) => {
  const form = useRef();
  const [Loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_SERVICE_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAIL_SERVICE_PUBLIC_KEY
      )
      .then((res) => {
        console.log('email sent', res);
        toast.success('Email sent Successfully', res);
        setName('');
        setEmail('');
        setMessage('');
        setLoading(false);
      })
      .catch((error) => {
        console.log('error sending email', error);
        toast.error('Error sending Email try again later', error);
      });
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   emailjs.sendForm(
  //     process.env.REACT_EMAIL_SERVICE_ID,
  //     process.env.REACT_EMAIL_SERVICE_TEMPLATE,
  //     form.current,
  //     process.env.REACT_EMAIL_SERVICE_PUBLIC_KEY
  //   );
  //   e.target.reset();
  //   setLoading(false);
  //   props.settoastCondition({
  //     status: 'success',
  //     message: 'Message Sent Successfully!!!',
  //   });
  //   props.setToastShow(true);
  // };

  return (
    <div className="body w-full ">
      <div className="bg-secoundry ">
        <div className="">
          <div>
            <div className="flex justify-center mt-4">
              <h1 className=" rounded p-4 px-8 font-bold font-poppins text-3xl">
                Contact us
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 mt-4 ">
          <div>
            <div className="max-w-full  lg:mx-32 mx-4 my-8 bg-white py-8 px-16 rounded-3xl  border-8 border-primary">
              <div className="flex justify-center">
                <h1 className=" rounded  px-4 font-bold font-poppins text-3xl">
                  Reach us
                </h1>
              </div>
              <div className="">
                <h1 className="font-bold font-poppins text-2xl mt-4 ">
                  Email :
                </h1>
                <h1 className="font-poppins text-xl">
                  budhathokibinod142@gmail.com
                </h1>
              </div>
              <div>
                <h1 className="font-bold font-poppins text-2xl mt-4 ">
                  Address :
                </h1>
                <h2 className="font-poppins text-xl">
                  Kakarvitta, mechinagar-06, jhapa, Nepal
                </h2>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-10 rounded shadow-lg lg:mr-12 mt-12 mb-8 m-4">
              <form className="grid  gap-8 " ref={form} onSubmit={handleSubmit}>
                <div className="grid grid-cols-4  ">
                  <label className="font-poppins font-bold lg:text-xl col-span-1">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="name"
                    id="name"
                    name="name"
                    value={name}
                    className="pl-8 py-2 bg-blue-100  rounded col-span-3 text-lg outline-none"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="grid grid-cols-4">
                  <label className="font-poppins font-bold lg:text-xl col-span-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    value={email}
                    className="pl-8 py-2 bg-blue-100  rounded col-span-3  text-lg outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="grid grid-cols-4">
                  <label className="font-poppins font-bold lg:text-xl col-span-1">
                    Message{' '}
                  </label>
                  <textarea
                    required
                    type="text"
                    rows="4"
                    cols="25"
                    name="message"
                    value={message}
                    className="pl-4 bg-blue-100  rounded  col-span-3 text-lg py-2 outline-none"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-center ">
                  {Loading ? (
                    <ReactLoading
                      type={'bubbles'}
                      color={''}
                      height={'9%'}
                      width={'9%'}
                    />
                  ) : (
                    <button
                      type="submit"
                      value="send"
                      className="text-lg mt-2 bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="mt-auto relative bottom-0">
          <Footer></Footer>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
