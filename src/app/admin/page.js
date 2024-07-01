"use client"

import React from 'react'
import { useEffect, useState } from 'react';

const page = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hofapi-brad.onrender.com/api/register'); // Replace with your backend endpoint
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="p-4">
        <div>Responses so Far...</div>
    {data ? (
        <div>
            <div className="space-y-4 ">
                {data.map((item, index) => (
                    <div key={index} className="p-4 bg-slate-600 rounded shadow-md">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Business Name:</strong> {item.businessName}</p>
                        <p><strong>Phone Number:</strong> {item.phoneNumber}</p>
                        <p><strong>Proposal:</strong> {item.proposal}</p>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    )}
</div>
  )
}

export default page

