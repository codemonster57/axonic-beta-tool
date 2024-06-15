import { Children } from "./types/global";
import IconsViews from "./views/dashboard/IconsViews";
import Iploockup from "./views/dashboard/Iploockup";
import RGBtohex from "./views/dashboard/RGBtohex";
import Tesseracts from "./views/dashboard/Tesseract";
import URLShortener from "./views/dashboard/URLShortener";

type MenuItemType = {
  name: string;
  icon: Children;
  slug: string;
  elem: Children;
  gaps?: boolean;
  submenu?: Array<{
    name: string;
    icon: Children;
    slug: string;
    elem: Children;
  }>;
};

type MenuType = Array<MenuItemType>;
const menus: MenuType = [
  {
    name: "ip lookup",
    icon: <i className="fa fa-map-marker-alt"></i>,
    slug: "ip-lookup",
    elem: <Iploockup />,
  },
  {
    name: "Image to text",
    icon: <i className="fa fa-image"></i>,
    slug: "image-to-text",
    elem: <Tesseracts />,
  },
  {
    name: "RGB to hex",
    icon: <i className="mdi mdi-invert-colors"></i>,
    slug: "rgb-to-hex",
    elem: <RGBtohex />,
  },
  {
    name: "URL Shortener",
    icon: <i className="fa fa-link"></i>,
    slug: "url-shortener",
    elem: <URLShortener />,
  },
  {
    name: "Icons",
    icon: <i className="mdi mdi-emoticon"></i>,
    slug: "icons",
    elem: <IconsViews />,
  },
];

export default menus;
