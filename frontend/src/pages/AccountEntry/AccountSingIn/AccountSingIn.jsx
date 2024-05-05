import React, { useState, useRef } from "react";
import cls from "../account_sing_in.module.css";
import Button from "../../../components/Button/Button";
import { IoMdClose } from "react-icons/io";
import { NewUser } from "./NewUser";
const AccountLoginSingUp = ({ setIsOpenSing, setIsOpenLogin }) => {
   const [dateNewUser, setDataNewUser] = useState({});
   const refForm = useRef();
   const [isCurrentUser, setIsCurrentUser] = useState(null);
   return (
      <div className={cls.login_modal} onClick={() => setIsOpenSing(false)}>
         <div
            onClick={(e) => e.stopPropagation()}
            className={cls.conteiner_modal}
         >
            <h2>
               Create Account <IoMdClose onClick={() => setIsOpenSing(false)} />
            </h2>
            <form
               ref={refForm}
               onSubmit={(e) => {
                  e.preventDefault();
                  NewUser(refForm, isCurrentUser, setIsCurrentUser);
               }}
               className={cls.block_form}
            >
               <>
                  <label htmlFor="name">
                     Name and Surname
                     <input
                        onChange={(e) =>
                           setDataNewUser({
                              ...dateNewUser,
                              name: e.target.value,
                           })
                        }
                        autoComplete="none"
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name and surname"
                     />
                  </label>
               </>
               <label htmlFor="email">
                  Email Address
                  <input
                     onChange={(e) =>
                        setDataNewUser({
                           ...dateNewUser,
                           email: e.target.value,
                        })
                     }
                     required
                     id="email"
                     type="email"
                     name="email"
                     placeholder="Enter your email address"
                  />
               </label>
               <label htmlFor="password">
                  Password
                  <input
                     onChange={(e) =>
                        setDataNewUser({
                           ...dateNewUser,
                           password: e.target.value,
                        })
                     }
                     required
                     id="password"
                     name="password"
                     type="password"
                     placeholder="Enter your password"
                  />
               </label>
               <div className={cls.checkboxAgree}>
                  <label htmlFor="checkboxAgreeSignIn">
                     <input
                        required
                        type="checkbox"
                        id="checkboxAgreeSignIn"
                        name="checkbox"
                     />{" "}
                     <div>I agree with Terms and Privacy</div>
                  </label>
               </div>
               {isCurrentUser && <p>erorr</p>}
               <Button type="submit">Sing Up</Button>

               <p className={cls.swap_method_login_and_singUp}>
                  Already have an account?{" "}
                  <span
                     onClick={() => {
                        setIsOpenSing(false);
                        setIsOpenLogin(true);
                     }}
                  >
                     Login
                  </span>
               </p>
            </form>
         </div>
      </div>
   );
};

export default AccountLoginSingUp;
