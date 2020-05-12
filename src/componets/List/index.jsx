import React from 'react';
import './list.scss';
import classNames from 'classnames';

import Badge from '../Badge/'

import removeSvg from '../../assets/img/remove.svg';


const List = ({items, isRemoveble, click, onRemove}) => {

    const removeList = (item) => {
        if (window.confirm('siz ochirishni hohlaysizmi?')){
            onRemove(item);
        }
    }


    return (
     <ul onClick={click} className="list">
         {
            items.map((item,index) => 
            <li key={index}  className={classNames(item.className, {'active' : item.active})}>
                <i>
                    {item.icons ? item.icons :  <Badge color={item.color} />}
                </i>
                <span>{item.name}</span>
                {isRemoveble && 

                <img 
                    className="list__remove-icon"
                    src={removeSvg} alt="Remove Icon"
                    onClick={() => removeList(item)}
                 />
                 }
            </li>
            )
         }
        
     </ul>
    )
}

export default List


