import Header from '~/components/Layout/components/Header/Header';
import Sidebar from './Sidebar/Sidebar';

const DefaultLayout = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{props.children}</div>
            </div>
        </>
    );
};

export default DefaultLayout;
