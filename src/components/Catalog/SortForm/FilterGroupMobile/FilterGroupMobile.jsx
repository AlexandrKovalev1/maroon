import CheckboxInputMobile from "../../SortForm/FilterGroupMobile/CheckboxInputMobile/CheckboxInputMobile";
import { Field } from "formik";
import CheckboxGroupMobile from "./CheckboxGroupMobile/CheckboxGroupMobile";

const FilterGroupMobile = ({ id, headingGroup, value, onChange, className, settingInputs = [], ...props }) => {

    let settingItems = settingInputs.map(item =>
        <Field
            component={CheckboxInputMobile}
            name={id}
            id={item.id}
            label={item.label}
            key={item.id}
        />)


    return (
        <CheckboxGroupMobile
            id={id}
            headingGroup={headingGroup}
            value={value}
            onChange={onChange}
            className={className}
        >
            {settingItems}
        </CheckboxGroupMobile>
    )
}

export default FilterGroupMobile