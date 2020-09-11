import React from 'react';

const Main = ({aside, children}) => (
    <div className="main main-wrapper">
        <div className="main__aside">
            {aside}
        </div>
        <div className="main__content">
            {children}
        </div>

    </div>
);

export default Main;