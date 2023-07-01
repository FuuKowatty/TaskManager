"use client"

import axios from 'axios';
import { useState } from 'react';
import {useRouter} from 'next/navigation'

const initialFormData = {
  name: '',
  surname: '',
  email: '',
  password: '',
  role: '',
}


export function Form() {

  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios
      .post("/api/getUsers", formData)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormData(initialFormData);
        router.refresh();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-xl text-black">
      <input type="text" name="name" value={formData.name} onChange={handleChange} /> <br />
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} /><br />
      <input type="email" name="email" value={formData.email} onChange={handleChange} /><br />
      <input type="password" name="password" value={formData.password} onChange={handleChange} /><br />
      <input type="text" name="role" value={formData.role} onChange={handleChange} /><br />
      <button type="submit" className="text-white">Submit</button>
    </form>
  );
}
