import React, { useState } from "react";
import { Button, Form, Input, Slider, Table } from "antd";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";


const AdminProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [newPassError, setNewPassError] = useState("");
  const [conPassError, setConPassError] = useState("");
  const [curPassError, setCurPassError] = useState("");

  const [imgPick, setImagePick] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImagePick(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleChangePassword = (values) => {
    console.log(values);
    if (values?.current_password === values.new_password) {
      setNewPassError("The New password is semilar with old Password");
    } else {
      setNewPassError("");
    }

    if (values?.new_password !== values.confirm_password) {
      setConPassError("New Password and Confirm Password Doesn't Matched");
    } else {
      setConPassError("");
    }
  };


  return (
    <div className="mt-5">
      <div
        style={{
          background: "white",
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
          <div
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          ></div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={
                  imgPick
                    ? imgPick
                    : "https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__"
                }
                alt=""
                style={{
                  height: 114,
                  width: 119,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
                }}
              />
              <label
                htmlFor="imageUpload"
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: -10,
                  backgroundColor: "white",
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <CiEdit size={25} color="#929394" />
              </label>
            </div>
            <p
              style={{
                fontSize: 32,
                fontWeight: 500,
                color: "#333333",
              }}
            >
             Mithila 
            </p>
          </div>
          <input
            id="imageUpload"
            type="file"
            src=""
            onChange={onImageChange}
            style={{ display: "none" }}
            alt=""
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 35,
              marginBottom: 35,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 33,
              }}
            >
              <p
                onClick={() => setIsEdit(true)}
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: isEdit ? "#2461CB" : "#818181",
                  cursor: "pointer",
                  borderBottom: isEdit ? "3px solid #2461CB" : "none",
                  padding: "6px 0px",
                }}
              >
                Edit Profile
              </p>
              <p
                onClick={() => setIsEdit(false)}
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: isEdit ? "#818181" : "#2461CB",
                  cursor: "pointer",
                  borderBottom: isEdit ? "none" : "3px solid #2461CB",
                  padding: "6px 0px",
                }}
              >
                Change Password
              </p>
            </div>
          </div>
          {isEdit ? (
            <div>
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: "#2461CB",
                  textAlign: "center",
                }}
              >
                Edit Your Profile
              </p>
              <div
                style={{
                  marginTop: 25,
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  gap: 25,
                }}
              >
                <div>
                  <label
                    style={{
                      margin: "0px 10px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    User Name
                  </label>
                  <Input
                    placeholder="Admin Marie"
                    style={{
                      padding: "10px",
                      color: "#818181",
                      fontSize: 14,
                      fontWeight: 400,
                      margin: "8px 0px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      margin: "0px 10px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Email
                  </label>
                  <Input
                    placeholder="Camille@gmail.com"
                    style={{
                      padding: "10px",
                      color: "#818181",
                      fontSize: 14,
                      fontWeight: 400,
                      margin: "8px 0px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      margin: "0px 10px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Contact no
                  </label>
                  <Input
                    placeholder="+99007007007"
                    style={{
                      padding: "10px",
                      color: "#818181",
                      fontSize: 14,
                      fontWeight: 400,
                      margin: "8px 0px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      margin: "0px 10px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Address
                  </label>
                  <Input
                    placeholder="79/A Joker Vila, Gotham City"
                    style={{
                      padding: "10px",
                      color: "#818181",
                      fontSize: 14,
                      fontWeight: 400,
                      margin: "8px 0px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    height: 44,
                    width: 150,
                    backgroundColor: "#2461CB",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                style={{ width: "543px", height: "fit-content" }}
                onFinish={handleChangePassword}
              >
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      margin: "0px 0px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Current Password
                  </label>
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="current_password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your current password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter Password"
                      type="password"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                        margin: "8px 0px 0px 0px",
                      }}
                    />
                  </Form.Item>
                  {curPassError && (
                    <label
                      style={{ display: "block", color: "red" }}
                      htmlFor="error"
                    >
                      {curPassError}
                    </label>
                  )}
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      margin: "0px 0px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    htmlFor=""
                  >
                    New Password
                  </label>
                  <Form.Item
                    name="new_password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your new Password!",
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <Input.Password
                      placeholder="Enter Password"
                      type="password"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                        margin: "8px 0px 0px 0px",
                      }}
                    />
                  </Form.Item>
                  {newPassError && (
                    <label
                      style={{ display: "block", color: "red" }}
                      htmlFor="error"
                    >
                      {newPassError}
                    </label>
                  )}
                </div>

                <div style={{ marginBottom: "40px" }}>
                  <label
                    style={{
                      margin: "0px 0px",
                      color: "#636363",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    htmlFor="email"
                  >
                    Re-Type Password
                  </label>
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="confirm_password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Re-type Password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter Password"
                      type="password"
                      style={{
                        border: "1px solid #E0E4EC",
                        height: "52px",
                        background: "white",
                        borderRadius: "8px",
                        outline: "none",
                        margin: "8px 0px 0px 0px",
                      }}
                    />
                  </Form.Item>
                  {conPassError && (
                    <label
                      style={{ display: "block", color: "red" }}
                      htmlFor="error"
                    >
                      {conPassError}
                    </label>
                  )}
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        marginTop: 24,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        style={{
                          height: 44,
                          width: 150,
                          backgroundColor: "#2461CB",
                          color: "white",
                          borderRadius: "8px",
                          fontWeight: 500,
                          fontSize: 14,
                        }}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
