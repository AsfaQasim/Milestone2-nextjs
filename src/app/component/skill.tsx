
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";


const Skill = () => {
    return(
      <div className='bg-blue-100 min-h-screen flex flex-col items-center justify-center'>
    <div id = "skill">

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20 justify-center items-center">
     
      <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 lg:w-1/3 mb-4 animate-bounce">
        My Skills.
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {/* skill */}
      <div className="p-4 md:w-1/3">
       <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {<FaHtml5 className='font-bold text-2xl' />}
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
             
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <p className='font-medium text-right'>98%</p>
          <div className="flex-grow">
          
         <div className='h-1 w-full bg-blue-500 rounded-xl'></div>
            
          </div>
        </div>
        
      </div>  
      <div className="p-4 md:w-1/3">
       <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {<FaCss3Alt className='font-bold text-2xl' />}
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
             
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <p className='font-medium text-right'>96%</p>
          <div className="flex-grow">
          
         <div className='h-1 w-full bg-blue-500 rounded-xl'></div>
            
          </div>
        </div>
        
      </div>  
      <div className="p-4 md:w-1/3">
       <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {< SiTypescript className='font-bold text-2xl' />}
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
             
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Javascript/Typescript
            </h2>
          </div>
          <p className='font-medium text-right'>96%</p>
          <div className="flex-grow">
          
         <div className='h-1 w-full bg-blue-500 rounded-xl'></div>
            
          </div>
        </div>
        
      </div>
      <div className="p-4 md:w-1/3">
       <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {<SiNextdotjs className='font-bold text-2xl' />}
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
             
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next js
            </h2>
          </div>
          <p className='font-medium text-right'>94%</p>
          <div className="flex-grow">
          
         <div className='h-1 w-full bg-blue-500 rounded-xl'></div>
            
          </div>
        </div>
        
      </div>
      <div className="p-4 md:w-1/3">
       <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {<FaBootstrap className='font-bold text-2xl' />}
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
             
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Bootstrap
            </h2>
          </div>
          <p className='font-medium text-right'>80%</p>
          <div className="flex-grow">
          
         <div className='h-1 w-full bg-blue-500 rounded-xl'></div>
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

    </div>
    </div>
    )
}

export default Skill