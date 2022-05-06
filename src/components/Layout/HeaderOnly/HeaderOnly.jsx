import Header from '~/components/Layout/components/Header/Header';

const HeaderOnly = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">{props.children}</div>
            </div>
        </>
    );
};

export default HeaderOnly;
