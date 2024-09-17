import React, { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegImage, FaRegTrashAlt } from "react-icons/fa";
import { Button, Form, Input, notification, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import Modal from "../../../Components/Modal";
import {
  useAddCategoryMutation,
  useGetCategoryQuery,
} from "../../../redux/api/slices/categoryApi";
import { imageUrl } from "../../../redux/api/baseApi";
import AddCategory from "../../../Components/Form/AddCategory";

const Category = () => {
  const [openModal, setOpenModal] = useState(false);
  const [addCategory] = useAddCategoryMutation();
  const { data: categories } = useGetCategoryQuery({});
  console.log(categories);
  const [form] = Form.useForm();
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

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

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };
  //add category to backend
  const handleAddCategory = async (values) => {
    const categoryInfo = {
      categoryName: values.title,
      image: values.image.file,
    };

    const formData = new FormData();
    formData.append("categoryName", categoryInfo.categoryName);
    formData.append("image", categoryInfo.image);
    try {
      const res = await addCategory(formData).unwrap();

      if (res.success) {
        form.resetFields();
        setOpenModal(false);
        notification.success({
          message: res.message,
          duration: 2,
        });
      }
    } catch (error) {
      notification.error({
        message:
          (error.data && error.data.message) ||
          "Something went wrong while add category!!!",
        duration: 2,
      });
    }
  };

  // const addCategoryForm = (
  //   <Form form={form} onFinish={handleAddCategory}>
  //     <div>
  //       <p className="text-[#6D6D6D] py-1">Category Name</p>
  //       <Form.Item
  //         name="title"
  //         rules={[
  //           {
  //             required: true,
  //             message: "Please input category name",
  //           },
  //         ]}
  //       >
  //         <Input
  //           className="w-[100%] border outline-none px-3 py-[10px]"
  //           type="text"
  //         />
  //       </Form.Item>
  //     </div>
  //     <div>
  //       <p className="text-[#6D6D6D] py-1">Category Image</p>

  //       <label
  //         htmlFor="image"
  //         style={{ display: "block", margin: "4px 0" }}
  //         className="p-3 border"
  //       >
  //         <Form.Item>
  //           <div className="flex justify-center items-center w-full h-full border-dashed border border-black py-10">
  //             {imgFile ? (
  //               <img src={URL.createObjectURL(imgFile)} alt="" />
  //             ) : (
  //               //  : itemForEdit?.category_image ? (
  //               //   <img src={`${ServerUrl}${itemForEdit?.category_image}`} alt="" />
  //               // )
  //               <FaRegImage className="text-2xl" />
  //             )}
  //           </div>

  //           <div className="hidden">
  //             <Input
  //               id="image"
  //               type="file"
  //               onInput={handleChange}
  //               style={{
  //                 border: "1px solid #E0E4EC",
  //                 height: "52px",
  //                 background: "white",
  //                 borderRadius: "8px",
  //                 outline: "none",
  //               }}
  //             />
  //           </div>
  //         </Form.Item>
  //       </label>
  //     </div>
  //     <div className="text-center mt-6">
  //       <button className="bg-[#2461CB] px-6 py-3 w-full text-[#FEFEFE] rounded-md">
  //         Confirm
  //       </button>
  //     </div>
  //   </Form>
  // );

  ///colum
  const columns = [
    {
      title: "S.No",
      dataIndex: "_id",
      key: "_id",
      width: 100,
      render: (_, record, index) => {
        return <p>{index + 1}</p>;
      },
    },
    {
      title: "Category Image",
      dataIndex: "image",
      key: "image",
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
              src={`${imageUrl}/${img}`}
              alt="category"
            />
          </div>
        );
      },
    },

    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
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
            onClick={() => {
              setOpenModal(true);
            }}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              color: "#2461CB",
              fontWeight: 800,
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
            onClick={() => handleDelete(record?.key)}
          >
            <FaRegTrashAlt size={20} />
          </button>
        </p>
      ),
    },
  ];
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
              onClick={() => setOpenModal(true)}
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
            dataSource={categories}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
              total: 85,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} out of ${total}`,
            }}
          />
        </div>
      </div>

      <Modal
        title={"Add Category"}
        body={<AddCategory handleAddCategory={handleAddCategory} form={form} />}
        open={openModal}
        setOpen={setOpenModal}
        width={500}
        key={"category-modal"}
      />
    </div>
  );
};

export default Category;
