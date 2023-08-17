import React, { useState } from "react";
import classes from './CheckboxMobile.module.css'
import Icon from "../../../../common/Icon";

const CheckboxGroupMobile = ({ value, id, onChange, children, headingGroup, className, ...props }) => {
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!isOpen);

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
            <div className={classes.heading__wrapper} onClick={toggle}>
                <h4 style={{ fontSize: '22px' }}>{headingGroup}</h4>
                {!isOpen
                    ? <Icon id={'plus'} width={17} height={17} />
                    : <Icon id={'minus'} width={17} height={3} />}
            </div>
            {isOpen &&
                <div className={classes.list__settings_wrapper}>
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, {
                            field: {
                                value: value.includes(child.props.id),
                                onChange: handleChange,
                            }
                        });
                    })}
                </div>
            }
        </div>
    )
}

export default CheckboxGroupMobile;