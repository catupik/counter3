export type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({title, onClick, disabled} : ButtonPropsType ) => {
    return (
        <button className='btn' onClick={onClick} disabled={disabled}>{title} </button>
    );
};

