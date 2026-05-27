export function BackgroundMesh() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Gradients for light mode */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.15)_0%,transparent_70%)] blur-[100px] dark:hidden" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(100,100,100,0.1)_0%,transparent_70%)] blur-[120px] dark:hidden" />
            {/* Gradients for dark mode */}
            <div className="hidden dark:block absolute top-[-15%] left-[-5%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.2)_0%,transparent_70%)] blur-[130px]" />
            <div className="hidden dark:block absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,100,200,0.15)_0%,transparent_70%)] blur-[140px]" />
            {/* Grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,...')] pointer-events-none" />
        </div>
    );
}
