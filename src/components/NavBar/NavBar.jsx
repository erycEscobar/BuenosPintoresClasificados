import './NavBar.scss';

import LinksToList from '../LinksToList/LinksToList';
import Logo from '../Logo/Logo';
import { UserAuth } from '../../userContext/userContext';
import { UserOptions } from './UserOptions';

function NavBar() {

    const { userLogged } = UserAuth();

    return (
        <div className='navBar_container'>
            <div className='navBar'>
                <Logo />
                {userLogged && (
                    <section className='navBarOptions_container'>
                        <LinksToList optionsList={UserOptions} />
                    </section>
                )}
            </div>
        </div>
    );
}
export default NavBar