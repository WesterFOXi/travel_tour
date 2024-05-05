import React from 'react'
import cls from './contact_us.module.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import img from '../../image/logo_header.png'
import Button from './../../components/Button/Button';
const ContactUs = () => {
   const handleClick = e => {
      const form = document.getElementById("form");
      const result = document.querySelector(".result");

      form.addEventListener("submit", function (e) {
         const formData = new FormData(form);
         e.preventDefault();
         var object = {};
         formData.forEach((value, key) => {
            object[key] = value;
         });
         var json = JSON.stringify(object);
         result.innerHTML = "Please wait...";

         fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
            },
            body: json
         })
            .then(async (response) => {
               let json = await response.json();
               if (response.status === 200) {
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-green-500");
               } else {
                  console.log(response);
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-red-500");
               }
            })
            .catch((error) => {
               console.log(error);
               result.innerHTML = "Something went wrong!";
            })
            .then(function () {
               form.reset();
               setTimeout(() => {
                  result.style.display = "none";
               }, 3000);
            });
      });
   }
   return (
      <>
         <div className={cls.conteiner}>
            <div className={cls.contact_us}>

               <div className={cls.block_info}>
                  <h1>Get In Touch!</h1>
                  <p>Fill up the form and our Team will get back to you within 24 hours.</p>
                  <div className={cls.block_info_contact}>
                     <p><FaMapMarkerAlt /> Piazza Napoleone, Lucca, Tuscany</p>
                     <p><BsFillTelephoneFill />+39 346 368 5708</p>
                     <p><IoMdMail />italiainlimo@gmail.com</p>
                  </div>
               </div>
               <form id='form' className={cls.block_form} action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="afcc9a9b-1d17-4f77-ae2f-d188c5baf2bb" />
                  <label autoComplete='off' htmlFor="name1"> Name and Surname
                     <input name='name' required type="text" id='name1' placeholder='Enter your name and surname' />
                  </label>
                  <label htmlFor="email1">Email Address
                     <input id='email1' required name='email' type="email" placeholder='Enter your email address' />
                  </label>
                  <label htmlFor="massage">Message
                     <input name='massage' required className={cls.massege} id='massage' type="text" placeholder='Enter your Meesage' />
                  </label>
                  <p style={{ fontWeight: 600 }} className='result'></p>
                  <Button onClick={(e) => handleClick(e)} type='submit'>Send Massage</Button>
               </form>
            </div>
         </div>
         <div className={cls.block_map}>
            <img src={img} alt="img" />
         </div>
      </>
   )
}

export default ContactUs
