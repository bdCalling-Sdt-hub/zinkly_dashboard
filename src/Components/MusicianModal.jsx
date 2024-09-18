import { Modal } from "antd";
import React from "react";
import { imageUrl } from "../redux/api/baseApi";

const MusicianModal = ({ open, setOpen, modalData }) => {
  return (
    <div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        centered
        footer={false}
        width={750}
      >
        <div className="p-6">
          <div className="flex justify-center items-center flex-col py-5 gap-4">
            <img
              className="w-56 h-32 rounded-lg"
              src={`${imageUrl}/${modalData?.profile}`}
              alt=""
            />
            <p className="text-nowrap  font-semibold text-xl">
              Musician Information
            </p>
          </div>

          <div className="flex  justify-center items-center   mx-auto gap-3">
            <div>
              <div className=" w-full flex ">
                <p className="w-1/2 text-sm font-semibold mb-1">Name</p>
                <p className=" w-1/2 text-sm text-start">{modalData?.name}</p>
              </div>

              <div className=" w-full flex my-2">
                <p className="w-1/2 text-sm font-semibold mb-1">Email</p>
                <p className="text-nowrap  w-1/2 text-sm text-start ">
                  {modalData?.email}
                </p>
              </div>

              <div className=" w-full flex ">
                <p className="text-nowrap w-1/2 text-sm font-semibold mb-1">
                  Address
                </p>
                <p className="text-nowrap  w-1/2 text-sm text-start">
                  {modalData?.location}
                </p>
              </div>

              <div className=" w-full flex my-2 ">
                <p className="text-nowrap w-1/2 text-sm font-semibold mb-1">
                  Contact No
                </p>
                <p className="text-nowrap  w-1/2 text-sm text-start">
                  {modalData?.contact}
                </p>
              </div>

              <div className=" w-full flex my-2 ">
                <p className="text-nowrap w-1/2 text-sm font-semibold mb-1">
                  Genre
                </p>
                <p className="text-nowrap  w-1/2 text-sm text-start">
                  {modalData?.lesson?.genre}
                </p>
              </div>
              <div className=" w-full flex my-2 ">
                <p className="text-nowrap w-1/2 text-sm font-semibold mb-1">
                  Bio
                </p>
                <p className="text-nowrap  w-1/2 text-sm text-justify">
                  {modalData?.lesson?.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
    //  dfsd
  );
};

export default MusicianModal;
