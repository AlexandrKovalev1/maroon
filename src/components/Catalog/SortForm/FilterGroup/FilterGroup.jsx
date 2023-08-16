import CheckboxInput from "./CheckboxInput/CheckboxInput";
import { Field } from "formik";
import CheckboxGroup from "./CheckboxGroup";

const FilterGroup = ({ id, headingGroup, value, onChange, className, settingInputs = [], ...props }) => {

    let settingItems = settingInputs.map(item =>
        <Field
            component={CheckboxInput}
            name={id}
            id={item.id}
            label={item.label}
            key={item.id}
        />)


    return (
        <CheckboxGroup
            id={id}
            headingGroup={headingGroup}
            value={value}
            onChange={onChange}
            className={className}
        >
            {settingItems}
        </CheckboxGroup>
    )
}

export default FilterGroup