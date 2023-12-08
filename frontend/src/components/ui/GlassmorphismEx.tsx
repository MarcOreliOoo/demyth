interface CardProps {
    children: React.ReactNode;
}
const CardGlassmorphism = ({ children }: CardProps) => {
    return (
        <div className="h-[682px] w-[682px] rounded-md bg-egyptian bg-cover bg-no-repeat">
            <div className="h-full rounded-md border border-gray-100 bg-opacity-100 backdrop-blur-2xl backdrop-filter">
                {children}
            </div>
        </div>
    );
};
export default CardGlassmorphism;
