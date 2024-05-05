import React from 'react'
import cls from '../account_sing_in.module.css'
import { IoMdClose } from "react-icons/io";
import Button from '../../../components/Button/Button';

const AccountLogin = ({ setIsOpenLogin, setIsOpenSing }) => {

   return (
      <div className={cls.login_modal} onClick={() => setIsOpenLogin(false)}>
         <div onClick={e => e.stopPropagation()} className={cls.conteiner_modal}>
            <h2>Login <IoMdClose onClick={() => setIsOpenLogin(false)} /></h2>
            <form className={cls.block_form} action="">
               <>
                  <label htmlFor="name"> Name and Surname
                     <input required type="text" id='name1' placeholder='Enter your name and surname' />
                  </label>
               </>

               <label htmlFor="password">Password
                  <input required id='password' type="password" placeholder='Enter your password' />
               </label>
               <div className={cls.checkboxAgree}>
                  <label htmlFor="checkboxAgreeLogin">
                     <input
                        type="checkbox" id='checkboxAgreeLogin' /> <div>
                        I agree with Terms and Privacy
                     </div>
                  </label>
               </div>
               <Button>Sing Up</Button>

               <p className={cls.swap_method_login_and_singUp}>
                  Already have an account? {' '}
                  <span onClick={() => {
                     setIsOpenLogin(false)
                     setIsOpenSing(true)
                  }} >Sing Up</span>
               </p>

            </form>
         </div>
      </div>
   )
}

export default AccountLogin
