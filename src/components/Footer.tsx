export default function Footer() {
    return (
        <footer className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant/30 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="flex flex-col gap-6 md:col-span-2">
                    <span className="font-headline-lg text-headline-lg text-primary">Aura</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Aura Acoustics. Engineered for silence.</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1">Design and Developed by Aditya Shah</p>
                </div>
            </div>
        </footer>
    );
}
