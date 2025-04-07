'use client';

import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
// import Navbar from '../navigation/Navbar';
// import Footer from '../navigation/Footer';
// import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "motion/react"
import * as motion from "motion/react-client"




export default function AddReview(){
   //  const { user } = useContext(AuthContext);
    const [genre, setGenre] = useState(''); // Genre state
   //  const navigate = useNavigate();


    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.Name.value;
        const Description = form.Description.value;
        const Image = form.Image.value;
        const Year = form.Year.value;
        const Rating = form.Rating.value;
      //   const username = user.displayName;
      //   const userEmail = user.email;

        if (!name || !Description || !Image || !Year || !Rating || !genre) {
            // toast.error("All fields are required");
            Swal.fire({
               title: "Error!",
               text: "All fields are required!",
               icon: "error"
             });
            return;
        }

        const allData = { name, Description, Image, Year, Rating, genre,  };
        console.log(allData);

        // send data to the server
        fetch('www.post-url.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            toast.success("Review added successfully!");
            // navigate('/myReviews');
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error("Error adding review");
        });
    };

    return (
        <div>
            {/* <Navbar /> */}
            {/* new from --------------------------------------------*/}
            <div className='flex flex-col items-center mt-32 mb-24'>
                 <form onSubmit={handleAddReview} className="card  shadow-2xl p-8 w-[95vw] 
                 md:w-[80vw] xl:w-[60vw] ">
                    <h2 className="text-4xl font-bold text-center mb-8">News</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] ">
                    {/* Left Section */}
                    <div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="text-lg font-bold  ">News Title</span>
                        </label>
                        <input
                        type="text"
                        name='Name'
                        placeholder="Game Title/Name"
                        className=" h-10 p-3 rounded-lg border-[2px] border-blue-100  w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="text-lg font-bold">Review Description</span>
                        </label>
                        <textarea
                        name='Description' 
                        placeholder="Write your Description..."
                        className="h-16 p-3 rounded-lg border-[2px] border-blue-100  w-full"
                        ></textarea>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="text-lg font-bold">Game Cover Image/Thumbnail</span>
                        </label>
                        <input
                        type="text"
                        name='Image'
                        placeholder="Image URL"
                        className="h-10 p-3 rounded-lg border-[2px] border-blue-100  w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-bold">Publishing Year</span>
                        </label>
                        <input type="number" name='Year' placeholder="Publishing Year" 
                        className="h-10 p-3 rounded-lg border-[2px] border-blue-100  w-full " />
                    </div>
                    </div>
                    {/* Right Section */}
                    <div className='flex flex-col gap-4 lg:gap-6'>
                    
                    </div>
                </div>
                {/* Submit Button */}
                <motion.button 
                className="bg-blue-600 py-3 rounded-xl w-full mt-6"
                >Submit</motion.button>
            </form>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

