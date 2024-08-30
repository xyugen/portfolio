import ThemeToggle from "../theme-toggle";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-t-muted p-8 z-50">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
                <p className="font-extrabold text-5xl md:text-9xl bg-gradient-to-r from-slate-950 to-slate-500 dark:from-slate-500 dark:to-slate-100 bg-clip-text text-transparent">
                    Renzyx.
                </p>
                <div className="flex flex-row items-end gap-2">
                    <p className="text-muted-foreground">
                        Copyright &copy; Renz Arias {new Date().getFullYear()}
                    </p>
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
