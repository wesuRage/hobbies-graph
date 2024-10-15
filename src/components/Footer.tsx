export default function Footer(){
    return (
        <footer
            className="bg-slate-600 text-slate-300 font-bold h-20 flex justify-center items-center"
        >
            <h1 className="text-2xl">&copy; {new Date().getFullYear()} - Dias, HY-O, wesuRage</h1>
        </footer>
    );
}