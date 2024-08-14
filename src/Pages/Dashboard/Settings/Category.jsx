import React, { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegImage, FaRegTrashAlt } from "react-icons/fa";
import { Button, Form, Input, Modal, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";


const data = [
  {
    key: "1",

    category_image:
      "https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__",
    category_name: "Classical",
  },
  {
    key: "2",

    category_image:
      "https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__",
    category_name: "Hip Hop",
  },
  {
    key: "3",

    category_image:
      "https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__",
    category_name: "Jazz",
  },
  {
    key: "4",

    category_image:
      "https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__",
    category_name: "Folk",
  },
  {
    key: "5",

    category_image:
      "https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__",
    category_name: "Pop",
  },
  {
    key: "6",

    category_image:
      "https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__",
    category_name: "Rock",
  }
];

const Category = () => {

  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const [imgFile, setImgFile] = useState(null);
  const handleChange = (e) => {
    setImgFile(e.target.files[0]);
  };
  const [itemForEdit, setItemForEdit] = useState(null);
  const [openAddModel, setOpenAddModel] = useState(false);


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
      width: 100,
    },
    {
      title: "Category Image",
      dataIndex: "category_image",
      key: "category_image",
      width: 200,
      render: (img) => {
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
                height: 45,
                width: 52,
                borderRadius: 8,
                backgroundSize: "cover",
              }}
              src={img}
              alt="ok"
            />
          </div>
        );
      },
    },

    {
      title: "Category Name",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 150,
      textAlign: "center",
      render: (_, record) => (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <button
          onClick={()=>{setOpenAddModel(true) , setItemForEdit(record)}}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              color: "#2461CB",
              fontWeight:800
            }}
          >
            <CiEdit size={25} />
          </button>
          <button
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: "white",
              color: "#808080",
            }} 
            onClick={()=>handleDelete(record?.key)}
          >
            <FaRegTrashAlt size={20} />
          </button>
        </p>
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
      <div
        style={{
     
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <div>
            <h3
              style={{
                color: "#2461CB",
                fontSize: 26,
                fontWeight: "600",
              }}
            >
             Categories
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button
             onClick={()=>setOpenAddModel(true)}
              style={{
                borderRadius: 8,
                background: "#2461CB",
                height: 40,
                color: "white",
                fontSize: 14,
                fontWeight: "400",
              }}
              icon={<PlusOutlined />}
            >
             Add Category
            </Button>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            style={{}}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: 85,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} out of ${total}`,
              defaultPageSize: 20,
              //   defaultCurrent: 1,
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
      <Modal
        centered
        open={openAddModel}
        onCancel={() => {
          // null;
          setImgFile(null);
          setOpenAddModel(false);
        }}
        width={500}
        footer={false}
      >
        <div className="p-6 ">
          <h1
            className="font-semibold text-[#2461CB] text-lg"
            style={{ marginBottom: "12px" }}
          > 
          {
            itemForEdit ? "Update Category" :"Add Category"
          }
           
          </h1>
          <Form>
            <div>
              <p className="text-[#6D6D6D] py-1">Category Name</p>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input Package Name",
                  },
                ]}
              >
                <Input
                  className="w-[100%] border outline-none px-3 py-[10px]"
                  type="text"
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-[#6D6D6D] py-1">Category Image</p>

              <label
                htmlFor="image"
                style={{ display: "block", margin: "4px 0" }}
                className="p-3 border"
              >
                <Form.Item name="image">
                  <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10">
                    {imgFile ? (
                      <img src={URL.createObjectURL(imgFile)} alt="" />
                    ) 
                    //  : itemForEdit?.category_image ? (
                    //   <img src={`${ServerUrl}${itemForEdit?.category_image}`} alt="" />
                    // ) 
                     : (
                      <FaRegImage className="text-2xl" />
                    )}
                  </div>

                  <div className="hidden">
                    <Input
                      id="image"
                      type="file"
                      onInput={handleChange}
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </Form.Item>
              </label>
            </div>
            <div className="text-center mt-6">
              <button className="bg-[#2461CB] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
                Confirm
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Category;
