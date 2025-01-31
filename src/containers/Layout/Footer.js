import { HeartIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 w-full py-1 bg-gray-100">
      <p className="text-gray-700 flex items-center justify-center" dir="ltr">
        Made with <HeartIcon className="w-6 h-6 fill-red-500 mx-1" /> by Maedeh
      </p>
    </footer>
  );
};

export default Footer;
