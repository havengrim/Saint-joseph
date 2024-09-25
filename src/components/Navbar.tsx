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

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="px-6 py-4">
        <nav className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={images.logo} alt="logo" className="h-18 w-20" />
            <div>
              <span className="text-base sm:text-lg text-gray-700 font-semibold uppercase leading-none font-serif">
                Saint Joseph School of Fairview Inc
              </span>
              <p className="text-xs text-gray-700">Innovative Learning with Traditional Values</p>
            </div>
          </div>
          <ul className="flex justify-between items-center gap-5">
            <li>
              <a href="" className="text-base font-medium text-gray-700">Home</a>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative group">
                    <NavigationMenuTrigger className="text-base font-medium text-gray-700">About Us</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-1 group-hover:block w-[20vw] p-4  transition-opacity duration-200 ease-in-out">
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
                <Button className="bg-[#630000]">Enroll Now</Button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
