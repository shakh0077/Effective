import axios from "axios";
import React, { useState, useEffect } from "react";

function Demo() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState([]);


  useEffect(() => {
    const savedData = localStorage.getItem("users");
    if (savedData) {
      setOpen(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(open));
  }, [open]);

  const handlePost = () => {
    if (name.trim() === "") {
      alert("Iltimos, ism kiriting!");
      return;
    }

    axios
      .post(
        "https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students",
        { name }
      )
      .then((res) => {
        setOpen((prev) => [...prev, res.data]);
        setName("");
      })
      .catch((err) => {
        console.log("Xatolik bor, tekshirib chiqing", err);
      });
  };

  
  const handleDelete = (id) =>{
    axios.delete(`https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students/${id}`)

    .then(()=>{
        setOpen(prev=>prev.filter(item=> item.id !==id))
    })
    .catch(err=>{
        console.log('Xatoliklar bor ', err)
    })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Foydalanuvchilarni qo‘shish:</h1>

      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Ismingizni kiriting..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <button
          onClick={handlePost}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Qo‘shish
        </button>
      </div>

      {open.map((v) => (
        <div className="flex items-center gap-6 mb-2" key={v.id}>
          <span>{v.id}</span>
          <h2>{v.name}</h2>
          <button className="bg-amber-400 px-5 py-2" onClick={()=>handleDelete(v.id)}>O'chirish</button>
        </div>
      ))}
    </div>
  );
}

export default Demo;
