interface LogoProps {
	className?: string;
}

const Logo = ({ className }: LogoProps) => {
	return <img src="/logo.svg" alt="Logo" className={className} />;
};

export default Logo;
