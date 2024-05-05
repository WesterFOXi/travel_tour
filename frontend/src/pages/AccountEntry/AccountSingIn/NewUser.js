export const NewUser = async (ref, isCurrentUser, setIsCurrentUser) => {
   const formData = new FormData(ref.current);
   const data = Object.fromEntries(formData);
   await fetch("http://localhost:8080/allUsers")
      .then((res) => res.json())
      .then((dataUser) => {
         const allUserName = [];
         dataUser.map((item) => allUserName.push(item.name));
         console.log(allUserName);
         return allUserName;
      }) 
      .then((nameUser) => {
         nameUser.map((user) => {
            console.log(user, data.name);
            if (user === data.name) return setIsCurrentUser(false);
            else return setIsCurrentUser(true);
         });
      })
      .catch((err) => console.error(err));

   isCurrentUser
      ? await fetch("http://localhost:8080/new", {
           method: "POST",
           headers: {
              "Content-Type": "application/json;charset=utf-8",
           },
           body: JSON.stringify(data),
        }).then(() => {
           console.log("great");
           return setIsCurrentUser(true);
        })
      : console.log("erorr______________");
};
