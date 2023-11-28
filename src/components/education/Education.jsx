import React from "react";

function Education() {

        const customStyle1 = {
          width: '85%',
        };
        const customStyle2 = {
            width: '80%',
          };
        const customStyle3 = {
          width: '60%',
        };
        const customStyle4 = {
            width: '75%',
          };
        const customStyle5 = {
          width: '62%',
        };
        const customStyle6 = {
            width: '74%',
          };

  return (
    <div className="bg-[#111827]">
      <div className="py-20 md:py-32 px-5 md:px-0 md:max-w-5xl mx-auto">
        <div className="flex flex-col mb-5">
          <h1 className="font-bold text-white text-4xl ">Skills</h1>
          <p className="text-gray-500 md:w-3/4 py-5">Web developer proficient in React, MongoDB, JavaScript, HTML, CSS. Currently studying at Coding Ninjas (2022-2023) to enhance coding skills further.</p>
        </div>
        <div className="gap-8 sm:grid sm:grid-cols-2">
          <div>
            <div>
              <div className="text-sm font-medium text-gray-500 ">HTML</div>
              <div className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded" style={customStyle1}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 ">85%</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 ">tailwind, Bootstrap, Sass</div>
              <div className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 ">
                  <div className="bg-blue-600 h-2.5 rounded " style={customStyle2}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 ">80%</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 ">
                JavaScript
              </div>
              <div className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 ">
                  <div className="bg-blue-600 h-2.5 rounded " style={customStyle3}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 ">60%</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 ">
                React.js
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded " style={customStyle4}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 ">75%</span>
              </div>
            </div>
          </div>
          <div className="py-5 md:py-0">
            <div>
              <div className="text-sm font-medium text-gray-500 ">
                fireBase, SQL Server, MongoDB Atlas
              </div>
              <div className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 ">
                  <div className="bg-blue-600 h-2.5 rounded " style={customStyle5}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 ">62%</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 ">
                Redux
              </div>
              <div className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 ">
                  <div className="bg-blue-600 h-2.5 rounded " style={customStyle6}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 ">74%</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
