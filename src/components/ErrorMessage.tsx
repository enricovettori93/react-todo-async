import React from "react";

interface IProps {
    error: any
}

const ErrorMessage = (props: IProps) => {
    const {error} = props;

    if (!error) {
        return (<></>);
    }

    return (
        <React.Fragment>
            {JSON.stringify(error)}
        </React.Fragment>
    )
}

export default ErrorMessage;
