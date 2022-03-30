import { string } from 'prop-types';

// Essa string é diferente da String do JS

export const Button = ({children, className, onClick}) => {
    return <button
                    className={className}
                    onClick={onClick}
            > 
                    {children}
                    
            </button>
}

Button.propTypes = {
    children: string,
}