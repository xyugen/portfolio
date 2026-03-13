import ThemeToggle from "../theme-toggle";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-t-border p-8 xl:px-20 z-50">
            <div className="flex flex-col flex-wrap md:flex-row items-start md:items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <p className="font-extrabold text-5xl md:text-9xl bg-gradient-to-r from-slate-950 to-slate-500 dark:from-slate-500 dark:to-slate-100 bg-clip-text text-transparent leading-none">
                        Renzyx.
                    </p>
                </div>
                <div className="flex flex-row items-end gap-2">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} Renz Arias
                    </p>
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
