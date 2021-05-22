import React, { useState } from "react"; 
  


const ListStateHolder = (props: any) => {

    const [expandedListIndex, setExpandedListIndex] = useState(0);

    const childrenWithProps = React.Children.map(props.children, (child, index) => {
      return React.cloneElement(child, {
        expandList: (currentIndex : number) => {
            currentIndex = currentIndex === expandedListIndex ? -1 : currentIndex;
          setExpandedListIndex(currentIndex);          
        },
        index,
        isActive: index === expandedListIndex,
      });
    });
  
    return childrenWithProps;
  }

export default ListStateHolder
