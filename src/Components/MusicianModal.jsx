import { Modal } from 'antd';
import React from 'react';        

const MusicianModal = ({open , setOpen ,modalData}) => {
    return (
        <div>
        <Modal
     open={open}
     onCancel={() => setOpen(false)}
     centered
     footer={false}
     width={650}
   >
     <div className='p-6'>
       <div className='flex justify-center items-center flex-col py-5 gap-4'>
         <img className='w-44 h-28 rounded-lg' src="https://s3-alpha-sig.figma.com/img/3215/31da/7717f3b88e4b580d3a8d79d74b866964?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcHk7qseAxQaJmxmmrj~fy8y4CukRTmD~Fd-MzCGwSMPYXCUzruiRXPS8GWuptR0l2~DGHxcchaejOYgycmNDuMiZnjPE2ErthBNZYU0kYwml~CFGX22YYO3BYEFrYNknt2MWBIq6UrTjUbv2eN~K~3YNKeLL5FgKtAd1TjwVxuJP4E4DqJZMy8a9HdklrKipwB8WwhnRgIZVBfhopV5mPvatTODxn1LeubH0VwYg~y0m1QY93QjgUjsW6EMY3N9teGltQyZNzGhcRaQNbb-88MTkmHkG~N3l0KbTWb2kWroyygyPOOCcGDCZtzyAO6JggHnoGPzRLHoFEqzo4LIHQ__" alt="" />
         <p className=' font-semibold text-xl'>Musician Information</p>
       </div> 

       <div className='flex  justify-center items-center   mx-auto gap-3'>  
         <div> 
         <div className=' w-full flex '>
           <p className='w-1/2 text-sm font-semibold mb-1'>Name</p>
           <p className=' w-1/2 text-sm text-start'>Taylor Swift</p>
         </div> 

         <div  className=' w-full flex my-2'>
           <p  className='w-1/2 text-sm font-semibold mb-1'>Email</p>
           <p  className=' w-1/2 text-sm text-start'>mahmud@gmail.com</p>
         </div> 

         <div  className=' w-full flex '>
           <p  className='w-1/2 text-sm font-semibold mb-1'>Address</p>
           <p  className=' w-1/2 text-sm text-start'>76/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris</p>
         </div> 

         <div  className=' w-full flex my-2 '>
           <p  className='w-1/2 text-sm font-semibold mb-1'>Contact No</p>
           <p  className=' w-1/2 text-sm text-start'>+099999</p>
         </div>       

         <div  className=' w-full flex my-2 '>
           <p  className='w-1/2 text-sm font-semibold mb-1'>Genre</p>
           <p  className=' w-1/2 text-sm text-start'>Pop</p>
         </div>       
         <div  className=' w-full flex my-2 '>
           <p  className='w-1/2 text-sm font-semibold mb-1'>Bio</p>
           <p  className=' w-1/2 text-sm text-justify'>Born on December 13, 1989, in Reading, Pennsylvania, Taylor Swift is a singer-songwriter and guitarist who rose to fame for her poignant lyrics and crossover success from country to pop music. Swift's career began with her self-titled debut album in 2006, followed by the multi-platinum "Fearless" in 2008. Known for hits like "Love Story" and "Shake It Off," she has won 11 Grammy Awards and holds a significant influence in both music and culture. Beyond her music, Swift is recognized for her advocacy and philanthropy</p>
         </div>       
         </div>  
       
       </div>
     </div>
   </Modal> 
     </div>
    );
};

export default MusicianModal;