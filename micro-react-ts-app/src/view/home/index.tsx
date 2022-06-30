import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import store from "../../store";

const Home: FC = () => {
    const logout = useCallback(() => {
        store.mainProps.setGlobalState({ login: { flag: false, info: null } })
    }, [])

    return (
        <>
            <h3>Home</h3>
            <div>
                <p onClick={logout} style={{ width: '100px', textAlign: 'center', backgroundColor: '#ccc', border: '1px solid #333', padding: '6px 12px', cursor: 'pointer' }}>登出</p>
            </div>
            <Link to={'/children'}>to children</Link>
        </>
    );
}

export default Home
