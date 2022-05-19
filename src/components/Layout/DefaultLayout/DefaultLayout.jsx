import Header from '~/components/Header/Header';
import Sidebar from '~/components/Sidebar/Sidebar';

import './DefaultLayout.scss';

const DefaultLayout = (props) => {
    return (
        <div className="defaultlayout__wrapper">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
