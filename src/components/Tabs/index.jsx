import React, { useState } from "react";
import Profile from "./profile";
import Setting from "./settings";
import Interest from "./interest";
import "../../App.css";

const Tabs = [
  {
    id: 1,
    title: "Profile",
    component: Profile,
    validate: function (inputData)
    {
         const profileErr = {}
         if(!inputData?.name || inputData?.name.length < 2)
                  profileErr.name = "Name should have atleast 2 characters"
         if(!inputData?.age || isNaN(inputData?.age) || inputData?.age <= 0 || inputData?.age > 150)
                  profileErr.age = "Age should be a positive number between 1 and 150"
         if(!inputData?.email ||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputData?.email))
                  profileErr.email = "Invalid email address"
         return profileErr;
    }
  },
  {
    id: 2,
    title: "Interest",
    component: Interest
  },
  {
    id: 3,
    title: "Setting",
    component: Setting,
  },
];


export default function Tab() {
  const [data, setData] = useState({
    name: "Gowri",
    age: "30",
    email: "gowri@gmail.com",
    interest:['coding','music'],
    theme:'dark'
  });

  const [activeTab, setActivetab] = useState(0);
  const [err, setErr] = useState({});
  const ActiveComponent = Tabs[activeTab]?.component;
  return (
    <div className="tabs">
      <div className="heading-container">
        {Tabs?.map((eachTab, index) => (
          <div className="heading" onClick={() => setActivetab(index)}>
            {eachTab.title}
          </div>
        ))}
      </div>

      <div className="tab-body">
        <ActiveComponent data={data} setData={setData} err={err} />
      </div>
      <button disabled={activeTab === 0} onClick={() => setActivetab((prev) => prev - 1)}>
        {" "}
        Prev
      </button>
      <button disabled={activeTab === Tabs?.length - 1} onClick={() => { 
          const errorStates  =Tabs[activeTab]?.validate(data);
         setErr(errorStates)
         if(!Object.keys(errorStates)?.length)
         setActivetab((prev) => prev + 1)
         else
         return null;
      }
      }>
        {" "}
        Next
      </button>
    </div>
  );
}
