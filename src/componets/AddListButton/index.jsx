import React, {useState} from 'react';
import List from '../List';
import './addButton.scss';
import Badge from '../Badge/';
import CloseSvg from '../../assets/img/close.svg';
const AddListButton = ({colors, onAdd }) => {
    const [state, setState] = useState(false);

    const [SelectedState, setSelectedState] = useState(colors[0].id);

    const [inputValue, setInputValue] = useState('');

    const onClose = () =>{
        setState(false);
        setInputValue('');
        setSelectedState(colors[0].id)
    }


    const addList = () => {
        if(!inputValue){
            alert('Harf tering');
            return;
        }
        const color = colors.filter(c => c.id === SelectedState)[0].name
        onAdd( {
            id: Math.random(),
            name: inputValue,
            color
          });
          onClose()
    }

    return (
        (
          <div className="add-list">
              <List click={() => setState(true)}  items={[
                        {
                        className: "list__add-button" ,
                        icons: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ,
                        name: 'Добавить папку',
                        active: true
                        }
                    ]}
            />
            {state && <div className="add-list__popup">
                <img 
                onClick={onClose} 
                className="add-list__popup-close-btn" 
                src={CloseSvg}
                alt="svg"
                 />
              

                <input 
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue} 
                    className="field" 
                    type="text" 
                    name="" id="" 
                    placeholder="Название папки"
                />


                <ul className="add-list__popup-colors">
                        {
                            colors.map((color, index) => 
                            <Badge click={() =>
                             setSelectedState(color.id)} 
                             key={color.id}
                             color={color.name} 
                             className={SelectedState === color.id && 'active'}
                            /> )
                        }
                </ul>    
                <button onClick={addList} className="button">Добавить</button>    

            </div>}
          </div>
        )
    )
};

export default AddListButton;