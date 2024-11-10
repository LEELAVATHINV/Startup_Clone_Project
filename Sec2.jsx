import axios from 'axios';
import { useState } from "react";
export default function Sec2() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    companyname: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/submit', formData);      
      console.log(response.data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('error submitting form', error);
      alert('Failed to submit form');
    }
  }


  return (
    <>
      
      <div className="flex rounded-3xl sec-2 min-h-full flex-1 flex-col justify-center px-6  py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://startuptn.in/images/blue%20horizontal.png "
            className="mx-auto h-10 w-auto rounded-xl bg-blue-200 "
          />
          <h2 className="mt-10 text-center text-indigo-50 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration Form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" >
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-100">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  required
                  value={formData.name}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-100">
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  type="tel"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="companyname" className="block text-sm font-medium leading-6 text-gray-100">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  id="companyname"
                  name="companyname"
                  onChange={handleChange}
                  type="text"
                  value={formData.companyname}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="flex justify-center w-full my-10 rounded-md bg-blue-200 px-3 py-1.5  text-sm font-semibold leading-6 text-blue-1000   shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
