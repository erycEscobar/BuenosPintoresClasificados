import './NavBar.scss';

import { LoginOptions } from './LoginOptions';
import LinksToList from '../LinksToList/LinksToList';
import Logo from '../Logo/Logo';
import { UserAuth } from '../../userContext/userContext';
import { UserOptions } from './UserOptions';

const NavBar = () => {

    const { userLogged } = UserAuth();

    return (
        <div className='navBar_container'>
            <div className='navBar'>
                <Logo />
                {userLogged ? (
                    <section className='navBarOptions_container'>
                        <LinksToList optionsList={UserOptions} />
                    </section>
                ) : (
                    <section className='navBarOptions_container'>
                        <LinksToList optionsList={LoginOptions} />
                    </section>
                )}
            </div>
        </div>
    )
}
export default NavBar