interface CardProps {
    children: React.ReactNode;
}
const CardGlassmorphism = ({ children }: CardProps) => {
    return (
        <div className="bg-egyptian h-[682px] w-[682px] rounded-md bg-cover bg-no-repeat">
            <div className="h-full rounded-md border border-gray-100 bg-opacity-100 backdrop-blur-3xl backdrop-filter">
                {children}
            </div>
        </div>
    );
};
export default CardGlassmorphism;
