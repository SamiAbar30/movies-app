import React from 'react';

const DropDown = (props) => {
    return (
        <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id={"dropdownMenuButton"+props.index} data-bs-toggle="dropdown" aria-expanded="false">
            {props.name}
            </button>
            <ul className="dropdown-menu" aria-labelledby={"dropdownMenuButton"+props.index}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    );
};

export default DropDown;