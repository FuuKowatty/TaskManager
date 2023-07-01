"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation'

interface InitialFormData {
    title: string;
    description: string;
    userId: number | undefined;
}

const initialFormData: InitialFormData = {
  title: '',
  description: '',
  userId: undefined,
}


export function AddTask() {


  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [users, setUsers] = useState<User[]>([]);
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  console.log(formData)

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios
      .post("/api/getTasks", formData)
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        router.refresh();
      });
  };

  useEffect(() => {
    const getTasks = async () => {
        const users = await axios.get('/api/getUsers')
        setUsers(users.data)
    }
    getTasks()
  }, [])

  return (
<form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-xl text-black">
  <input type="text" name="title" value={formData.title} onChange={handleChange} /> <br />
  <input type="text" name="description" value={formData.description} onChange={handleChange} /><br />
  <select value={formData.userId} name="userId" onChange={handleChange}>
    {users && users.map(user => (
        <option value={user.id} key={user.id}>{user.name}</option>
    ))}
  </select>
  <button type="submit" className="text-white">Submit</button>
</form>

  );
}
