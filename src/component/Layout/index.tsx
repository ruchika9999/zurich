import React, { ReactNode } from 'react'

type Props= {
    children : ReactNode
}

const Main: React.FC<Props> = (props) => {

    const {children} = props;

    return <div>{children}</div>

}

export default Main;