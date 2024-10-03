import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.ComponentType<DefaultLayoutProps> = ({
    children,
}) => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
