import React from 'react';

export const UserBoard = () => (
    <div className="dropdown">
        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Никита Ласточкин
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
)