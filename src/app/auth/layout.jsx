export const metadata = {
    title: "Authentication pages",
    description: "Welcome to NextJS App",
};

export default function AuthLayout({ children }) {
    return (
        <div>
            <p>Authentication</p>
            {children}
        </div>
    );
}
