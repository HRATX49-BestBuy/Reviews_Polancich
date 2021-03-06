import React from "react";

/*
[COMPONENT] Whats Included 
[INFO] It diplays a list of included items of the current product

Component Structure:
Whats Included

note:
This was not my focus component, its static, and renders the same information everytime.
The code inside may not be... Factored properly
*/
const WhatsIncluded = (props) => {
  return (
    <div className="bILPWhatsIncludedMain">
      <div className="bILPWhatsIncludedMainName">
        <span>{props.data[0].categoryName}</span>
      </div>
      <div className="bILPWhatsIncludedMainDescriptorContainer">
        <div className="bILPWhatsIncludedMainDescriptor">
          <span>{props.data[0].categoryDescriptors[0]}</span>
        </div>
        <div className="bILPWhatsIncludedMainDescriptor">
          <span>{props.data[0].categoryDescriptors[1]}</span>
        </div>
        <div className="bILPWhatsIncludedMainDescriptor">
          <span>{props.data[0].categoryDescriptors[2]}</span>
        </div>
        <div className="bILPWhatsIncludedMainDescriptor">
          <span>{props.data[0].categoryDescriptors[3]}</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
