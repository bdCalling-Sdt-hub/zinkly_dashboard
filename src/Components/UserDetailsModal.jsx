import { Modal } from 'antd';
import React from 'react';

const UserDetailsModal = ({open , setOpen ,modalData}) => {
    return (
        <div>
           <Modal
        open={open}
        onCancel={() => setOpen(false)}                   
        centered
        footer={false}          
        width={500}
      >
        <div className='p-6'>
          <div className='flex justify-center items-center flex-col py-5 gap-4'>
            <img className='w-40 h-28 rounded-lg' src="https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__" alt="" />
            <p className='text-lg font-semibold'>User Information   </p>
          </div>
          <div className='flex  justify-center items-center gap-3'>  
            <div> 
            <div className=' w-full flex '>
              <p className='w-1/2 text-sm font-semibold mb-1'>Name:</p>
              <p className=' w-1/2 text-sm text-start'>Mr. Mahmud</p>
            </div>                

            <div  className=' w-full flex my-2'>
              <p  className='w-1/2 text-sm font-semibold mb-1'>Email:</p>
              <p  className=' w-1/2 text-sm text-start'>mahmud@gmail.com</p>
            </div> 

            <div  className=' w-full flex '>
              <p  className='w-1/2 text-sm font-semibold mb-1'>Address:</p>
              <p  className=' w-1/2 text-sm text-start'>76/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris</p>
            </div>
            <div  className=' w-full flex my-2 '>
              <p  className='w-1/2 text-sm font-semibold mb-1'>Contact No:</p>
              <p  className=' w-1/2 text-sm text-start'>+099999</p>
            </div>       
            </div>
            
            <div> </div>
          </div>
        </div>
      </Modal> 
        </div>
    );
};

export default UserDetailsModal;