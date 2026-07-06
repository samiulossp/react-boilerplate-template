import logo from "../../assets/icons/logo.png"; 

export default function Logo() {
  return (
    <img
      src={logo}
      alt="MyApp Logo"
      className="h-8 w-8 object-contain"
    />
  );
}
