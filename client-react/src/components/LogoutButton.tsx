import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../context/user.provider';




export const LogoutButton : React.FC = () => {
    const {dispatch} = useContext(UserContext);


    function handleLogout(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        e.preventDefault();
        dispatch({
            type: "LOGOUT",
            payload: {
                token: undefined
            }
        })
    }

    return (
        <div>
            <Button variant="btn btn-outline-light btn-block mt-1" onClick={(e) => { handleLogout(e)} }>Выйти</Button>{' '}
        </div>
    );
}

