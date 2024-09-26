import { images } from "@/assets/images";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FiMenu } from "react-icons/fi"; // Import only the hamburger icon

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="px-6 py-4">
        <nav className="w-full flex justify-between flex-row md:flex-col sm:flex-row lg:flex-row items-center">
          <div className="flex gap-2 items-center">
            <img src={images.logo} alt="logo" className="h-12 w-auto sm:h-20" />
            <div className="hidden md:block">
              <span className="text-base sm:text-lg text-gray-700 font-semibold uppercase leading-none font-serif">
                Saint Joseph School of Fairview Inc
              </span>
              <p className="text-xs text-gray-700">Innovative Learning with Traditional Values</p>
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden flex items-center">
            <button aria-label="Menu">
              <FiMenu size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Navigation List - Hidden on Mobile and Tablet */}
          <ul className="hidden md:flex justify-between items-center gap-5">
            <li>
              <a href="" className="text-base font-medium text-gray-700">Home</a>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium text-gray-700">About Us</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4 transition-opacity duration-200 ease-in-out">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Our Mission</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Our Vision</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Our History</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium text-gray-700">Admission</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4  transition-opacity duration-200 ease-in-out">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">How to Apply</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Tuition Fees</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Scholarships</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium text-gray-700">News</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4  transition-opacity duration-200 ease-in-out">
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Latest Updates</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Events</NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center whitespace-nowrap">Announcements</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <a href="" className="text-base font-medium text-gray-700">Contact</a>
            </li>
            <li>
              <a href="">
                <Button className="bg-[#630000] rounded-full">Enroll Now</Button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
