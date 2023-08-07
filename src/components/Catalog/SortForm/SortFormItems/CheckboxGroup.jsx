import React from "react";

const CheckboxGroup = ({value,id,onChange,children,headingGroup,className,...validate}) => {

  const handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    onChange(id, valueArray);
  };


  return (
          <div className={className}>
            <h4>{headingGroup}</h4>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: handleChange,
              }
            });
          })}
      </div>
  )
}

export default CheckboxGroup;