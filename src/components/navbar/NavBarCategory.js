import React from 'react';
import DropDown from '../DropDown';

const NavBarCategory = () => {
    return (
        <>
     
                <div className='d-flex justify-content-center'>
                    <ul className="d-flex flex-row rounded-bottom bg-light justify-content-between ">                  
                        {      
                            ["Films", "Serials", "Cartoons", "Anime"].map((name,index) =>
                            
                                <DropDown key={index} index={index} name={name}/>
                            )
                        }          
                    </ul>
                </div>
       
         
        </>
    );
};

export default NavBarCategory;