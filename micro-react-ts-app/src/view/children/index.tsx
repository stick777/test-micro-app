import React, { FC } from "react";
import { Link } from "react-router-dom";

const Children: FC = () => {
    return (
        <>
            <p>react: Children</p>
            <Link to={'/home'}>to children</Link>
        </>
    );
}

export default Children
