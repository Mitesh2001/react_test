type GreetProps = {
    name?: string
}

export default (props: GreetProps) => {
    return (
        <div>Hello {props.name}</div>
    )
}