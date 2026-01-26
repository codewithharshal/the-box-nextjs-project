import { LinkComponent } from "./linkComponent";

export const NavLink = () => {
  return (
    <ul className="flex flex-col md:flex-row md:items-center md:gap-6 ">
      <li className="border-b md:border-b-0 md:border-r border-gray-200">
        <LinkComponent href="/">Home</LinkComponent>
      </li>

      <li className="border-b md:border-b-0 md:border-r border-gray-200">
        <LinkComponent href="/about">About Us</LinkComponent>
      </li>

      <li className="border-b md:border-b-0 md:border-r border-gray-200">
        <LinkComponent href="/projects">Projects</LinkComponent>
      </li>

      <li className="border-b md:border-b-0 md:border-r border-gray-200">
        <LinkComponent href="/services">Services</LinkComponent>
      </li>

      <li className="border-b md:border-b-0 border-gray-200 text-amber-500">
        <LinkComponent href="/contact">Contact Us</LinkComponent>
      </li>
    </ul>
  );
};
