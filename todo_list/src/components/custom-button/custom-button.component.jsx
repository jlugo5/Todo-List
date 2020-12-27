const CustomButton = ({children,...otherProps}) => (
    <div>
        <button {...otherProps} >{children}</button>
    </div>
)

export default CustomButton