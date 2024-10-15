import NavLink from "./NavLinks";

export default function Header() {
    return (
        <header className="px-4 bg-slate-600 h-20 text-white flex justify-between items-center">
            <h1 className="text-4xl font-extrabold text-slate-300">HOBBIES GRAPH</h1>
            <nav>
                <NavLink href="#iniciativa">INICIATIVA</NavLink>
                <NavLink href="#resultados">RESULTADOS</NavLink>
                <NavLink href="#conclusao">CONCLUSÃO</NavLink>
            </nav>
        </header>
    )
}