import classes from './SortForm.module.css'
import { Field, Formik } from "formik";
import CheckboxGroup from "./SortFormItems/CheckboxGroup";
import CheckboxInput from "./SortFormItems/CheckboxInput";
import { connect } from 'react-redux';
import { clearFilters, filterGoods } from '../../../redux/goodsReducer';
import { useState } from 'react';
import Icon from '../../common/Icon';
import ButtonCustom from '../../common/ButtonCustom/ButtonCustom';


const SortForm = (props) => {

  let [isActiveMode, setActiveMode] = useState(false);

  const show = () => setActiveMode(true);
  const hidden = () => setActiveMode(false);

  const checkingForParametrSelection = (value) => {
    let error;

    if (value.forFace.length < 1
      && value.forBody.length < 1
      && value.forSkinType.length < 1) {
      error = 'Выберете хотя бы один пункт'

      return error;
    }
  }

  const initialValues = {
    forFace: [],
    forBody: [],
    forSkinType: [],
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={checkingForParametrSelection}

      onSubmit={(values, actions) => {
        hidden();
        actions.resetForm();
        props.filterGoods(values);
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 500);
      }}>
      {({
        errors,
        resetForm,
        handleSubmit,
        setFieldValue,
        values,
        isSubmitting
      }) => (
        <div className={classes.filter__wrapper}>
          <div className={classes.filter__button__toggle}>
            {isActiveMode
              ? <Icon id={'closeButton'} width={20} height={20} onClick={hidden} className={classes.button__close} />
              : <ButtonCustom onClick={show} title={'Фильтр'} />}
          </div>
          {isActiveMode && <form onSubmit={handleSubmit} onReset={resetForm} className={classes.form}>
            {errors[0] && <div className={classes.block__errors}>{Object.values(errors).join('')}</div>}
            <div className={classes.checkboxGroup}>
              <CheckboxGroup
                id="forFace"
                headingGroup={'Уход для лица'}
                value={values.forFace}
                onChange={setFieldValue}
              >
                <Field
                  component={CheckboxInput}
                  name="forFace"
                  id="Крема для лица"
                  label="Крема"
                />
                <Field
                  component={CheckboxInput}
                  name="forFace"
                  id="Сыворотки"
                  label="Сыворотки"
                />
                <Field
                  component={CheckboxInput}
                  name="forFace"
                  id="Маски"
                  label="Маски"
                />
                <Field
                  component={CheckboxInput}
                  name="forFace"
                  id="Пенки"
                  label="Пенки"
                />
                <Field
                  component={CheckboxInput}
                  name="forFace"
                  id="Тоники"
                  label="Тоники"
                />
                <Field
                  component={CheckboxInput}
                  name="forFace"
                  id="Пудры"
                  label="Пудры"
                />
              </CheckboxGroup>
            </div>
            <div className={classes.checkboxGroup}>
              <CheckboxGroup
                id="forBody"
                headingGroup={'Уход для тела'}
                value={values.forBody}
                onChange={setFieldValue}
              >
                <Field
                  component={CheckboxInput}
                  name="forBody"
                  id="Крема для тела"
                  label="Крема"
                />
                <Field
                  component={CheckboxInput}
                  name="forBody"
                  id="Масла"
                  label="Масла"
                />
                <Field
                  component={CheckboxInput}
                  name="forBody"
                  id="Скрабы"
                  label="Скрабы"
                />
                <Field
                  component={CheckboxInput}
                  name="forBody"
                  id="Мыло"
                  label="Мыло"
                />
                <Field
                  component={CheckboxInput}
                  name="forBody"
                  id="Бомбочки для ванны"
                  label="Бомбочки для ванны"
                />
                <Field
                  component={CheckboxInput}
                  name="forBody"
                  id="Соль для ванны"
                  label="Соль для ванны"
                />
              </CheckboxGroup>
            </div>
            <div className={classes.checkboxGroup}>
              <CheckboxGroup
                id="forSkinType"
                headingGroup={'Тип кожи'}
                value={values.forSkinType}
                onChange={setFieldValue}
                className={''}
              >
                <Field
                  component={CheckboxInput}
                  name="forSkinType"
                  id="Нормальная"
                  label="Нормальная"
                />
                <Field
                  component={CheckboxInput}
                  name="forSkinType"
                  id="Сухая"
                  label="Сухая"
                />
                <Field
                  component={CheckboxInput}
                  name="forSkinType"
                  id="Жирная"
                  label="Жирная"
                />
                <Field
                  component={CheckboxInput}
                  name="forSkinType"
                  id="Комбинированная"
                  label="Комбинированная"
                />
              </CheckboxGroup>


              <div className={classes.buttonGroup}>
                <ButtonCustom
                  type={'submit'}
                  disabled={isSubmitting}
                  title={'Применить'}
                  className={classes.buttonSubmit}
                />
                <ButtonCustom
                  type={'reset'}
                  disabled={isSubmitting}
                  onClick={props.clearFilters}
                  title={'Сбросить'}
                />

              </div>
            </div>
          </form>}

        </div>

      )}
    </Formik>

  )
}



export default connect(null, { filterGoods, clearFilters })(SortForm);