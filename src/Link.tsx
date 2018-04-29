import * as React from 'react';

interface ILinkProps {
    active: boolean,
    children: React.ReactNode,
    onClick(): void
}

const Link: React.SFC<ILinkProps> = ({ active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>;
    }    
    return (
        <a 
            href=""
            onClick={                
                e => {
                    // tslint:disable-next-line:jsx-no-lambda
                    e.preventDefault();
                    onClick();
                }
            }
        >
            {children}
        </a>
    );
};

export default Link;