import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { 
        name: 'Home', href: '/'
    },
    { 
        name: 'Projects', href: '/projects'
    },
    {
        name: 'Contact', href: '/contact'
    },
];

export default function Header(){
    return (
        <>
        <div className="flex justify-evenly items-center p-6">
            {links.map((link) => {
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className="m-auto w-1/3"
                >
                    <p className="white text-center">{link.name}</p>
                </Link>
                )
            })}
        </div>
        </>
    );
}