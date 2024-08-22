import React, {  useState } from "react";
import { Input,  Table } from "antd";  
import { GoArrowUpRight } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import Title from "../../Shared/Title"
import { RiDeleteBin6Line } from "react-icons/ri"; 
import userImg from "../../assets/user.png"
import UserDetailsModal from "../../Components/UserDetailsModal";
import MusicianModal from "../../Components/MusicianModal";
const data = [
  {
    key: "#1239",

    user: {
      name: "Mr. Mahmud",
      img: userImg,
    },
    email: "mr101@mail.ru",
    contact: "(+33)7 00 55 59 27",
    
  },
  {
    key: "#1238",

    user: {
      name: "Lily",
      img: userImg,
    },
    email: "xterris@gmail.com",
    contact: "(+33)7 00 55 59 27",
   
  },
  {
    key: "#1237",

    user: {
      name: "Kathry",
      img: userImg,
    },
    email: "irnabela@gmail.com",
    contact: "(+33)7 00 55 59 27",
    
  },
  {
    key: "#1236",

    user: {
      name: "Priscilla",
      img: userImg,
    },
    email: "codence@gmail.com",
    contact: "(+33)7 00 55 59 27",
   
  },
  {
    key: "#1235",

    user: {
      name: "Claire",
      img: userImg,
    },
    email: "quasiah@gmail.com",
    contact: "(+33)7 00 55 59 27",
  }, 

  {
    key: "#1234",

    user: {
      name: "Irmar",
      img: userImg,
    },
    email: "xeno@yandex.ru",
    contact: "(+33)7 00 55 59 27",
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: userImg,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
   
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: userImg,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
   
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: userImg ,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
   
  },
  {
    key: "#1233",

    user: {
      name: "Gloria",
      img: userImg,
    },
    email: "redaniel@gmail.com",
    contact: "(+33)7 00 55 59 27",
 
  },
 
];

const Musician = () => { 
    const [page, setPage] = useState(
        new URLSearchParams(window.location.search).get("page") || 1
      );
    const [open,setOpen]=useState(false) 
    const [modalData , SetModalData] = useState(null)
    
      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      };
    
    
    
      const columns = [
        {
          title: "S.No",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "Musician Name",
          dataIndex: "user",
          key: "user",
          render: (user) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <img
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 8,
                    backgroundSize: "cover",
                  }}
                  src={user?.img}
                  alt="ok"
                />
                <p
                  style={{
                    letterSpacing: 0.4,
                    fontSize: "#666666",
                    fontWeight: "400",
                  }}
                >
                  {user?.name}
                </p>
              </div>
            );
          },
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
    
        {
          title: "Contact Number",
          dataIndex: "contact",
          key: "contact",
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "action",
          render: (_, record) => (
            <div
            className=" flex items-center gap-2 "
            >
              <button
               onClick={()=>{setOpen(true) , SetModalData(record)}}
                style={{
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                }}
              >
               <GoArrowUpRight className="text-xl font-semibold text-[#2461CB]" />
              </button> 
    
              <button onClick={()=>handleDelete(record?.key)}>
              <RiDeleteBin6Line  className="text-xl font-semibold text-red-500" />
              </button>
            </div>
          ),
        },
      ];
    
      const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set("page", page);
        window.history.pushState(null, "", `?${params.toString()}`);
      };
    
    return (
        <div>  
      <div className=" flex  items-center justify-between my-3"> 
      <Title className="">Musician</Title>
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-gray-400" />} style={{ width:"400px" , height:"45px"}} />
      </div>
     
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: 85,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} out of ${total}`,
              defaultPageSize: 20,
              // defaultCurrent: 1,
              style: {
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
                width: "100%",
                display: "flex",
                // gap: 10,
                // justifyContent: "space-between",
              },
            }}
          />
        </div>
      </div>
       <MusicianModal open={open}  setOpen={setOpen} modalData={modalData}/>
    </div>
    );
};

export default Musician;