import classes from './SortForm.module.css'
import { Formik } from "formik";
import { connect } from 'react-redux';
import { clearFilters, filterGoods } from '../../../redux/goodsReducer';
import { useState } from 'react';
import Icon from '../../common/Icon';
import ButtonCustom from '../../common/ButtonCustom/ButtonCustom';
import FilterGroup from './FilterGroup/FilterGroup';
import FilterGroupMobile from './FilterGroupMobile/FilterGroupMobile';
import useResizeWidth from '../../common/hooks/useResizeWidth';



const SortForm = (props) => {
  let width = useResizeWidth();

  let FormFilter = width >= 768 ? FilterGroup : FilterGroupMobile;

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

  let forFaceParams = [
    {
      id: 'Крема для лица',
      label: 'Крема',
    },
    {
      id: 'Сыворотки',
      label: 'Сыворотки',
    },
    {
      id: 'Маски',
      label: 'Маски'
    },
    {
      id: 'Пенки',
      label: 'Пенки',
    },
    {
      id: 'Тоники',
      label: 'Тоники',
    },
    {
      id: 'Пудры',
      label: 'Пудры',
    }
  ];

  let forBodyParams = [
    {
      id: 'Крема для тела',
      label: 'Крема'
    },
    {
      id: 'Масла',
      label: 'Масла'
    },
    {
      id: 'Скрабы',
      label: 'Скрабы'
    },
    {
      id: 'Мыло',
      label: 'Мыло'
    },
    {
      id: 'Бомбочки для ванны',
      label: 'Бомбочки для ванны'
    },
    {
      id: 'Соль для ванны',
      label: 'Соль для ванны'
    }
  ];

  let typeOfSkinParams = [
    {
      id: 'Нормальная',
      label: 'Нормальная',
    },
    {
      id: 'Сухая',
      label: 'Сухая',
    },
    {
      id: 'Жирная',
      label: 'Жирная',
    },
    {
      id: 'Комбинированная',
      label: 'Комбинированная',
    }
  ];


  return (
    <Formik
      initialValues={initialValues}
      validate={checkingForParametrSelection}

      onSubmit={(values, actions) => {
        hidden();
        actions.resetForm();
        props.filterGoods(values);
        localStorage.setItem('filters',JSON.stringify(values))
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
            <div className={`${classes.checkboxGroup} ${classes.group__one}`}>
              <FormFilter
                id="forFace"
                headingGroup={'Уход для лица'}
                value={values.forFace}
                onChange={setFieldValue}
                settingInputs={forFaceParams}
              />
            </div>
            <div className={`${classes.checkboxGroup} ${classes.group__two}`}>
              <FormFilter
                id="forBody"
                headingGroup={'Уход для тела'}
                value={values.forBody}
                onChange={setFieldValue}
                settingInputs={forBodyParams}
              />
            </div>
            <div className={`${classes.checkboxGroup} ${classes.group__three}`}>
              <FormFilter
                id="forSkinType"
                headingGroup={'Тип кожи'}
                value={values.forSkinType}
                onChange={setFieldValue}
                settingInputs={typeOfSkinParams}
              />
            </div>

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
                className={classes.buttonReset}
              />

            </div>
          </form>}

        </div>

      )
      }
    </Formik >

  )
}



export default connect(null, { filterGoods, clearFilters })(SortForm);