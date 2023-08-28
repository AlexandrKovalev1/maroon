import classes from './BlockAditionalInfo.module.css'
import Icon from '../../../common/Icon'
import { useState } from 'react'


const BlockAditionalInfo = ({ heading, content, ...props }) => {
    let [isOpen, setIsOpen] = useState(false)


    return (
        <div className={classes.block__wrapper}>
            <span className={classes.block__heading} onClick={() => { setIsOpen(!isOpen) }}>
                <div>{heading}</div>
                {!isOpen
                    ?
                    <Icon id={'plus'} width={17} height={17} />

                    :
                    <Icon id={'minus'} width={17} height={3} />
                }
            </span>
            {isOpen && <span className={classes.block__content}>
                {content}
            </span>}
        </div>
    )
}

export default BlockAditionalInfo;